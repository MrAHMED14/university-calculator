import Link from "next/link"
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "./max-width-wrapper"
import { MenuIcon } from "lucide-react"

const APP_NAME = "Univ Calculator" as const
const LINKS = [
  {
    href: "/manual-calculator",
    title: "Manual calculator",
  },
  {
    href: "/templates",
    title: "Discover",
  },
  {
    href: "#",
    title: "About us",
  },
  {
    href: "#",
    title: "Download",
  },
] as const

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <Link href="/" className="text-lg font-bold text-gray-900">
              {APP_NAME}
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm text-gray-900">
              Login
            </Button>
            <Button className="text-sm font-semibold">Sign up</Button>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-base text-gray-900"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
