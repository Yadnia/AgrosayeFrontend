"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation" // 👈 para saber la ruta actual
import {
  Activity,
  Package,
  Archive,
  Bell,
  Settings,
  User,
  DollarSign,
  HelpCircle,
  Home,
} from "lucide-react"

const menuItems = [
  { label: "Inicio", icon: Home, href: "/dashboard" },
  { label: "Actividades", icon: Activity, href: "/actividades" },
  { label: "Lotes", icon: Package, href: "/lotes" },
  { label: "Inventario", icon: Archive, href: "/inventario" },
  { label: "Recordatorios", icon: Bell, href: "/reminders" },
  { label: "Ajustes", icon: Settings, href: "/ajustes" },
  { label: "Cuenta", icon: User, href: "/cuenta" },
  { label: "Estado Financiero", icon: DollarSign, href: "/estado-financiero" },
  { label: "Ayuda", icon: HelpCircle, href: "/ayuda" },
]

export function Sidebar() {
  const pathname = usePathname() // 👈 devuelve la ruta actual (ej: "/lotes")

  return (
    <div className="w-64 min-h-screen shadow-lg flex flex-col" style={{ backgroundColor: "#50745C" }}>
      {/* Logo grande */}
      <div className="mx-4 mt-4 mb-6 bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
        <div className="relative w-full h-24">
          <Image
            src="/logo.svg"
            alt="Logo AgroManager"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold text-white">Panel de Control</h2>
      </div>

      {/* Menú */}
      <nav className="space-y-2 px-4 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href // 👈 compara con la ruta actual

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
