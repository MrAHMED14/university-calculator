"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

const formSchema = z.object({
  tel: z.coerce.number({ message: "Tel is require" }),
})

export default function InputsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, typeof values.tel)
    form.reset()
  }

  return (
    <Card className="w-full max-w-md border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle>Example 01</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-red-600">*</span> tel
                  </FormLabel>
                  <FormControl>
                    <NumberInput
                      field={field}
                      placeholder="Provide here you tel number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
