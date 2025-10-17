"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

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
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    variety: "",
    plantingDate: "",
    expectedHarvest: "",
    area: "",
    status: "",
    health: "",
    wateringSchedule: "",
    fertilizer: "",
  })

  const totalArea = crops.reduce((sum, crop) => sum + Number.parseFloat(crop.area), 0)
  const readyForHarvest = crops.filter((crop) => crop.status === "Listo para cosecha").length
  const healthyCrops = crops.filter((crop) => crop.health === "Excelente").length

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nuevo cultivo:", formData)
    // Here you would typically add the crop to your state/database
    setOpen(false)
    setFormData({
      name: "",
      variety: "",
      plantingDate: "",
      expectedHarvest: "",
      area: "",
      status: "",
      health: "",
      wateringSchedule: "",
      fertilizer: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Mis Cultivos</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Cultivo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Cultivo</DialogTitle>
              <DialogDescription>
                Completa la información del nuevo cultivo para agregarlo a tu sistema.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Cultivo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ej. Tomates"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="variety">Variedad</Label>
                  <Input
                    id="variety"
                    value={formData.variety}
                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                    placeholder="ej. Cherry"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="plantingDate">Fecha de Plantación</Label>
                  <Input
                    id="plantingDate"
                    type="date"
                    value={formData.plantingDate}
                    onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedHarvest">Cosecha Esperada</Label>
                  <Input
                    id="expectedHarvest"
                    type="date"
                    value={formData.expectedHarvest}
                    onChange={(e) => setFormData({ ...formData, expectedHarvest: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Área (hectáreas)</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="ej. 2.5"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Germinando">Germinando</SelectItem>
                      <SelectItem value="Creciendo">Creciendo</SelectItem>
                      <SelectItem value="Floración">Floración</SelectItem>
                      <SelectItem value="Madurando">Madurando</SelectItem>
                      <SelectItem value="Listo para cosecha">Listo para cosecha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="health">Salud</Label>
                  <Select
                    value={formData.health}
                    onValueChange={(value) => setFormData({ ...formData, health: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar salud" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excelente">Excelente</SelectItem>
                      <SelectItem value="Buena">Buena</SelectItem>
                      <SelectItem value="Regular">Regular</SelectItem>
                      <SelectItem value="Mala">Mala</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wateringSchedule">Programa de Riego</Label>
                <Input
                  id="wateringSchedule"
                  value={formData.wateringSchedule}
                  onChange={(e) => setFormData({ ...formData, wateringSchedule: e.target.value })}
                  placeholder="ej. Diario, Cada 2 días"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fertilizer">Fertilizante</Label>
                <Input
                  id="fertilizer"
                  value={formData.fertilizer}
                  onChange={(e) => setFormData({ ...formData, fertilizer: e.target.value })}
                  placeholder="ej. NPK 10-10-10"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Agregar Cultivo
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

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
