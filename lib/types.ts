export type Difficulty = "Easy" | "Medium" | "Hard"

export interface Example {
  input: string
  output: string
  explanation?: string
}

export interface Problem {
  id: number
  title: string
  difficulty: Difficulty
  acceptanceRate: number
  tags: string[]
  description: string
  examples: Example[]
  constraints: string[]
  isSolved: boolean
  testCases?: any
}

