import { TestCasesAndSubmissions  } from "@/components/test-case"
// Import your database client or API functions here

// This is a mock function - replace with your actual data fetching logic
async function getProblemData(id: string) {
  // Mock data for demonstration
  const testCases = [
    {
      id: 1,
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      isHidden: false,
      problemId: 1,
      status: "pass" as const,
      actualOutput: "[0,1]",
      executionTime: "2ms",
      memoryUsage: "38.5MB",
    },
    {
      id: 2,
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      isHidden: false,
      problemId: 1,
      status: "pass" as const,
      actualOutput: "[1,2]",
      executionTime: "3ms",
      memoryUsage: "38.7MB",
    },
    {
      id: 3,
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
      isHidden: false,
      problemId: 1,
      status: "pass" as const,
      actualOutput: "[0,1]",
      executionTime: "1ms",
      memoryUsage: "38.2MB",
    },
    {
      id: 4,
      input: "nums = [1,2,3,4,5], target = 9",
      output: "[3,4]",
      isHidden: false,
      problemId: 1,
      status: "fail" as const,
      actualOutput: "[2,4]",
      executionTime: "2ms",
      memoryUsage: "38.6MB",
    },
    {
      id: 5,
      input: "nums = [-1,-2,-3,-4,-5], target = -8",
      output: "[2,4]",
      isHidden: true,
      problemId: 1,
    },
  ]

  const submissions = [
    {
      id: 1,
      code: "function twoSum(nums, target) { /* code */ }",
      language: "javascript",
      status: "ACCEPTED",
      runtime: 56,
      memory: 42.3,
      createdAt: new Date("2023-09-15T14:30:00Z"),
      userId: 1,
      problemId: 1,
    },
    {
      id: 2,
      code: "function twoSum(nums, target) { /* different code */ }",
      language: "javascript",
      status: "WRONG_ANSWER",
      runtime: 62,
      memory: 41.8,
      createdAt: new Date("2023-09-14T10:15:00Z"),
      userId: 1,
      problemId: 1,
    },
    {
      id: 3,
      code: "def two_sum(nums, target): # code",
      language: "python",
      status: "TIME_LIMIT_EXCEEDED",
      runtime: 1500,
      memory: 39.2,
      createdAt: new Date("2023-09-13T08:45:00Z"),
      userId: 1,
      problemId: 1,
    },
  ]

  return {
    testCases,
    submissions,
    currentSubmission: submissions[0],
  }
}

export default async function ProblemPage({ params }: { params: { id: string } }) {
  const { testCases, submissions, currentSubmission } = await getProblemData(params.id)

  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Other problem components would go here */}

        <TestCasesAndSubmissions
          testCases={testCases}
          submissions={submissions}
          currentSubmission={currentSubmission}
        />
      </div>
    </div>
  )
}

