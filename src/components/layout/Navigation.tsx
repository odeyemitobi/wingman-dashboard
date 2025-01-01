"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconType } from 'react-icons'

interface NavigationItem {
  icon: IconType
  label: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
}

export default function Navigation({ items }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-4">
      {items.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`p-3 rounded-lg transition-colors hover:bg-teal-700 ${
              isActive ? 'bg-teal-700' : ''
            }`}
            title={item.label}
          >
            <Icon className="w-5 h-5 text-white" />
            <span className="sr-only">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}