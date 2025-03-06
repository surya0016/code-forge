"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Filter, CheckCircle, X, ChevronUp, ChevronDown, Circle, CheckCircle2 } from "lucide-react"
import type { Problem, Difficulty } from "@/lib/types"
import { problems } from "@/lib/problems"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/Navbar"

export default function ProblemList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "All">("All")
  const [selectedTag, setSelectedTag] = useState<string | "All">("All")
  const [statusFilter, setStatusFilter] = useState<"All" | "Solved" | "Unsolved">("All")
  const [sortColumn, setSortColumn] = useState<keyof Problem>("id")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Extract all unique tags from problems
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    problems.forEach((problem) => {
      problem.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter and sort problems
  const filteredAndSortedProblems = useMemo(() => {
    return problems
      .filter((problem) => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDifficulty = selectedDifficulty === "All" || problem.difficulty === selectedDifficulty
        const matchesTag = selectedTag === "All" || problem.tags.includes(selectedTag)
        const matchesStatus =
          statusFilter === "All" ||
          (statusFilter === "Solved" && problem.isSolved) ||
          (statusFilter === "Unsolved" && !problem.isSolved)

        return matchesSearch && matchesDifficulty && matchesTag && matchesStatus
      })
      .sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
      })
  }, [searchTerm, selectedDifficulty, selectedTag, statusFilter, sortColumn, sortDirection])

  // Get difficulty variant for badge
  const getDifficultyVariant = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case "Easy":
        return "text-emerald-500 bg-white border-emerald-500"
      case "Medium":
        return "text-yellow-500 bg-white border-yellow-500"
      case "Hard":
        return "text-red-500 bg-white border-red-500"
    }
  }

  // Calculate solved percentage
  const solvedPercentage = useMemo(() => {
    const solvedCount = problems.filter((p) => p.isSolved).length
    return (solvedCount / problems.length) * 100
  }, [])

  // Handle sort
  const handleSort = (column: keyof Problem) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <>
      <Navbar/>
      <div className="mb-8">
        <Card className="w-full border-none rounded-none shadow-none">
          <CardHeader>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <CardTitle className="text-2xl font-bold">Problem List</CardTitle>
                <CardDescription>Practice coding problems to improve your skills</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Progress value={solvedPercentage} className="w-[100px]" />
                <span className="text-sm text-muted-foreground">{solvedPercentage.toFixed(1)}% Solved</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search problems..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select
                    value={selectedDifficulty}
                    onValueChange={(value) => setSelectedDifficulty(value as Difficulty | "All")}
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Difficulties</SelectItem>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedTag} onValueChange={setSelectedTag}>
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Topics</SelectItem>
                      {allTags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={statusFilter}
                    onValueChange={(value) => setStatusFilter(value as "All" | "Solved" | "Unsolved")}
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Solved">Solved</SelectItem>
                      <SelectItem value="Unsolved">Unsolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Status</TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("title")}>
                        Title{" "}
                        {sortColumn === "title" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="inline h-4 w-4" />
                          ) : (
                            <ChevronDown className="inline h-4 w-4" />
                          ))}
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("difficulty")}>
                        Difficulty{" "}
                        {sortColumn === "difficulty" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="inline h-4 w-4" />
                          ) : (
                            <ChevronDown className="inline h-4 w-4" />
                          ))}
                      </TableHead>
                      <TableHead className="cursor-pointer" onClick={() => handleSort("acceptanceRate")}>
                        Acceptance{" "}
                        {sortColumn === "acceptanceRate" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="inline h-4 w-4" />
                          ) : (
                            <ChevronDown className="inline h-4 w-4" />
                          ))}
                      </TableHead>
                      <TableHead>Tags</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedProblems.map((problem) => (
                      <TableRow key={problem.id}>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                {problem.isSolved ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : (
                                  <Circle className="h-5 w-5 text-muted-foreground" />
                                )}
                              </TooltipTrigger>
                              <TooltipContent>{problem.isSolved ? "Solved" : "Not solved yet"}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          <Link href={`/problem/${problem.id}`} className="font-medium hover:underline">
                            {problem.id}. {problem.title}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getDifficultyVariant(problem.difficulty)}`}>{problem.difficulty}</Badge>
                        </TableCell>
                        <TableCell>{problem.acceptanceRate.toFixed(1)}%</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {problem.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredAndSortedProblems.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No problems found matching your filters.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

