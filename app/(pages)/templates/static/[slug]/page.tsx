import GenericCalculator from "@/components/global/generic-calculator/generic-calculator"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { initializeValues } from "@/lib/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { findStaticCalculator } from "@/lib/static-configs/lib"
// import { findStaticCalculator } from "@/lib/static-config"

export const metadata: Metadata = {
  title: "Static Template",
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

  const calculator = findStaticCalculator(slug)
  if (!calculator) {
    notFound()
  }

  return (
    <MaxWidthWrapper className="my-20 w-full max-w-6xl">
      <h1 className="text-3xl font-semibold">{calculator.title}</h1>
      <p className="text-muted-foreground">{calculator.etablissement}</p>
      <GenericCalculator data={initializeValues(calculator.data)} />
    </MaxWidthWrapper>
  )
}
