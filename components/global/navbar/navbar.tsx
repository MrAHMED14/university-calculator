import Link from "next/link"
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "../max-width-wrapper"
import { MenuIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavLink from "./nav-link"

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
    href: "/about",
    title: "About us",
  },
  {
    href: "#",
    title: "Download",
  },
] as const

export default async function Navbar() {
  const user = null
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <Link href="/" className="text-lg font-bold text-gray-900">
              {APP_NAME}
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {LINKS.map((link, index) => (
                  <NavLink
                    key={index}
                    href={link.href}
                    title={link.title}
                    className="text-sm"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-2">
                <Avatar className="size-9">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center gap-2">
                  <Button variant="ghost" className="text-sm text-gray-900">
                    Login
                  </Button>
                  <Button className="text-sm font-semibold">Sign up</Button>
                </div>
              </>
            )}
          </div>
          <div className="flex md:hidden items-center space-x-2">
            <MobileNavbar user={user} />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

function MobileNavbar({ user }: { user: string | null }) {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="size-7 hover:bg-gray-100 p-1 rounded-sm" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start justify-between">
        <SheetHeader className="hidden">
          <SheetTitle>Main Menu</SheetTitle>
          <SheetDescription>Main Menu Description</SheetDescription>
        </SheetHeader>
        <div className="mt-10 flex flex-col gap-5">
          {LINKS.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              title={link.title}
              className="text-lg"
            />
          ))}
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-xs">CN</AvatarFallback>
            </Avatar>
            <div className="">
              <h3>Your Name</h3>
              <p className="text-xs text-muted-foreground">
                example@example.com
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2">
              <Button variant="ghost" className="text-sm text-gray-900">
                Login
              </Button>
              <Button className="text-sm font-semibold">Sign up</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
