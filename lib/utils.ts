import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const manualCalculatorSchema = z
  .object({
    moduleName: z.string().nonempty({ message: "Module name is required" }),
    coefficient: z.coerce
      .number({ message: "Coefficient is required" })
      .int({ message: "Coefficient must be an integer" })
      .min(1),
    credit: z.coerce
      .number({ message: "Credit is required" })
      .int({ message: "Credit must be an integer" })
      .min(1),
    examScore: z.coerce
      .number({ message: "Exam score is required" })
      .min(0)
      .max(20),
    examType: z.enum(["none", "TD_TP", "TP", "TD"]),
    tdScore: z.coerce.number().min(0).max(20).optional(),
    tpScore: z.coerce.number().min(0).max(20).optional(),
    tdTpWeight: z.coerce
      .number({ message: "TD/TP weight is required" })
      .min(0)
      .max(100),
    examWeight: z.coerce
      .number({ message: "Exam weight is required" })
      .min(0)
      .max(100),
    unityType: z.enum([
      "Fondamentale 1",
      "Fondamentale 2",
      "Méthodologique",
      "Découverte",
      "Transversale",
    ]),
  })
  .refine(
    (data) => {
      if (data.examType === "TD_TP") {
        return data.tdScore !== undefined && data.tpScore !== undefined
      }
      if (data.examType === "TP") {
        return data.tpScore !== undefined
      }
      if (data.examType === "TD") {
        return data.tdScore !== undefined
      }
      return true
    },
    {
      message: "Please fill in all required fields for the selected exam type",
      path: ["examType"],
    }
  )
