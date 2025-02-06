"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  title: string
  className?: string
}

export default function NavLink({ href, title, className }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-500 hover:text-gray-700",
        pathname === href && "font-semibold",
        className
      )}
    >
      {title}
    </Link>
  )
}
