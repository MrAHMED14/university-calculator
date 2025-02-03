"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import NumberInput from "@/components/ui/number-input"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useTransition } from "react"
import { initializeValues, manualCalculatorSchema } from "@/lib/utils"
import { z } from "zod"
import { ManualModulesTable } from "./manual-modules-table"
import ManualYearTable from "./manual-year-table"
import { ValuesNoteType } from "@/lib/types/global"
import { toast } from "sonner"
import ManualSavedModules from "./manual-saved-modules"

export default function ManualCalculator() {
  const [isDisabled, startTransition] = useTransition()

  const [modules, setModules] = useState<
    z.infer<typeof manualCalculatorSchema>[]
  >([])
  const [examType, setExamType] = useState<"none" | "TD_TP" | "TP" | "TD">(
    "TD_TP"
  )
  const [semestre, setSemestre] = useState<ValuesNoteType[]>([])
  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof manualCalculatorSchema>>({
    resolver: zodResolver(manualCalculatorSchema),
    defaultValues: {
      moduleName: "",
      examType: "TD_TP",
      tdTpWeight: 40,
      examWeight: 60,
      unityType: "Fondamentale1",
    },
  })

  function onSubmit(values: z.infer<typeof manualCalculatorSchema>) {
    if (semestre.length == 2) {
      toast.error("You can only save up to 2 semestres.")
      return
    }
    console.log(values)

    let moyCC = 0,
      moyExam = 0
    if (values.examType === "TD_TP") {
      moyCC =
        (((values?.tdScore ?? 0) + (values?.tpScore ?? 0)) / 2) *
        (values.tdTpWeight / 100)
    } else if (values.examType === "TP") {
      moyCC = (values?.tpScore ?? 0) * (values.tdTpWeight / 100)
    } else if (values.examType === "TD") {
      moyCC = (values?.tdScore ?? 0) * (values.tdTpWeight / 100)
    } else if (values.examType === "none") {
      moyCC = 0
    } else {
      toast.error("Invalid exam type.")
      return
    }

    moyExam = values.examScore * (values.examWeight / 100)
    values.moduleMoy = moyCC + moyExam
    values.moduleMoyCof = values.moduleMoy * values.coefficient

    setModules((prevModules) => [...prevModules, values])
    form.reset()
    setExamType("TD_TP")
  }

  function resetCalculator() {
    form.reset()
    setModules([])
    setSemestre([])
    setOpen(false)
    setExamType("TD_TP")
  }

  const handleSavaTemplate = () => {
    startTransition(async () => {
      const config: ValuesNoteType[] = initializeValues(semestre)
      console.log(config)
    })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center px-1 space-y-8">
      <Card className="w-full max-w-4xl border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle>Manual university calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Module Name / Unity Type */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="moduleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> Module name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Provide here module name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="unityType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unity Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unity type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fondamentale1">
                            Fondamentale 1
                          </SelectItem>
                          <SelectItem value="Fondamentale2">
                            Fondamentale 2
                          </SelectItem>
                          <SelectItem value="Methodologique">
                            Méthodologique
                          </SelectItem>
                          <SelectItem value="Decouverte">Découverte</SelectItem>
                          <SelectItem value="Transversale">
                            Transversale
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Coefficient / Credit */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="coefficient"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> Coefficient
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          field={field}
                          step="1"
                          placeholder="Provide here module coefficient"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="credit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> Credit
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          field={field}
                          step="1"
                          placeholder="Provide here module Credit"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Exam Score / Exam Type */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="examScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> Exam Score
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          field={field}
                          step="0.01"
                          placeholder="Enter exam score (0-20)"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="examType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Type</FormLabel>
                      <Select
                        onValueChange={(
                          value: "none" | "TD_TP" | "TP" | "TD"
                        ) => {
                          field.onChange(value)
                          setExamType(value)
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exam type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="TD_TP">TD + TP</SelectItem>
                          <SelectItem value="TP">TP</SelectItem>
                          <SelectItem value="TD">TD</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {(examType === "TD_TP" || examType === "TD") && (
                <FormField
                  control={form.control}
                  name="tdScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> TD Score
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          field={field}
                          step="0.01"
                          placeholder="Enter TD score (0-20)"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {(examType === "TD_TP" || examType === "TP") && (
                <FormField
                  control={form.control}
                  name="tpScore"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-red-600">*</span> TP Score
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          field={field}
                          step="0.01"
                          placeholder="Enter TP score (0-20)"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Weight */}
              <div>
                <FormLabel className="block mb-2">
                  <span className="text-red-600">*</span> Weight
                </FormLabel>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tdTpWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TD / TP (%)</FormLabel>
                        <FormControl>
                          <NumberInput
                            field={field}
                            step="1"
                            placeholder="TD/TP weight (%)"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="examWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exam (%)</FormLabel>
                        <FormControl>
                          <NumberInput
                            field={field}
                            step="1"
                            placeholder="Exam weight (%)"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button type="submit">Submit</Button>
                <Button type="reset" onClick={resetCalculator}>
                  Reset Calculator
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {modules.length > 0 && (
        <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-4xl">
          <CardHeader>
            <CardTitle>Submitted Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <ManualModulesTable
              modules={modules}
              setModules={setModules}
              semestre={semestre}
              setSemestre={setSemestre}
            />
          </CardContent>
        </Card>
      )}

      {semestre.length > 0 && (
        <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-4xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Average of the year</span>
              <Button onClick={() => setOpen(!open)}>
                {open ? "Hide semestres" : "Show semestres"}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ManualYearTable semestre={semestre} />
          </CardContent>
        </Card>
      )}

      {open && (
        <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-4xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Saved semestre</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ManualSavedModules semestres={semestre} />
          </CardContent>
        </Card>
      )}

      {semestre.length === 2 && (
        <div className="">
          {/* TODO ADD FORM HERE HAS:
           * Name of univ
           * Desc (optional)
           * Name of specialty
           * Level
           */}
          <Button
            disabled={isDisabled}
            onClick={handleSavaTemplate}
            className="uppercase bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full ease-in-out transition-colors shadow-md"
          >
            {isDisabled ? "loading..." : "SAVE AS TEMPLATE"}
          </Button>
        </div>
      )}
    </div>
  )
}
