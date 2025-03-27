"use server"
import { getProblems } from "@/app/actions/getProblems"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Difficulty } from "@prisma/client"
import { CheckCircle2, Circle } from "lucide-react"
import Link from "next/link"

const ProblemTable = async () => {
  const problems = await getProblems()
  
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

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Status</TableHead>
            <TableHead className="cursor-pointer">
              Title
            </TableHead>
            <TableHead className="cursor-pointer">
              Difficulty
            </TableHead>
            <TableHead className="cursor-pointer">
              Acceptance
            </TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems?.map((problem, index) => (
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
                <Link href={`/problemss/${problem.id}`} className="font-medium hover:underline">
                  {index+1}. {problem.title}
                </Link>
              </TableCell>
              <TableCell>
                <Badge className={`${getDifficultyVariant(problem.difficulty)}`}>{problem.difficulty}</Badge>
              </TableCell>
              <TableCell>{problem.acceptanceRate.toFixed(1)}%</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {problem.tags.map(({tag}) => (
                    <Badge key={tag.id} variant="outline" className="text-xs">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProblemTable

{/* <Table>
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
                </Table> */}