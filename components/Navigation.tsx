"use client"
import { usePathname } from "next/navigation"
import Navbutton from "./Navbutton"

const routes = [
  {
    href : "/",
    label: "Overview"
  },
  {
    href : "/transaction",
    label: "Transaction"
  },
  {
    href : "/categories",
    label: "Categories"
  },
  {
    href : "/settings",
    label: "Settings"
  }
]

const Navigation = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route)=>(
        <Navbutton
        key={route.href}
        href = {route.href}
        label = {route.label}
        isActive = {pathname === route.href}
        />
      ))}
    </nav>
  )
}

export default Navigation