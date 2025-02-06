import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import { staticCalculator } from "@/lib/static-config"
import Link from "next/link"

export default function TemplatePage() {
  return (
    <MaxWidthWrapper className="w-full flex flex-col items-start justify-start">
      <section className="mt-20">
        <h1 className="text-3xl font-semibold">Computer science department</h1>
        <div className="my-10 flex items-center gap-4">
          {staticCalculator.map((item, index) => (
            <Link
              key={index}
              href={`/templates/${item.slug}`}
              className=" bg-gray-200 px-7 py-4 rounded-md font-semibold text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
