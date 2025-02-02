import GenericCalculator from "@/components/global/generic-calculator/generic-calculator"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { INFO_L3_ISIL } from "@/lib/static-config"
import { notFound } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  if (slug !== "info-l3-isil") {
    notFound()
  }

  if (INFO_L3_ISIL.length !== 2) {
    notFound()
  }

  return (
    <MaxWidthWrapper className="mt-20 md:mt-40 mb-10 max-w-6xl">
      <h1 className="text-3xl font-semibold">Computer science department</h1>
      <p className="text-muted-foreground">L3 ISIL specialization</p>
      <GenericCalculator data={INFO_L3_ISIL} />
    </MaxWidthWrapper>
  )
}
