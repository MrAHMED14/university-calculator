import { z } from "zod"
import { manualCalculatorSchema } from "../utils"

export type ValuesNoteType = {
  title: string
  groupedModules: Record<string, z.infer<typeof manualCalculatorSchema>[]>
  unityMoy: Record<string, number>
  coefficientSum: Record<string, number>
  creditSum: Record<string, number>
  creditSumMoy: Record<string, number>
  totalCreditSum: number
  totalCoefficientSum: number
  finalResult: number
  totalCreditSumMoy: number
}
