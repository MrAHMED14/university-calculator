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
    (sum, item) =>
      sum +
      (parseFloat(item.finalResult.toFixed(2)) < 10
        ? item.totalCreditSumMoy
        : item.totalCreditSum),
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
              <TableCell>
                {parseFloat(finalYearMoy.toFixed(2)) < 10 &&
                parseFloat(item.finalResult.toFixed(2)) < 10
                  ? item.totalCreditSumMoy
                  : item.totalCreditSum}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="font-bold bg-gray-200 hover:bg-gray-300">
            <TableCell>Year</TableCell>
            <TableCell>{totalCoefficientSum}</TableCell>
            <TableCell>{totalCreditSum}</TableCell>
            <TableCell>{finalYearMoy.toFixed(2)}</TableCell>
            <TableCell>
              {parseFloat(finalYearMoy.toFixed(2)) < 10
                ? totalCreditSumMoy
                : totalCreditSum}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
