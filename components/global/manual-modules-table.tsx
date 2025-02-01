"use cilent"

import React, { useState, useEffect } from "react"
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
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { ValuesNoteType } from "@/lib/types/global"

type ModulesTableProps = {
  modules: z.infer<typeof manualCalculatorSchema>[]
  setModules: (modules: z.infer<typeof manualCalculatorSchema>[]) => void
  semestre: ValuesNoteType[]
  setSemestre: (
    semestre: (prevSemestres: ValuesNoteType[]) => ValuesNoteType[]
  ) => void
}

export function ManualModulesTable({
  modules,
  setModules,
  semestre,
  setSemestre,
}: ModulesTableProps) {
  const [creditSum, setCreditSum] = useState<Record<string, number>>({})
  const [coefficientSum, setCoefficientSum] = useState<Record<string, number>>(
    {}
  )
  const [totalCreditSum, setTotalCreditSum] = useState(0)
  const [totalCreditSumMoy, setTotalCreditSumMoy] = useState(0)
  const [totalCoefficientSum, setTotalCoefficientSum] = useState(0)
  const [unityMoy, setUnityMoy] = useState<Record<string, number>>({})
  const [creditSumMoy, setCreditSumMoy] = useState<Record<string, number>>({})
  const [finalResult, setFinalResult] = useState(0)

  useEffect(() => {
    const creditSums = modules.reduce((acc, module) => {
      if (!acc[module.unityType]) {
        acc[module.unityType] = 0
      }
      acc[module.unityType] += module.credit
      return acc
    }, {} as Record<string, number>)
    setCreditSum(creditSums)

    const coefficientSums = modules.reduce((acc, module) => {
      if (!acc[module.unityType]) {
        acc[module.unityType] = 0
      }
      acc[module.unityType] += module.coefficient
      return acc
    }, {} as Record<string, number>)
    setCoefficientSum(coefficientSums)

    const totalCredit = modules.reduce((acc, module) => acc + module.credit, 0)
    const totalCoefficient = modules.reduce(
      (acc, module) => acc + module.coefficient,
      0
    )
    setTotalCreditSum(totalCredit)
    setTotalCoefficientSum(totalCoefficient)

    const avgModSums = modules.reduce((acc, module) => {
      if (!acc[module.unityType]) {
        acc[module.unityType] = 0
      }
      acc[module.unityType] += module.moduleMoyCof || 0
      return acc
    }, {} as Record<string, number>)

    const unityMoys = Object.keys(avgModSums).reduce((acc, unityType) => {
      acc[unityType] = coefficientSums[unityType]
        ? avgModSums[unityType] / coefficientSums[unityType]
        : 0
      return acc
    }, {} as Record<string, number>)
    setUnityMoy(unityMoys)

    const finalResult =
      Object.keys(unityMoys).reduce((acc, unityType) => {
        return acc + unityMoys[unityType] * coefficientSums[unityType]
      }, 0) / totalCoefficientSum
    setFinalResult(finalResult)

    const creditMoy = Object.keys(unityMoys).reduce((acc, unityType) => {
      if (unityMoys[unityType] >= 10) {
        acc[unityType] = creditSums[unityType]
      } else {
        let counterModuleCredit = 0
        modules.forEach((module) => {
          if (module.unityType === unityType) {
            if (module.moduleMoy && module.moduleMoy >= 10) {
              counterModuleCredit += module.credit
            }
          }
        })
        acc[unityType] = counterModuleCredit
      }
      return acc
    }, {} as Record<string, number>)
    setCreditSumMoy(creditMoy)

    const totalCreditMoy = Object.keys(creditMoy).reduce((acc, unityType) => {
      return acc + creditMoy[unityType]
    }, 0)
    setTotalCreditSumMoy(totalCreditMoy)
  }, [modules, totalCoefficientSum])

  const groupedModules = modules.reduce((acc, module) => {
    if (!acc[module.unityType]) {
      acc[module.unityType] = []
    }
    acc[module.unityType].push(module)
    return acc
  }, {} as Record<string, z.infer<typeof manualCalculatorSchema>[]>)

  const saveSemestre = () => {
    if (semestre.length == 2) {
      toast.error("You can only save up to 2 semestres.")
      return
    }
    const values: ValuesNoteType = {
      title: `Semestre ${semestre.length + 1}`,
      groupedModules,
      unityMoy,
      coefficientSum,
      creditSum,
      creditSumMoy,
      totalCreditSum,
      totalCoefficientSum,
      finalResult,
      totalCreditSumMoy:
        totalCreditSumMoy >= 10 ? totalCreditSum : totalCreditSumMoy,
    }

    console.log(values)

    setSemestre((prevSemestres: ValuesNoteType[]) => [...prevSemestres, values])
    setModules([])
  }

  return (
    <div className="w-full space-y-5">
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
                  <TableCell>
                    {module.moduleName}{" "}
                    {totalCreditSumMoy < 10 &&
                    unityMoy[unityType] < 10 &&
                    module.moduleMoy &&
                    module.moduleMoy < 10 ? (
                      <Badge variant="destructive" className="text-xs">
                        Rattrapage
                      </Badge>
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>{module.coefficient}</TableCell>
                  <TableCell>{module.credit}</TableCell>
                  <TableCell>{module.examScore || "-"}</TableCell>
                  <TableCell>{module.tdScore || "-"}</TableCell>
                  <TableCell>{module.tpScore || "-"}</TableCell>
                  <TableCell>
                    {module.moduleMoy ? module.moduleMoy.toFixed(2) : 0.0}
                  </TableCell>
                  <TableCell>
                    {unityMoy[unityType] >= 10
                      ? module.credit
                      : module.moduleMoy && module.moduleMoy >= 10
                      ? module.credit
                      : 0}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold bg-gray-100">
                <TableCell>{unityType}</TableCell>
                <TableCell>{coefficientSum[unityType]}</TableCell>
                <TableCell>{creditSum[unityType]}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{unityMoy[unityType]?.toFixed(2)}</TableCell>
                <TableCell>{creditSumMoy[unityType]}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
          <TableRow className="font-bold bg-gray-200 hover:bg-gray-300">
            <TableCell>Semestre</TableCell>
            <TableCell>{totalCoefficientSum}</TableCell>
            <TableCell>{totalCreditSum}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{finalResult.toFixed(2)}</TableCell>
            <TableCell>
              {totalCreditSumMoy >= 10 ? totalCreditSum : totalCreditSumMoy}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button onClick={saveSemestre}>Save Semestre</Button>
    </div>
  )
}
