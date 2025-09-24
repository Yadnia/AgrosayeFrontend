import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, CreditCard } from "lucide-react"

export function FinancialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Funds card */}
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Fondos Disponibles</CardTitle>
          <DollarSign className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">$45,231</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-primary" />
            +20.1% desde el mes pasado
          </p>
        </CardContent>
      </Card>

      {/* Spendings card */}
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Gastos del Mes</CardTitle>
          <CreditCard className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">$12,450</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <TrendingDown className="h-3 w-3 text-destructive" />
            -4.3% desde el mes pasado
          </p>
        </CardContent>
      </Card>

      {/* Production info */}
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Producción Total</CardTitle>
          <TrendingUp className="h-4 w-4 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">2,340 kg</div>
          <p className="text-xs text-muted-foreground">+12% desde la temporada pasada</p>
        </CardContent>
      </Card>

      {/* Efficiency info */}
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Eficiencia</CardTitle>
          <TrendingUp className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">87%</div>
          <p className="text-xs text-muted-foreground">Rendimiento promedio</p>
        </CardContent>
      </Card>
    </div>
  )
}
