import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Droplets, Bug, Truck, Wrench, Scissors, Package, Users, Calendar } from "lucide-react"

const activities = [
  {
    id: 1,
    icon: Sprout,
    title: "Siembra de maíz",
    description: "Lote A-12, 5 hectáreas",
    time: "Hace 2 horas",
    status: "completed",
    color: "text-primary",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Riego automático",
    description: "Sistema activado en lote B-8",
    time: "Hace 4 horas",
    status: "active",
    color: "text-blue-500",
  },
  {
    id: 3,
    icon: Bug,
    title: "Control de plagas",
    description: "Aplicación de pesticida orgánico",
    time: "Hace 6 horas",
    status: "completed",
    color: "text-orange-500",
  },
  {
    id: 4,
    icon: Truck,
    title: "Entrega de cosecha",
    description: "500kg de tomates a distribuidor",
    time: "Ayer",
    status: "completed",
    color: "text-green-500",
  },
  {
    id: 5,
    icon: Wrench,
    title: "Mantenimiento de tractor",
    description: "Revisión programada completada",
    time: "Ayer",
    status: "completed",
    color: "text-gray-500",
  },
  {
    id: 6,
    icon: Scissors,
    title: "Poda de árboles",
    description: "Huerto de manzanas, sección C",
    time: "Hace 2 días",
    status: "completed",
    color: "text-secondary",
  },
  {
    id: 7,
    icon: Package,
    title: "Recepción de semillas",
    description: "Inventario actualizado",
    time: "Hace 2 días",
    status: "completed",
    color: "text-purple-500",
  },
  {
    id: 8,
    icon: Users,
    title: "Capacitación del equipo",
    description: "Nuevas técnicas de cultivo",
    time: "Hace 3 días",
    status: "completed",
    color: "text-indigo-500",
  },
  {
    id: 9,
    icon: Calendar,
    title: "Planificación semanal",
    description: "Reunión de coordinación",
    time: "Hace 3 días",
    status: "completed",
    color: "text-pink-500",
  },
]

export function RecentActivities() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Actividades Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-card-foreground truncate">{activity.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  <Badge variant={activity.status === "active" ? "default" : "secondary"} className="text-xs">
                    {activity.status === "active" ? "Activo" : "Completado"}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
