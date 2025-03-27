import { db } from "@/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

interface ExecuteResponse {
  language: string;
  version: string;
  run: {
    stdout?: string;
    stderr?: string;
    output?: string;
    executionTime?: number;
    memory_usage?: number;
  };
}

export async function POST(req: Request) {
  const { code, language, problemId } = await req.json();

  const problem = await db.problem.findUnique({
    where: { id: problemId },
    include: { testCases: true },
  });

  if (!problem) {
    return new NextResponse("Problem not found", { status: 404 });
  }

  const wrappedCode = `
      ${code} + ${problem.wrappedCode || ""}
  `;

  try {
    const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
      language,
      version: "18.15.0",
      files: [{ content: wrappedCode }],
    });

    const { stdout, stderr, executionTime, memory_usage } = response.data.run;
    const expectedOutput = problem.testCases[0]?.output?.trim();
    const rawOutput = stdout?.trim() || "";

    let status: "Accepted" | "WrongAnswer" | "TimeLimitExceeded" | "RuntimeError" | "CompileError";

    if (stderr) {
      if (stderr.includes("Time Limit Exceeded")) {
        status = "TimeLimitExceeded";
      } else {
        status = "RuntimeError";
      }
    } else if (response.data.compile?.stderr) {
      status = "CompileError";
    } else if (rawOutput === expectedOutput) {
      status = "Accepted";
    } else {
      status = "WrongAnswer";
    }

    // const existingSubmission = await db.submission.findFirst({
    //   where: { userId, problemId },
    //   orderBy: { createdAt: "desc" },
    // });
    
    // if (existingSubmission) {
    //   await db.submission.update({
    //     where: { id: existingSubmission.id },
    //     data: { status, runtime: executionTime, memory: memory_usage },
    //   });
    // } else {
    //   await db.submission.create({ data: { /* same data as before */ } });
    // }

    const submission = await db.submission.create({
      data: {
        code,
        language,
        status,
        runtime: executionTime || 0,
        memory: memory_usage || 0,
        problemId,
      },
    });

    return NextResponse.json({
      submission: {
        id: submission.id,
        code: submission.code,
        language: submission.language,
        status: submission.status,
        runtime: submission.runtime,
        memory: submission.memory,
        createdAt: submission.createdAt,
        problemId: submission.problemId,
      },
    });
    // console.log(response.data)
    // return NextResponse.json({
    //   response: response.data
    // })
  } catch (error) {
    console.error("Error executing code: ", error);
    return new NextResponse("Failed to execute code", { status: 500 });
  }
}
