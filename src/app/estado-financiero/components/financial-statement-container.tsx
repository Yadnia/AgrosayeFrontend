"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Calendar } from "lucide-react"

interface FinancialData {
  id: string
  category: string
  description: string
  amount: number
  type: "income" | "expense"
  date: string
  month: string
}

const mockFinancialData: FinancialData[] = [
  {
    id: "1",
    category: "Ventas de Cultivos",
    description: "Venta de maíz - Lote A",
    amount: 15000,
    type: "income",
    date: "2024-01-15",
    month: "Enero",
  },
  {
    id: "2",
    category: "Semillas",
    description: "Compra de semillas de trigo",
    amount: 3500,
    type: "expense",
    date: "2024-01-10",
    month: "Enero",
  },
  {
    id: "3",
    category: "Fertilizantes",
    description: "Fertilizante orgánico",
    amount: 2800,
    type: "expense",
    date: "2024-01-12",
    month: "Enero",
  },
  {
    id: "4",
    category: "Ventas de Cultivos",
    description: "Venta de tomates - Invernadero 1",
    amount: 8500,
    type: "income",
    date: "2024-01-20",
    month: "Enero",
  },
  {
    id: "5",
    category: "Maquinaria",
    description: "Mantenimiento tractor",
    amount: 1200,
    type: "expense",
    date: "2024-01-18",
    month: "Enero",
  },
  {
    id: "6",
    category: "Servicios",
    description: "Electricidad y agua",
    amount: 950,
    type: "expense",
    date: "2024-01-25",
    month: "Enero",
  },
]

export function FinancialStatementContainer() {
  const [selectedPeriod, setSelectedPeriod] = useState("Enero 2024")

  const totalIncome = mockFinancialData
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0)

  const totalExpenses = mockFinancialData
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0)

  const netProfit = totalIncome - totalExpenses
  const profitMargin = totalIncome > 0 ? ((netProfit / totalIncome) * 100).toFixed(1) : "0"

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4" style={{ borderLeftColor: "#50745C" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ingresos Totales</CardTitle>
            <TrendingUp className="h-4 w-4" style={{ color: "#50745C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#50745C" }}>
              {formatCurrency(totalIncome)}
            </div>
            <p className="text-xs text-gray-500 mt-1">+12.5% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card className="border-l-4" style={{ borderLeftColor: "#B80B0B" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Gastos Totales</CardTitle>
            <TrendingDown className="h-4 w-4" style={{ color: "#B80B0B" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: "#B80B0B" }}>
              {formatCurrency(totalExpenses)}
            </div>
            <p className="text-xs text-gray-500 mt-1">+5.2% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card className="border-l-4" style={{ borderLeftColor: netProfit >= 0 ? "#0D5741" : "#B80B0B" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ganancia Neta</CardTitle>
            <DollarSign className="h-4 w-4" style={{ color: netProfit >= 0 ? "#0D5741" : "#B80B0B" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: netProfit >= 0 ? "#0D5741" : "#B80B0B" }}>
              {formatCurrency(netProfit)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Margen: {profitMargin}%</p>
          </CardContent>
        </Card>

        <Card className="border-l-4" style={{ borderLeftColor: "#50745C" }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Período Actual</CardTitle>
            <Calendar className="h-4 w-4" style={{ color: "#50745C" }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{selectedPeriod}</div>
            <p className="text-xs text-gray-500 mt-1">{mockFinancialData.length} transacciones</p>
          </CardContent>
        </Card>
      </div>

      {/* Period Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" style={{ color: "#50745C" }} />
            Seleccionar Período
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Enero 2024", "Febrero 2024", "Marzo 2024", "Q1 2024", "2024"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                style={{
                  backgroundColor: selectedPeriod === period ? "#50745C" : "transparent",
                  borderColor: "#50745C",
                  color: selectedPeriod === period ? "white" : "#50745C",
                }}
              >
                {period}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" style={{ color: "#50745C" }} />
            Detalle de Transacciones - {selectedPeriod}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockFinancialData.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: transaction.type === "income" ? "#50745C" : "#B80B0B",
                      }}
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">{transaction.description}</h4>
                      <p className="text-sm text-gray-500">
                        {transaction.category} • {new Date(transaction.date).toLocaleDateString("es-MX")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-lg font-semibold"
                    style={{
                      color: transaction.type === "income" ? "#50745C" : "#B80B0B",
                    }}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </div>
                  <Badge
                    variant="outline"
                    style={{
                      borderColor: transaction.type === "income" ? "#50745C" : "#B80B0B",
                      color: transaction.type === "income" ? "#50745C" : "#B80B0B",
                    }}
                  >
                    {transaction.type === "income" ? "Ingreso" : "Gasto"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#50745C" }}>Ingresos por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from(new Set(mockFinancialData.filter((t) => t.type === "income").map((t) => t.category))).map(
                (category) => {
                  const categoryTotal = mockFinancialData
                    .filter((t) => t.type === "income" && t.category === category)
                    .reduce((sum, t) => sum + t.amount, 0)
                  const percentage = ((categoryTotal / totalIncome) * 100).toFixed(1)

                  return (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{category}</span>
                      <div className="text-right">
                        <div className="font-medium" style={{ color: "#50745C" }}>
                          {formatCurrency(categoryTotal)}
                        </div>
                        <div className="text-xs text-gray-500">{percentage}%</div>
                      </div>
                    </div>
                  )
                },
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#B80B0B" }}>Gastos por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from(new Set(mockFinancialData.filter((t) => t.type === "expense").map((t) => t.category))).map(
                (category) => {
                  const categoryTotal = mockFinancialData
                    .filter((t) => t.type === "expense" && t.category === category)
                    .reduce((sum, t) => sum + t.amount, 0)
                  const percentage = ((categoryTotal / totalExpenses) * 100).toFixed(1)

                  return (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{category}</span>
                      <div className="text-right">
                        <div className="font-medium" style={{ color: "#B80B0B" }}>
                          {formatCurrency(categoryTotal)}
                        </div>
                        <div className="text-xs text-gray-500">{percentage}%</div>
                      </div>
                    </div>
                  )
                },
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
