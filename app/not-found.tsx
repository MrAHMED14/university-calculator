import Link from "next/link"
import { Home } from "lucide-react"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"

export default function NotFound() {
  return (
    <MaxWidthWrapper className="h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center w-">
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-gray-900">
            404
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">
            Page not found
          </p>
          <p className="text-base sm:text-lg text-gray-500">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
          >
            <Home className="size-4 mr-2" />
            Go back home
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
