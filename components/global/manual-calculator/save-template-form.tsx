"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { ValuesNoteType } from "@/lib/types/global"
import { initializeValues, saveTemplateSchema } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Check, Copy } from "lucide-react"
import { createConfig } from "@/lib/actions/config"
import { toast } from "sonner"

interface SaveTemplateFormProps {
  semestres: ValuesNoteType[]
}

type FormValues = z.infer<typeof saveTemplateSchema>

export default function SaveTemplateForm({ semestres }: SaveTemplateFormProps) {
  const [isDisabled, startTransition] = useTransition()
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [generatedText, setGeneratedText] = useState("")
  const [copied, setCopied] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(saveTemplateSchema),
    defaultValues: {
      title: "",
      univName: "",
      collegeName: "",
      specialization: "",
      level: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    if (submitSuccess) {
      toast.error("You have already saved this template.")
      return
    }

    startTransition(async () => {
      const config: ValuesNoteType[] = initializeValues(semestres)
      console.log("Form Data:", data)
      console.log("Config:", config)

      const generatedConfig = await createConfig({ ...data, data: config })
      if (!generatedConfig) {
        throw new Error("Failed to generate configuration")
      }

      console.log(generatedConfig)

      const text = `${process.env.NEXT_PUBLIC_BASE_URL}/templates/${generatedConfig.id}`
      setGeneratedText(text)
      setSubmitSuccess(true)
      setCopied(false)
    })
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center px-1 space-y-8">
      <Card className="w-full border border-gray-200 shadow-sm overflow-hidden max-w-4xl">
        <CardHeader>
          <CardTitle>Save Template</CardTitle>
          <CardDescription>
            Fill in the details to save your template
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-600">*</span> Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="univName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-600">*</span> University Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter university name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collegeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-600">*</span> College Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter college name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-600">*</span> Speciality
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Speciality" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-600">*</span> Level
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter level" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  disabled={isDisabled}
                  className="uppercase bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full ease-in-out transition-colors shadow-md"
                >
                  {isDisabled ? "Saving..." : "Save as template"}
                </Button>
              </div>
            </form>
          </Form>

          {submitSuccess && (
            <div className="mt-10">
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-700">
                  <span className="text-base font-semibold">
                    Here is your generated link!
                  </span>
                  <br /> Share this link with others to let them use your
                  template
                </p>
                <div className="relative rounded-lg bg-gray-950 p-4">
                  <pre className="text-white font-mono text-sm break-all whitespace-pre-wrap">
                    {generatedText}
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-3 p-2 bg-gray-950 hover:bg-gray-800 rounded-md transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
