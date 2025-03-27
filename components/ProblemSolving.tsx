"use client"

import { useState } from "react"
// import { Toaster } from "@/components/ui/toaster"
// import { useToast } from "@/components/ui/use-toast"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import ProblemDescription from "@/components/ProblemDescription"
import CodeEditor from "@/components/CodeEditor"
import TestCases from "@/components/TestCases"
import { sampleProblem, type TestCase } from "@/lib/sample-data"
import { toast } from "sonner"
import { Problem, Submission } from "@prisma/client"
import TestCaseSection from "@/components/test-case"
import { CloudUpload, CloudUploadIcon, Code, Play } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import axios from "axios"
import { UserButton } from "@clerk/nextjs"
import { redirect } from "next/navigation"


export default function ProblemSolvingPlatform({problem}:{problem:Problem}) {
  // const { toast } = useToast()
  const [language, setLanguage] = useState("python")
  const [testCases, setTestCases] = useState<TestCase[]>(sampleProblem.testCases)
  const [results, setResults] = useState<Submission[]>([]);
  const [code, setCode] = useState(problem.starterCode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    console.log(code)
    try {
      const response = await axios.post('/api/execute', {
        code,
        language: 'javascript',
        problemId: problem.id, // Ensure problemId is included
      });
      console.log(response)

      if (response.status === 200) {
        console.log(response)
        setResults(response.data.submission);
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error: any) {
      console.error('Error executing code:', error);
      setError('Failed to execute code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex justify-between px-4 py-3 border">
        <div className="flex justify-center items-center">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold" onClick={redirect("/")}>CodeForge</span>
          </div>
        </Link>
        </div>
        <div className="flex">
          <Button disabled={loading} onClick={()=>handleSubmit()} className="rounded-r-none border-r"><Play/>Run</Button>
          <Button className="rounded-l-none"><CloudUploadIcon/>Submit</Button>
        </div>
        <div className="">
          <span className=""><UserButton/></span>
        </div>
      </div>
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={40} minSize={30}>
          <ProblemDescription problem={problem} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={60} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60} minSize={30}>
              <div>

                <CodeEditor code={code} onChange={(value) => setCode(value)} />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={40} minSize={20}>
              <TestCaseSection/>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* <Toaster /> */}
    </div>
  )
}

