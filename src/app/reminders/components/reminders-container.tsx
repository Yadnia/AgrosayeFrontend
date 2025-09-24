"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, AlertTriangle, CheckCircle, Plus } from "lucide-react"

interface Reminder {
  id: string
  title: string
  description: string
  date: string
  time: string
  priority: "alta" | "media" | "baja"
  category: string
  completed: boolean
}

export function RemindersContainer() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Riego de tomates",
      description: "Revisar sistema de riego automático en invernadero 2",
      date: "2024-01-15",
      time: "08:00",
      priority: "alta",
      category: "Cultivos",
      completed: false,
    },
    {
      id: "2",
      title: "Fertilización maíz",
      description: "Aplicar fertilizante NPK en lote 3",
      date: "2024-01-16",
      time: "06:30",
      priority: "media",
      category: "Fertilización",
      completed: false,
    },
    {
      id: "3",
      title: "Inspección plagas",
      description: "Revisar cultivos de papa por presencia de plagas",
      date: "2024-01-14",
      time: "10:00",
      priority: "alta",
      category: "Sanidad",
      completed: true,
    },
    {
      id: "4",
      title: "Mantenimiento tractor",
      description: "Cambio de aceite y revisión general",
      date: "2024-01-18",
      time: "14:00",
      priority: "media",
      category: "Maquinaria",
      completed: false,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    priority: "media" as "alta" | "media" | "baja",
    category: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newReminder: Reminder = {
      id: Date.now().toString(),
      ...formData,
      completed: false,
    }
    setReminders([...reminders, newReminder])
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      priority: "media",
      category: "",
    })
    setShowForm(false)
  }

  const toggleComplete = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder)),
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-red-100 text-red-800"
      case "media":
        return "bg-yellow-100 text-yellow-800"
      case "baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const pendingReminders = reminders.filter((r) => !r.completed)
  const completedReminders = reminders.filter((r) => r.completed)
  const highPriorityCount = reminders.filter((r) => r.priority === "alta" && !r.completed).length

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Pendientes</p>
                <p className="text-2xl font-bold">{pendingReminders.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Completados</p>
                <p className="text-2xl font-bold">{completedReminders.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Alta Prioridad</p>
                <p className="text-2xl font-bold">{highPriorityCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold">{reminders.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Reminder Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Recordatorios</h2>
        <Button onClick={() => setShowForm(!showForm)} className="bg-[#50745C] hover:bg-[#3d5a47] text-white">
          <Plus className="h-4 w-4 mr-2" />
          Agregar Recordatorio
        </Button>
      </div>

      {/* Add Reminder Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Nuevo Recordatorio</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">Hora</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="priority">Prioridad</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value: "alta" | "media" | "baja") => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baja">Baja</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-[#50745C] hover:bg-[#3d5a47] text-white">
                  Guardar Recordatorio
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reminders List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reminders.map((reminder) => (
          <Card key={reminder.id} className={`${reminder.completed ? "opacity-60" : ""}`}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3
                    className={`font-semibold ${reminder.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                  >
                    {reminder.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{reminder.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleComplete(reminder.id)}
                  className={reminder.completed ? "text-green-600" : "text-gray-400"}
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {reminder.date}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {reminder.time}
                </Badge>
                <Badge className={`text-xs ${getPriorityColor(reminder.priority)}`}>
                  {reminder.priority.toUpperCase()}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="text-xs">
                  {reminder.category}
                </Badge>
                {reminder.completed && <Badge className="text-xs bg-green-100 text-green-800">Completado</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
