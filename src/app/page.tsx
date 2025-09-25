import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, BarChart3, Users, Shield, ArrowRight, Sprout, Tractor, TrendingUp } from "lucide-react"
import "@/app/styles/welcome.css";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo con imagen */}
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png" // pon aquí tu imagen en public/logo.png
                alt="Logo AgroGestión"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            {/* Aquí antes iba el texto AgroGestión, ahora lo quitamos */}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Productos
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Soluciones
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Iniciar Sesión
          </Button>
        </div>
      </header>

      {/* ... aquí sigue el resto de tu código sin cambios ... */}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Logo AgroGestión"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                {/* Quitamos el span con el nombre */}
              </div>
              <p className="text-muted-foreground">
                Transformando la agricultura con tecnología inteligente y sostenible.
              </p>
            </div>

            {/* ... resto del footer igual ... */}
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 AgroGestión. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
