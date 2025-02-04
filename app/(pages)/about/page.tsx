import Link from "next/link"
import { Calculator, Sliders, Save, Search } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Image from "next/image"

export default function AboutPage() {
  return (
    <MaxWidthWrapper className="my-20 w-full max-w-5xl">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">
            University Calculator
          </h1>
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            For Algerian Students
          </div>
        </div>
        <p className="text-gray-600 mb-8 text-justify">
          This project is an open-source, web-based application designed to help
          college students calculate their grades and GPAs. It features a
          user-friendly interface that allows students to input their course
          units, grades, and credits, which are then used to compute their GPA.
          The goal of this project is to simplify the grade calculation process
          for students.
        </p>

        <div className="grid gap-6 mb-8 sm:grid-cols-2">
          <FeatureItem
            icon={Calculator}
            title="GPA Mastery"
            description="Conquer your semester and yearly GPAs with lightning-fast calculations."
          />
          <FeatureItem
            icon={Sliders}
            title="Custom Calculations"
            description="Create your own calculator with our tool, which allows you to easily input course units, grades, and credits."
          />
          <FeatureItem
            icon={Save}
            title="Template Wizardry"
            description="Save your genius calculations as templates, ready to be reused or shared with your fellow scholars."
          />
          <FeatureItem
            icon={Search}
            title="Template Explorer"
            description="Explore a collection of popular, searchable templates tailored to your niche and ready for immediate use."
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0 animate-fade-in animation-delay-400">
            <Image
              src="https://avatars.githubusercontent.com/u/112445559"
              alt="Author"
              width={100}
              height={100}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Chikhaoui Ahmed
              </h2>
              <p className="text-gray-600 text-xs">Project developer</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-600">
            <Link
              href="https://github.com/MrAHMED14/university-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              <FaGithub className="size-5 mr-2" />
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex items-start space-x-4 animate-fade-in">
      <div className="mt-1 text-blue-500">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
