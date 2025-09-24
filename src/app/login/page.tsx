"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F1F7ED" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: "#50745C" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15"
          style={{ backgroundColor: "#0D5741" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: "#B80B0B" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div
            className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "#50745C" }}
          >
            <div className="text-white text-2xl font-bold">🌾</div>
          </div>
          <h1 className="text-3xl font-bold text-balance" style={{ color: "#0D5741" }}>
            AgroManager
          </h1>
          <p className="text-lg mt-2 text-pretty" style={{ color: "#50745C" }}>
            Cultivando el futuro de tu negocio
          </p>
        </div>

        <Card className="p-8 shadow-2xl border-0 backdrop-blur-sm bg-white/90">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-balance" style={{ color: "#0D5741" }}>
                Iniciar Sesión
              </h2>
              <p className="text-sm mt-2" style={{ color: "#50745C" }}>
                Accede a tu panel de control agrícola
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium" style={{ color: "#0D5741" }}>
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 border-2 focus:ring-2 focus:ring-opacity-50 bg-white/80"
                  style={{
                    borderColor: "#50745C",
                    focusRingColor: "#50745C",
                  }}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium" style={{ color: "#0D5741" }}>
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 border-2 focus:ring-2 focus:ring-opacity-50 bg-white/80"
                  style={{
                    borderColor: "#50745C",
                    focusRingColor: "#50745C",
                  }}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-2"
                  style={{ borderColor: "#50745C", accentColor: "#50745C" }}
                />
                <span style={{ color: "#50745C" }}>Recordarme</span>
              </label>
              <a href="#" className="hover:underline" style={{ color: "#B80B0B" }}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              style={{ backgroundColor: "#50745C" }}
            >
              Iniciar Sesión
            </Button>

            <div className="text-center">
              <p className="text-sm" style={{ color: "#50745C" }}>
                ¿No tienes cuenta?{" "}
                <a href="#" className="font-semibold hover:underline" style={{ color: "#B80B0B" }}>
                  Regístrate aquí
                </a>
              </p>
            </div>
          </form>
        </Card>

        <div className="text-center mt-8">
          <p className="text-xs" style={{ color: "#50745C" }}>
            © 2024 AgroManager. Sembrando tecnología, cosechando éxito.
          </p>
        </div>
      </div>
    </div>
  )
}
