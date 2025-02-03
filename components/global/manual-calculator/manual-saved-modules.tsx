"use client"

import { ValuesNoteType } from "@/lib/types/global"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react"
import { Badge } from "../../ui/badge"

interface ManualSavedModulesProps {
  semestres: ValuesNoteType[]
}

export default function ManualSavedModules({
  semestres,
}: ManualSavedModulesProps) {
  return (
    <div className="space-y-10">
      {semestres.map((semestre, index) => (
        <Table key={`${semestre.title} - ${index}`}>
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
              {Object.entries(semestre.groupedModules).map(
                ([unityType, modules]) => (
                  <React.Fragment key={unityType}>
                    {modules.map((module, index) => (
                      <TableRow key={`${unityType}-${index}`}>
                        <TableCell>
                          {module.moduleName}{" "}
                          {parseFloat(semestre.finalResult.toFixed(2)) < 10 &&
                          parseFloat(semestre.unityMoy[unityType]?.toFixed(2)) <
                            10 &&
                          module.moduleMoy &&
                          parseFloat(module.moduleMoy.toFixed(2)) < 10 ? (
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
                          {parseFloat(semestre.finalResult.toFixed(2)) < 10 &&
                          parseFloat(semestre.unityMoy[unityType]?.toFixed(2)) <
                            10 &&
                          parseFloat(module.moduleMoy?.toFixed(2) ?? "0.0") < 10
                            ? 0
                            : module.credit}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="font-bold bg-gray-100">
                      <TableCell>{unityType}</TableCell>
                      <TableCell>
                        {semestre.coefficientSum[unityType]}
                      </TableCell>
                      <TableCell>{semestre.creditSum[unityType]}</TableCell>
                      <TableCell>{"-"}</TableCell>
                      <TableCell>{"-"}</TableCell>
                      <TableCell>{"-"}</TableCell>
                      <TableCell>
                        {semestre.unityMoy[unityType]?.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {parseFloat(semestre.finalResult.toFixed(2)) < 10 &&
                        parseFloat(semestre.unityMoy[unityType]?.toFixed(2)) <
                          10
                          ? semestre.creditSumMoy[unityType]
                          : semestre.creditSum[unityType]}
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                )
              )}
              <TableRow className="font-bold bg-gray-200 hover:bg-gray-300">
                <TableCell>{semestre.title}</TableCell>
                <TableCell>{semestre.totalCoefficientSum}</TableCell>
                <TableCell>{semestre.totalCreditSum}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{"-"}</TableCell>
                <TableCell>{semestre.finalResult.toFixed(2)}</TableCell>
                <TableCell>
                  {parseFloat(semestre.finalResult.toFixed(2)) >= 10
                    ? semestre.totalCreditSum
                    : semestre.totalCreditSumMoy}
                </TableCell>
              </TableRow>
            </React.Fragment>
          </TableBody>
        </Table>
      ))}
    </div>
  )
}
