import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { staticCalculator } from "@/lib/static-config"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Template",
}

export default function TemplatePage() {
  return (
    <MaxWidthWrapper className="w-full flex flex-col items-start justify-start">
      <section className="w-full mt-20">
        <h1 className="text-3xl font-semibold">Computer science department</h1>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staticCalculator.map((item, index) => (
            <Link
              key={index}
              href={`/templates/static/${item.slug}`}
              className="bg-gray-200 px-7 py-4 rounded-md font-semibold text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
