import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator } from "lucide-react"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"

export default function Home() {
  return (
    <MaxWidthWrapper className="mt-20 lg:mt-0 max-w-4xl w-full bg-white rounded-3xl overflow-hidden">
      <div className="p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          Calculate Your GPA
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          A simple calculator for university students to calculate their annual
          and semester GPAs.
        </p>
        <div className="flex justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            <Link
              href="/manual-calculator"
              className="flex items-center justify-center"
            >
              Start Calculating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Calculator className="h-8 w-8 text-blue-500" />}
            title="Easy Calculation"
            description="Simple interface for quick GPA computations"
          />
          <FeatureCard
            icon={<Calculator className="h-8 w-8 text-blue-500" />}
            title="Easy Calculation"
            description="Simple interface for quick GPA computations"
          />
          <FeatureCard
            icon={<Calculator className="h-8 w-8 text-blue-500" />}
            title="Easy Calculation"
            description="Simple interface for quick GPA computations"
          />
          <FeatureCard
            icon={<Calculator className="h-8 w-8 text-blue-500" />}
            title="Easy Calculation"
            description="Simple interface for quick GPA computations"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
