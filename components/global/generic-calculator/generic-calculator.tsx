"use client"

import { ValuesNoteType } from "@/lib/types/global"
import React, { useState } from "react"
import GenericSemasterTable from "./generic-semaster-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ManualYearTable from "../manual-calculator/manual-year-table"

export default function GenericCalculator({
  data,
}: {
  data: ValuesNoteType[]
}) {
  const [semaster1, setSemaster1] = useState<ValuesNoteType>(data[0])
  const [semaster2, setSemaster2] = useState<ValuesNoteType>(data[1])

  return (
    <div className="mt-10 space-y-10">
      <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-6xl">
        <CardHeader>
          <CardTitle>Semaster 1</CardTitle>
        </CardHeader>
        <CardContent>
          <GenericSemasterTable
            semaster={semaster1}
            setSemaster={setSemaster1}
          />
        </CardContent>
      </Card>

      <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-6xl">
        <CardHeader>
          <CardTitle>Semaster 2</CardTitle>
        </CardHeader>
        <CardContent>
          <GenericSemasterTable
            semaster={semaster2}
            setSemaster={setSemaster2}
          />
        </CardContent>
      </Card>

      <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-6xl">
        <CardHeader>
          <CardTitle>Year</CardTitle>
        </CardHeader>
        <CardContent>
          <ManualYearTable semestre={[semaster1, semaster2]} />
        </CardContent>
      </Card>
    </div>
  )
}
