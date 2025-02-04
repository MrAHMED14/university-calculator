"use client"

import { ValuesNoteType } from "@/lib/types/global"
import React, { useState } from "react"
import GenericSemasterTable from "./generic-semaster-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ManualYearTable from "../manual-calculator/manual-year-table"
import { Button } from "@/components/ui/button"
import { resetValue } from "@/lib/utils"
import { XIcon } from "lucide-react"

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
          <CardTitle>
            <div className="w-full flex items-center justify-between">
              <span>Semaster 1</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSemaster1(resetValue(semaster1))}
              >
                <XIcon className="size-4" />
              </Button>
            </div>
          </CardTitle>
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
          <CardTitle>
            <div className="w-full flex items-center justify-between">
              <span>Semaster 2</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSemaster2(resetValue(semaster2))}
              >
                <XIcon className="size-4" />
              </Button>
            </div>
          </CardTitle>
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
