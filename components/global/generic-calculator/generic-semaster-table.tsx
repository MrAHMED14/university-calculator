"use client"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ValuesNoteType } from "@/lib/types/global"
import React from "react"

interface GenericSemasterTableProps {
  semaster: ValuesNoteType
  setSemaster: (
    semestre: (prevSemestres: ValuesNoteType) => ValuesNoteType
  ) => void
}

export default function GenericSemasterTable({
  semaster,
  setSemaster,
}: GenericSemasterTableProps) {
  const handleInputChange = (
    unityType: string,
    moduleIndex: number,
    field: "examScore" | "tdScore" | "tpScore",
    value: string
  ) => {
    const newValue = Number.parseFloat(value) || 0
    setSemaster((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      newState.groupedModules[unityType][moduleIndex][field] = newValue
      return calculateValues(newState)
    })
  }

  const calculateValues = (state: ValuesNoteType): ValuesNoteType => {
    Object.entries(state.groupedModules).forEach(([unityType, modules]) => {
      let unitySum = 0

      modules.forEach((module) => {
        // Calculate module average
        const examScore = module.examScore || 0
        const tdScore = module.tdScore || 0
        const tpScore = module.tpScore || 0

        let moduleMoy
        if (module.examType === "TD_TP") {
          moduleMoy =
            (examScore * module.examWeight +
              ((tdScore + tpScore) / 2) * module.tdTpWeight) /
            100
        } else if (module.examType === "TD") {
          moduleMoy =
            (examScore * module.examWeight + tdScore * module.tdTpWeight) / 100
        } else if (module.examType === "TP") {
          moduleMoy =
            (examScore * module.examWeight + tpScore * module.tdTpWeight) / 100
        } else {
          moduleMoy = examScore
        }

        module.moduleMoy = moduleMoy
        module.moduleMoyCof = moduleMoy * module.coefficient

        unitySum += module.moduleMoyCof
      })

      state.unityMoy[unityType] = unitySum / state.coefficientSum[unityType]

      // Calculate credit sum
      state.creditSumMoy[unityType] = modules.reduce(
        (sum, module) =>
          sum + ((module.moduleMoy ?? 0) >= 10 ? module.credit : 0),
        0
      )
    })

    let totalSum = 0
    let totalCoefficient = 0
    Object.values(state.groupedModules)
      .flat()
      .forEach((module) => {
        totalSum += module.moduleMoyCof ?? 0
        totalCoefficient += module.coefficient
      })
    state.finalResult = totalSum / totalCoefficient

    state.totalCreditSumMoy = Object.values(state.creditSumMoy).reduce(
      (a, b) => a + b,
      0
    )

    return state
  }

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
        <React.Fragment>
          {Object.entries(semaster.groupedModules).map(
            ([unityType, modules]) => (
              <React.Fragment key={unityType}>
                {modules.map((module, index) => (
                  <TableRow key={`${unityType}-${index}`}>
                    <TableCell>
                      {module.moduleName}{" "}
                      {parseFloat(semaster.finalResult.toFixed(2)) < 10 &&
                      parseFloat(semaster.unityMoy[unityType]?.toFixed(2)) <
                        10 &&
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
                    <TableCell>
                      <Input
                        type="number"
                        placeholder="EXAM"
                        step={0.01}
                        min={0}
                        max={20}
                        value={module.examScore || ""}
                        onChange={(e) =>
                          handleInputChange(
                            unityType,
                            index,
                            "examScore",
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {module.examType === "TD_TP" ||
                      module.examType === "TD" ? (
                        <Input
                          type="number"
                          placeholder="TD"
                          step={0.01}
                          min={0}
                          max={20}
                          value={module.tdScore || ""}
                          onChange={(e) =>
                            handleInputChange(
                              unityType,
                              index,
                              "tdScore",
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        <span className="w-full text-center">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {module.examType === "TD_TP" ||
                      module.examType === "TP" ? (
                        <Input
                          type="number"
                          placeholder="TP"
                          step={0.01}
                          min={0}
                          max={20}
                          value={module.tpScore || ""}
                          onChange={(e) =>
                            handleInputChange(
                              unityType,
                              index,
                              "tpScore",
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      {module.moduleMoy ? module.moduleMoy.toFixed(2) : 0.0}
                    </TableCell>
                    <TableCell>
                      {parseFloat(semaster.finalResult.toFixed(2)) < 10 &&
                      parseFloat(semaster.unityMoy[unityType]?.toFixed(2)) <
                        10 &&
                      module.moduleMoy &&
                      module.moduleMoy < 10
                        ? 0
                        : module.credit}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold bg-gray-100">
                  <TableCell>
                    {unityType.replace(/(\D+)(\d+)/, "$1 $2")}
                  </TableCell>
                  <TableCell>{semaster.coefficientSum[unityType]}</TableCell>
                  <TableCell>{semaster.creditSum[unityType]}</TableCell>
                  <TableCell>{"-"}</TableCell>
                  <TableCell>{"-"}</TableCell>
                  <TableCell>{"-"}</TableCell>
                  <TableCell>
                    {semaster.unityMoy[unityType]?.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {parseFloat(semaster.finalResult.toFixed(2)) < 10 &&
                    parseFloat(semaster.unityMoy[unityType]?.toFixed(2)) < 10
                      ? semaster.creditSumMoy[unityType]
                      : semaster.creditSum[unityType]}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            )
          )}
          <TableRow className="font-bold bg-gray-200 hover:bg-gray-300">
            <TableCell>{semaster.title}</TableCell>
            <TableCell>{semaster.totalCoefficientSum}</TableCell>
            <TableCell>{semaster.totalCreditSum}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{"-"}</TableCell>
            <TableCell>{semaster.finalResult.toFixed(2)}</TableCell>
            <TableCell>
              {parseFloat(semaster.finalResult.toFixed(2)) >= 10
                ? semaster.totalCreditSum
                : semaster.totalCreditSumMoy}
            </TableCell>
          </TableRow>
        </React.Fragment>
      </TableBody>
    </Table>
  )
}
