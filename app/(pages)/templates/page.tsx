import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Link from "next/link"

export default function TemplatePage() {
  return (
    <MaxWidthWrapper className="w-full min-h-screen flex flex-col items-start justify-start">
      <section className="mt-56">
        <h1 className="text-3xl font-semibold">Computer science department</h1>
        <div className="my-10">
          <Link
            href="/templates/info-l3-isil"
            className=" bg-gray-200 px-7 py-4 rounded-md font-semibold text-sm"
          >
            L3 ISIL
          </Link>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
