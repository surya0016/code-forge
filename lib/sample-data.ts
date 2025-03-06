export interface Example {
  input: string
  output: string
  explanation?: string
}

export interface TestCase {
  input: string
  expectedOutput: string
  actualOutput?: string
  status?: "pass" | "fail"
  executionTime?: string
  memoryUsage?: string
}

export interface Problem {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  category: string
  description: string
  constraints: string[]
  examples: Example[]
  hints: string[]
  testCases: TestCase[]
}

export const sampleProblem: Problem = {
  id: 1,
  title: "Two Sum",
  difficulty: "Easy",
  category: "Arrays & Hashing",
  description: `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
    <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
    <p>You can return the answer in any order.</p>
  `,
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists.",
  ],
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
    },
  ],
  hints: [
    "A brute force approach would be to check every pair of numbers in the array.",
    "Can you use a hash map to reduce the time complexity?",
    "For each number, check if the target minus the current number exists in the hash map.",
  ],
  testCases: [
    {
      input: "[2,7,11,15], 9",
      expectedOutput: "[0,1]",
    },
    {
      input: "[3,2,4], 6",
      expectedOutput: "[1,2]",
    },
    {
      input: "[3,3], 6",
      expectedOutput: "[0,1]",
    },
    {
      input: "[1,2,3,4,5], 9",
      expectedOutput: "[3,4]",
    },
    {
      input: "[-1,-2,-3,-4,-5], -8",
      expectedOutput: "[2,4]",
    },
  ],
}

