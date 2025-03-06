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

export default function ProblemSolvingPlatform() {
  // const { toast } = useToast()
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("python")
  const [testCases, setTestCases] = useState<TestCase[]>(sampleProblem.testCases)

  const runCode = () => {
    // Simulate code execution
    const updatedTestCases = testCases.map((testCase) => {
      // In a real app, this would execute the code against the test case
      const passed = Math.random() > 0.3 // Randomly pass or fail for demo

      return {
        ...testCase,
        status: passed ? "pass" : "fail",
        actualOutput: passed ? testCase.expectedOutput : "Unexpected output",
        executionTime: Math.floor(Math.random() * 100) + "ms",
        memoryUsage: Math.floor(Math.random() * 10) + "MB",
      }
    })
// @ts-ignore
    setTestCases(updatedTestCases)

    const passedCount = updatedTestCases.filter((tc) => tc.status === "pass").length

    toast(`Execution complete`, {
      description: `${passedCount}/${updatedTestCases.length} test cases passed`,
      // variant: passedCount === updatedTestCases.length ? "default" : "destructive",
    })
  }

  return (
    <div className="h-screen w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={40} minSize={30}>
          <ProblemDescription problem={sampleProblem} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={60} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60} minSize={30}>
              <CodeEditor code={code} setCode={setCode} language={language} setLanguage={setLanguage} onRun={runCode} />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={40} minSize={20}>
              <TestCases testCases={testCases} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* <Toaster /> */}
    </div>
  )
}

