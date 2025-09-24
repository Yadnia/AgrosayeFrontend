import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, Clock, User } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Revisión de inventario - Almacén A",
    description: "Verificar stock de productos y actualizar sistema",
    status: "En progreso",
    priority: "Alta",
    assignee: "María González",
    dueDate: "2024-01-15",
    time: "14:30",
  },
  {
    id: 2,
    title: "Reunión con proveedores",
    description: "Negociación de precios para el próximo trimestre",
    status: "Pendiente",
    priority: "Media",
    assignee: "Carlos Ruiz",
    dueDate: "2024-01-16",
    time: "10:00",
  },
  {
    id: 3,
    title: "Actualización de sistema financiero",
    description: "Migrar datos del mes anterior al nuevo sistema",
    status: "Completada",
    priority: "Alta",
    assignee: "Ana López",
    dueDate: "2024-01-14",
    time: "09:00",
  },
  {
    id: 4,
    title: "Capacitación de personal",
    description: "Entrenamiento en nuevos procedimientos de seguridad",
    status: "Programada",
    priority: "Media",
    assignee: "Roberto Silva",
    dueDate: "2024-01-18",
    time: "16:00",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completada":
      return "bg-green-100 text-green-800"
    case "En progreso":
      return "bg-blue-100 text-blue-800"
    case "Pendiente":
      return "bg-yellow-100 text-yellow-800"
    case "Programada":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Alta":
      return "bg-red-100 text-red-800"
    case "Media":
      return "bg-orange-100 text-orange-800"
    case "Baja":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ActivitiesContainer() {
  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Gestiona todas las actividades de tu negocio</p>
        </div>
        <Button className="gap-2" style={{ backgroundColor: "#50745C" }}>
          <Plus size={16} />
          Nueva Actividad
        </Button>
      </div>

      {/* Activities Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-lg leading-tight">{activity.title}</CardTitle>
                <Badge className={getPriorityColor(activity.priority)}>{activity.priority}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>

              <div className="flex justify-between items-center">
                <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
              </div>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{activity.assignee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{activity.dueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{activity.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">1</div>
            <div className="text-sm text-gray-600">En Progreso</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-600">Pendientes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-gray-600">Completadas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">1</div>
            <div className="text-sm text-gray-600">Programadas</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
