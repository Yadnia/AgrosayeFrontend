import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, AlertTriangle, CheckCircle, Clock } from "lucide-react"

interface InventoryItem {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  minStock: number
  maxStock: number
  location: string
  lastUpdated: string
  status: "in-stock" | "low-stock" | "out-of-stock" | "overstocked"
  supplier: string
  cost: number
}

const inventoryItems: InventoryItem[] = [
  {
    id: "INV001",
    name: "Semillas de Tomate",
    category: "Semillas",
    quantity: 150,
    unit: "kg",
    minStock: 50,
    maxStock: 200,
    location: "Almacén A - Estante 1",
    lastUpdated: "2024-01-15",
    status: "in-stock",
    supplier: "AgroSemillas SA",
    cost: 25.5,
  },
  {
    id: "INV002",
    name: "Fertilizante NPK",
    category: "Fertilizantes",
    quantity: 25,
    unit: "sacos",
    minStock: 30,
    maxStock: 100,
    location: "Almacén B - Zona 2",
    lastUpdated: "2024-01-14",
    status: "low-stock",
    supplier: "FertiCorp",
    cost: 45.0,
  },
  {
    id: "INV003",
    name: "Pesticida Orgánico",
    category: "Pesticidas",
    quantity: 0,
    unit: "litros",
    minStock: 20,
    maxStock: 80,
    location: "Almacén C - Área Segura",
    lastUpdated: "2024-01-10",
    status: "out-of-stock",
    supplier: "EcoProtect",
    cost: 35.75,
  },
  {
    id: "INV004",
    name: "Herramientas de Poda",
    category: "Herramientas",
    quantity: 15,
    unit: "unidades",
    minStock: 5,
    maxStock: 20,
    location: "Almacén A - Estante 3",
    lastUpdated: "2024-01-16",
    status: "in-stock",
    supplier: "ToolsAgro",
    cost: 125.0,
  },
  {
    id: "INV005",
    name: "Mangueras de Riego",
    category: "Riego",
    quantity: 85,
    unit: "metros",
    minStock: 30,
    maxStock: 60,
    location: "Almacén B - Zona 1",
    lastUpdated: "2024-01-13",
    status: "overstocked",
    supplier: "RiegoMax",
    cost: 12.3,
  },
  {
    id: "INV006",
    name: "Semillas de Maíz",
    category: "Semillas",
    quantity: 75,
    unit: "kg",
    minStock: 40,
    maxStock: 120,
    location: "Almacén A - Estante 2",
    lastUpdated: "2024-01-15",
    status: "in-stock",
    supplier: "AgroSemillas SA",
    cost: 18.9,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "in-stock":
      return "bg-green-100 text-green-800"
    case "low-stock":
      return "bg-yellow-100 text-yellow-800"
    case "out-of-stock":
      return "bg-red-100 text-red-800"
    case "overstocked":
      return "bg-blue-100 text-blue-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "in-stock":
      return <CheckCircle className="w-4 h-4" />
    case "low-stock":
      return <Clock className="w-4 h-4" />
    case "out-of-stock":
      return <AlertTriangle className="w-4 h-4" />
    case "overstocked":
      return <Package className="w-4 h-4" />
    default:
      return <Package className="w-4 h-4" />
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "in-stock":
      return "En Stock"
    case "low-stock":
      return "Stock Bajo"
    case "out-of-stock":
      return "Sin Stock"
    case "overstocked":
      return "Sobrestock"
    default:
      return "Desconocido"
  }
}

export function InventoryContainer() {
  const totalItems = inventoryItems.length
  const inStockItems = inventoryItems.filter((item) => item.status === "in-stock").length
  const lowStockItems = inventoryItems.filter((item) => item.status === "low-stock").length
  const outOfStockItems = inventoryItems.filter((item) => item.status === "out-of-stock").length
  const totalValue = inventoryItems.reduce((sum, item) => sum + item.quantity * item.cost, 0)

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
              </div>
              <Package className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">En Stock</p>
                <p className="text-2xl font-bold text-green-600">{inStockItems}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Stock Bajo</p>
                <p className="text-2xl font-bold text-yellow-600">{lowStockItems}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sin Stock</p>
                <p className="text-2xl font-bold text-red-600">{outOfStockItems}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Valor Total</p>
                <p className="text-2xl font-bold text-gray-900">${totalValue.toLocaleString()}</p>
              </div>
              <Package className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{item.name}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </div>
                <Badge className={`${getStatusColor(item.status)} flex items-center gap-1`}>
                  {getStatusIcon(item.status)}
                  {getStatusText(item.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cantidad</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {item.quantity} {item.unit}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Stock Mín/Máx</p>
                  <p className="text-sm text-gray-700">
                    {item.minStock} / {item.maxStock} {item.unit}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600">Ubicación</p>
                <p className="text-sm text-gray-700">{item.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Proveedor</p>
                  <p className="text-sm text-gray-700">{item.supplier}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Costo Unit.</p>
                  <p className="text-sm font-semibold text-gray-900">${item.cost}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600">Última Actualización</p>
                <p className="text-sm text-gray-700">{item.lastUpdated}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Editar
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Reabastecer
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
