import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { TestCase } from "@/lib/sample-data"

interface TestCasesProps {
  testCases: TestCase[]
}

export default function TestCases({ testCases }: TestCasesProps) {
  return (
    <div className="h-full overflow-auto p-4">
      <h3 className="text-lg font-semibold mb-4">Test Cases</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Case #</TableHead>
            <TableHead>Input</TableHead>
            <TableHead>Expected</TableHead>
            <TableHead>Result</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testCases.map((testCase, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-mono text-sm truncate max-w-[150px]">{testCase.input}</TableCell>
              <TableCell className="font-mono text-sm truncate max-w-[150px]">{testCase.expectedOutput}</TableCell>
              <TableCell className="font-mono text-sm truncate max-w-[150px]">{testCase.actualOutput || "-"}</TableCell>
              <TableCell className="text-right">
                {testCase.status ? (
                  // {/*@ts-ignore*/}
                  <Badge variant={testCase.status === "pass" ? "success" : "destructive"}>
                    {testCase.status === "pass" ? "Pass" : "Fail"}
                  </Badge>
                ) : (
                  <Badge variant="outline">Not Run</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value="execution-details">
          <AccordionTrigger>Execution Details</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {testCases.map(
                (testCase, index) =>
                  testCase.status && (
                    <div key={index} className="bg-muted p-3 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Test Case {index + 1}</h4>
                        {/*@ts-ignore*/}
                        <Badge variant={testCase.status === "pass" ? "success" : "destructive"}>
                          {testCase.status === "pass" ? "Pass" : "Fail"}
                        </Badge>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-semibold">Execution Time:</span> {testCase.executionTime || "N/A"}
                        </div>
                        <div>
                          <span className="font-semibold">Memory Usage:</span> {testCase.memoryUsage || "N/A"}
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

