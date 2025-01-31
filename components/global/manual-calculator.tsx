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
import { useState } from "react"
import { manualCalculatorSchema } from "@/lib/utils"
import { z } from "zod"
import { ModulesTable } from "./ModulesTable"

export default function ManualCalculator() {
  const [modules, setModules] = useState<
    z.infer<typeof manualCalculatorSchema>[]
  >([])
  const [examType, setExamType] = useState<"none" | "TD_TP" | "TP" | "TD">(
    "TD_TP"
  )

  const form = useForm<z.infer<typeof manualCalculatorSchema>>({
    resolver: zodResolver(manualCalculatorSchema),
    defaultValues: {
      moduleName: "",
      examType: "TD_TP",
      unityType: "Fondamentale 1",
    },
  })

  function onSubmit(values: z.infer<typeof manualCalculatorSchema>) {
    console.log(values)
    setModules((prevModules) => [...prevModules, values])
    form.reset()
    setExamType("TD_TP")
  }

  return (
    <div className="w-full flex flex-col items-center justify-center px-1 space-y-8 my-20">
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
                          <SelectItem value="Fondamentale 1">
                            Fondamentale 1
                          </SelectItem>
                          <SelectItem value="Fondamentale 2">
                            Fondamentale 2
                          </SelectItem>
                          <SelectItem value="Méthodologique">
                            Méthodologique
                          </SelectItem>
                          <SelectItem value="Découverte">Découverte</SelectItem>
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

              <Button type="submit">Submit</Button>
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
            <ModulesTable modules={modules} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
