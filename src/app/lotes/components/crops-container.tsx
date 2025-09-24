import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const crops = [
  {
    id: 1,
    name: "Tomates",
    variety: "Cherry",
    plantingDate: "2024-01-15",
    expectedHarvest: "2024-04-15",
    area: "2.5 hectáreas",
    status: "Creciendo",
    health: "Excelente",
    wateringSchedule: "Diario",
    fertilizer: "NPK 10-10-10",
  },
  {
    id: 2,
    name: "Maíz",
    variety: "Dulce",
    plantingDate: "2024-02-01",
    expectedHarvest: "2024-05-01",
    area: "5.0 hectáreas",
    status: "Floración",
    health: "Buena",
    wateringSchedule: "Cada 2 días",
    fertilizer: "Urea",
  },
  {
    id: 3,
    name: "Lechugas",
    variety: "Romana",
    plantingDate: "2024-02-20",
    expectedHarvest: "2024-04-05",
    area: "1.2 hectáreas",
    status: "Listo para cosecha",
    health: "Excelente",
    wateringSchedule: "Diario",
    fertilizer: "Compost orgánico",
  },
  {
    id: 4,
    name: "Zanahorias",
    variety: "Nantes",
    plantingDate: "2024-01-10",
    expectedHarvest: "2024-04-10",
    area: "1.8 hectáreas",
    status: "Madurando",
    health: "Buena",
    wateringSchedule: "Cada 3 días",
    fertilizer: "Fosfato",
  },
  {
    id: 5,
    name: "Pimientos",
    variety: "Bell",
    plantingDate: "2024-01-25",
    expectedHarvest: "2024-04-25",
    area: "1.5 hectáreas",
    status: "Creciendo",
    health: "Regular",
    wateringSchedule: "Diario",
    fertilizer: "NPK 15-15-15",
  },
  {
    id: 6,
    name: "Calabazas",
    variety: "Butternut",
    plantingDate: "2024-02-10",
    expectedHarvest: "2024-05-15",
    area: "3.0 hectáreas",
    status: "Germinando",
    health: "Excelente",
    wateringSchedule: "Cada 2 días",
    fertilizer: "Compost",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Listo para cosecha":
      return "bg-green-100 text-green-800"
    case "Floración":
      return "bg-yellow-100 text-yellow-800"
    case "Creciendo":
      return "bg-blue-100 text-blue-800"
    case "Madurando":
      return "bg-orange-100 text-orange-800"
    case "Germinando":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getHealthColor = (health: string) => {
  switch (health) {
    case "Excelente":
      return "bg-green-100 text-green-800"
    case "Buena":
      return "bg-blue-100 text-blue-800"
    case "Regular":
      return "bg-yellow-100 text-yellow-800"
    case "Mala":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function CropsContainer() {
  const totalArea = crops.reduce((sum, crop) => sum + Number.parseFloat(crop.area), 0)
  const readyForHarvest = crops.filter((crop) => crop.status === "Listo para cosecha").length
  const healthyCrops = crops.filter((crop) => crop.health === "Excelente").length

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-800">{crops.length}</div>
            <div className="text-sm text-gray-600">Total de Cultivos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{readyForHarvest}</div>
            <div className="text-sm text-gray-600">Listos para Cosecha</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{totalArea.toFixed(1)} ha</div>
            <div className="text-sm text-gray-600">Área Total</div>
          </CardContent>
        </Card>
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <Card key={crop.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-800">{crop.name}</CardTitle>
                <Badge className={getStatusColor(crop.status)}>{crop.status}</Badge>
              </div>
              <p className="text-sm text-gray-600">{crop.variety}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Área:</span>
                  <p className="text-gray-600">{crop.area}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Salud:</span>
                  <Badge className={`${getHealthColor(crop.health)} text-xs`}>{crop.health}</Badge>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Plantado:</span>
                  <p className="text-gray-600">{new Date(crop.plantingDate).toLocaleDateString("es-ES")}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Cosecha esperada:</span>
                  <p className="text-gray-600">{new Date(crop.expectedHarvest).toLocaleDateString("es-ES")}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Riego:</span>
                  <p className="text-gray-600">{crop.wateringSchedule}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Fertilizante:</span>
                  <p className="text-gray-600">{crop.fertilizer}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
