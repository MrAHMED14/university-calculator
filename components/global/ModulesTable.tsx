import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { manualCalculatorSchema } from "@/lib/utils"
import { z } from "zod"

type ModulesTableProps = {
  modules: z.infer<typeof manualCalculatorSchema>[]
}

export function ModulesTable({ modules }: ModulesTableProps) {
  const groupedModules = modules.reduce((acc, module) => {
    if (!acc[module.unityType]) {
      acc[module.unityType] = []
    }
    acc[module.unityType].push(module)
    return acc
  }, {} as Record<string, z.infer<typeof manualCalculatorSchema>[]>)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Module Name</TableHead>
          <TableHead>Coefficient</TableHead>
          <TableHead>Credit</TableHead>
          <TableHead>Exam</TableHead>
          <TableHead>TD</TableHead>
          <TableHead>TP</TableHead>
          <TableHead>Avg Mod</TableHead>
          <TableHead>Credit Mod</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(groupedModules).map(([unityType, modules]) => (
          <React.Fragment key={unityType}>
            {modules.map((module, index) => (
              <TableRow key={`${unityType}-${index}`}>
                <TableCell>{module.moduleName}</TableCell>
                <TableCell>{module.coefficient}</TableCell>
                <TableCell>{module.credit}</TableCell>
                <TableCell>{module.examScore || "-"}</TableCell>
                <TableCell>{module.tdScore || "-"}</TableCell>
                <TableCell>{module.tpScore || "-"}</TableCell>
                <TableCell>{"N/A"}</TableCell>
                <TableCell>{"N/A"}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={10} className="font-bold bg-gray-100">
                {unityType}
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  )
}
