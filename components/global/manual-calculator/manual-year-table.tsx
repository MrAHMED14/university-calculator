"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ValuesNoteType } from "@/lib/types/global"
import { cn } from "@/lib/utils"

interface ManualYearTableProps {
  semestre: ValuesNoteType[]
}

export default function ManualYearTable({ semestre }: ManualYearTableProps) {
  const totalCoefficientSum = semestre.reduce(
    (sum, item) => sum + item.totalCoefficientSum,
    0
  )
  const totalCreditSum = semestre.reduce(
    (sum, item) => sum + item.totalCreditSum,
    0
  )
  const totalCreditSumMoy = semestre.reduce(
    (sum, item) => sum + item.totalCreditSumMoy,
    0
  )

  const finalYearMoy =
    semestre.reduce(
      (sum, item) => sum + item.finalResult * item.totalCoefficientSum,
      0
    ) / totalCoefficientSum
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Semestre/Year</TableHead>
            <TableHead>Total Coefficient</TableHead>
            <TableHead>Total Credit</TableHead>
            <TableHead>Avg Semestre</TableHead>
            <TableHead>Credit Semestre</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {semestre.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.totalCoefficientSum}</TableCell>
              <TableCell>{item.totalCreditSum}</TableCell>
              <TableCell>{item.finalResult.toFixed(2)}</TableCell>
              <TableCell>{item.totalCreditSumMoy}</TableCell>
            </TableRow>
          ))}
          <TableRow className="font-bold bg-gray-200 hover:bg-gray-300">
            <TableCell>Year</TableCell>
            <TableCell>{totalCoefficientSum}</TableCell>
            <TableCell>{totalCreditSum}</TableCell>
            <TableCell>{finalYearMoy.toFixed(2)}</TableCell>
            <TableCell>{totalCreditSumMoy}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {semestre.length === 2 && (
        <div className="w-full flex flex-col items-center justify-center">
          <span className="font-bold text-xl">Congratulations</span>
          <span
            className={cn(
              "font-bold text-xl",
              finalYearMoy >= 10 ? "text-teal-700" : "text-red-500"
            )}
          >
            {finalYearMoy >= 10 ? "!لقد نجحت" : "! لقد رسبت"}
          </span>
        </div>
      )}
    </div>
  )
}
