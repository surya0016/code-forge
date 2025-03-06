import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Problem } from "@/lib/sample-data"

interface ProblemDescriptionProps {
  problem: Problem
}

export default function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="h-full overflow-y-auto p-4">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{problem.title}</CardTitle>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline">{problem.difficulty}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Problem difficulty level</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary">{problem.category}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Problem category</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <CardDescription>Problem #{problem.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: problem.description }} />
            </div>

            <Accordion type="single" collapsible defaultValue="constraints">
              <AccordionItem value="constraints">
                <AccordionTrigger>Constraints</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="examples">
                <AccordionTrigger>Examples</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {problem.examples.map((example, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium">Example {index + 1}:</h4>
                        <div className="bg-muted p-3 rounded-md">
                          <div>
                            <span className="font-semibold">Input:</span> {example.input}
                          </div>
                          <div>
                            <span className="font-semibold">Output:</span> {example.output}
                          </div>
                          {example.explanation && (
                            <div>
                              <span className="font-semibold">Explanation:</span> {example.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hints">
                <AccordionTrigger>Hints</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {problem.hints.map((hint, index) => (
                      <li key={index}>{hint}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

