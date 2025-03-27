"use client"
import { ArrowRight, BookOpen, Code, Lightbulb, Sparkles, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// Algorithm categories with their descriptions
const algorithmCategories = [
  {
    id: "arrays",
    title: "Arrays & Strings",
    description: "Master fundamental techniques for manipulating arrays and strings efficiently.",
    topics: ["Two Pointers", "Sliding Window", "Prefix Sum", "String Manipulation"],
    problemCount: 24,
    progress: 30,
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Learn to navigate, modify, and optimize operations on singly and doubly linked lists.",
    topics: ["Fast & Slow Pointers", "Reversal", "Merge", "Cycle Detection"],
    problemCount: 18,
    progress: 15,
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "trees",
    title: "Trees & Graphs",
    description: "Explore tree traversals, graph algorithms, and complex data structure operations.",
    topics: ["DFS", "BFS", "Binary Trees", "Shortest Path"],
    problemCount: 32,
    progress: 10,
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "dynamic",
    title: "Dynamic Programming",
    description: "Master the art of breaking down complex problems into simpler subproblems.",
    topics: ["Memoization", "Tabulation", "State Machines", "Optimization"],
    problemCount: 28,
    progress: 5,
    icon: <Code className="h-5 w-5" />,
  },
]

// Featured algorithms with their descriptions
const featuredAlgorithms = [
  {
    id: "binary-search",
    title: "Binary Search",
    description: "An efficient algorithm for finding an item from a sorted list of items.",
    difficulty: "Easy",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description:
      "A divide and conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.",
    difficulty: "Medium",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "dijkstra",
    title: "Dijkstra's Algorithm",
    description: "An algorithm for finding the shortest paths between nodes in a graph with non-negative edge weights.",
    difficulty: "Hard",
    timeComplexity: "O((V+E) log V)",
    spaceComplexity: "O(V)",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LearnAlgorithms() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Master Algorithms
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn Algorithms & Ace Your Coding Interviews
                </h1>
                <p className="max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl">
                  Structured learning paths, interactive visualizations, and practice problems to help you master
                  algorithms and data structures.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="gap-1">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">View Problems</Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>100+ Lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4" />
                  <span>300+ Problems</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lightbulb className="h-4 w-4" />
                  <span>Interactive</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-10 blur-xl"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">algorithm.js</div>
                    </div>
                    <pre className="flex-1 overflow-auto text-xs sm:text-sm font-mono bg-zinc-50 dark:bg-zinc-900 p-4 rounded">
                      <code className="text-zinc-800 dark:text-zinc-200">
                        {`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);
console.log(\`Found at index: \${result}\`);`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit mx-auto">
                Learning Paths
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Master Algorithms Step by Step
              </h2>
              <p className="max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Our structured learning paths guide you through algorithms and data structures with increasing
                complexity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {algorithmCategories.map((category) => (
              <Card key={category.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-md bg-primary/10">{category.icon}</div>
                    <Badge variant="outline">{category.problemCount} Problems</Badge>
                  </div>
                  <CardTitle className="mt-4">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="font-normal">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Progress</span>
                      <span className="font-medium">{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Continue Learning
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Algorithms Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit mx-auto">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Featured
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Algorithms</h2>
              <p className="max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Explore these essential algorithms that form the foundation of computer science and coding interviews.
              </p>
            </div>
          </div>

          <Tabs defaultValue="binary-search" className="mt-12">
            <TabsList className="grid w-full grid-cols-3">
              {featuredAlgorithms.map((algo) => (
                <TabsTrigger key={algo.id} value={algo.id}>
                  {algo.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {featuredAlgorithms.map((algo) => (
              <TabsContent key={algo.id} value={algo.id} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge
                            variant={
                              algo.difficulty === "Easy"
                                ? "success"
                                : algo.difficulty === "Medium"
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {algo.difficulty}
                          </Badge>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">Time: {algo.timeComplexity}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            Space: {algo.spaceComplexity}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{algo.title}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 mb-6">{algo.description}</p>
                        <div className="flex gap-3">
                          <Button>Learn More</Button>
                          <Button variant="outline">Practice Problems</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <img
                            src={algo.image || "/placeholder.svg"}
                            alt={`${algo.title} visualization`}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/80">
                <Trophy className="h-3.5 w-3.5 mr-1" />
                Level Up Your Skills
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Master Algorithms?
              </h2>
              <p className="max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join thousands of developers who have improved their problem-solving skills and aced their coding
                interviews.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Start Learning Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View All Algorithms
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

