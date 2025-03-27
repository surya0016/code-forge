"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Eye, EyeOff, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

// Types based on the Prisma schema
type TestCase = {
  id: string
  input: string
  output: string
  isHidden: boolean
}

type Submission = {
  id: string
  code: string
  language: string
  status: "ACCEPTED" | "WRONG_ANSWER" | "TIME_LIMIT_EXCEEDED" | "RUNTIME_ERROR"
  runtime: number
  testCaseResults: TestCaseResult[]
}

type TestCaseResult = {
  testCaseId: string
  actualOutput: string
  passed: boolean
}

export default function TestCaseSection() {
  // Sample data - in a real app, this would come from your database
  const [testCases, setTestCases] = useState<TestCase[]>([
    { id: "1", input: "nums = [2,7,11,15], target = 9", output: "[0,1]", isHidden: false },
  ])

  const [submission, setSubmission] = useState<Submission>({
    id: "sub1",
    code: "function twoSum(nums, target) { /* ... */ }",
    language: "javascript",
    status: "ACCEPTED",
    runtime: 76,
    testCaseResults: [
      { testCaseId: "1", actualOutput: "[0,1]", passed: true },
    ],
  })

  return (
    <div className="w-full mt-4 max-w-4xl mx-auto">
      <Tabs defaultValue="test-cases" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
          <TabsTrigger value="test-results">Test Results</TabsTrigger>
        </TabsList>

        <TabsContent value="test-cases">
          <Card>
            <CardHeader>
              <CardTitle>Test Cases</CardTitle>
              <CardDescription>Input and expected output for each test case</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testCases.map((testCase) => (
                  <TestCaseItem key={testCase.id} testCase={testCase} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="test-results">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Test Results</span>
                <StatusBadge status={submission.status} />
              </CardTitle>
              <CardDescription className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Runtime: {submission.runtime} ms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submission.testCaseResults.map((result, index) => {
                  const testCase = testCases.find((tc) => tc.id === result.testCaseId)
                  return <TestResultItem key={result.testCaseId} result={result} testCase={testCase!} index={index} />
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TestCaseItem({ testCase }: { testCase: TestCase }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">Test Case {testCase.id}</h3>
        {testCase.isHidden ? (
          <Badge variant="outline" className="flex items-center gap-1">
            <EyeOff className="h-3 w-3" /> Hidden
          </Badge>
        ) : (
          <Badge variant="outline" className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> Visible
          </Badge>
        )}
      </div>

      <div className="space-y-2">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Input:</h4>
          <pre className="mt-1 bg-muted p-2 rounded text-sm overflow-x-auto">{testCase.input}</pre>
        </div>

        {!testCase.isHidden && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Expected Output:</h4>
            <pre className="mt-1 bg-muted p-2 rounded text-sm overflow-x-auto">{testCase.output}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

function TestResultItem({
  result,
  testCase,
  index,
}: {
  result: TestCaseResult
  testCase: TestCase
  index: number
}) {
  return (
    <div
      className={cn(
        "border rounded-lg p-4",
        result.passed ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50",
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium flex items-center">
          {result.passed ? (
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500 mr-2" />
          )}
          Test Case {index + 1}
        </h3>
      </div>

      <div className="space-y-2">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Input:</h4>
          <pre className="mt-1 bg-white bg-opacity-50 p-2 rounded text-sm overflow-x-auto">{testCase.input}</pre>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Expected Output:</h4>
          <pre className="mt-1 bg-white bg-opacity-50 p-2 rounded text-sm overflow-x-auto">{testCase.output}</pre>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Your Output:</h4>
          <pre className="mt-1 bg-white bg-opacity-50 p-2 rounded text-sm overflow-x-auto">{result.actualOutput}</pre>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: Submission["status"] }) {
  switch (status) {
    case "ACCEPTED":
      return (
        <Badge className="bg-green-500">
          <CheckCircle className="h-3 w-3 mr-1" /> Accepted
        </Badge>
      )
    case "WRONG_ANSWER":
      return (
        <Badge className="bg-red-500">
          <XCircle className="h-3 w-3 mr-1" /> Wrong Answer
        </Badge>
      )
    case "TIME_LIMIT_EXCEEDED":
      return (
        <Badge className="bg-yellow-500">
          <Clock className="h-3 w-3 mr-1" /> Time Limit Exceeded
        </Badge>
      )
    case "RUNTIME_ERROR":
      return (
        <Badge className="bg-red-500">
          <XCircle className="h-3 w-3 mr-1" /> Runtime Error
        </Badge>
      )
    default:
      return null
  }
}

