import GenericCalculator from "@/components/global/generic-calculator/generic-calculator"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { getConfigById } from "@/lib/actions/config"
import { ValuesNoteType } from "@/lib/types/global"
import { initializeValues } from "@/lib/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dynamic Template",
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  if (!slug) {
    notFound()
  }

  const calculator = await getConfigById(slug)
  if (!calculator) {
    notFound()
  }

  const calculatorData = calculator.data as ValuesNoteType[]
  if (calculatorData.length !== 2) {
    notFound()
  }

  return (
    <MaxWidthWrapper className="my-20 w-full max-w-6xl">
      <h1 className="text-3xl font-semibold">{calculator.title}</h1>
      <p className="text-lg text-muted-foreground font-semibold">
        {calculator.univName}
      </p>
      <p className="text-sm text-muted-foreground">{calculator.collegeName}</p>
      <p className="mt-2 text-muted-foreground">
        <span className="font-semibold">Speciality: </span>
        {calculator.level} {calculator.specialization}
      </p>
      <p className="text-muted-foreground">
        <span className="font-semibold">Created At: </span>{" "}
        {new Date(calculator.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <GenericCalculator data={initializeValues(calculatorData)} />
    </MaxWidthWrapper>
  )
}
