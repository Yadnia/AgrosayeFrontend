"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Plus, Bell } from "lucide-react"

const reminders = [
  {
    id: 1,
    title: "Riego matutino",
    time: "06:00",
    date: "Hoy",
    priority: "high",
    type: "daily",
  },
  {
    id: 2,
    title: "Revisión de invernadero",
    time: "10:30",
    date: "Hoy",
    priority: "medium",
    type: "task",
  },
  {
    id: 3,
    title: "Entrega de productos",
    time: "14:00",
    date: "Mañana",
    priority: "high",
    type: "delivery",
  },
  {
    id: 4,
    title: "Fertilización lote C",
    time: "08:00",
    date: "Miércoles",
    priority: "medium",
    type: "task",
  },
  {
    id: 5,
    title: "Reunión con proveedor",
    time: "16:00",
    date: "Jueves",
    priority: "low",
    type: "meeting",
  },
]

export function CalendarSection() {
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false)
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
  const [newReminder, setNewReminder] = useState({
    title: "",
    date: "",
    time: "",
    priority: "",
    description: "",
  })
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    type: "",
    description: "",
  })

  const handleAddReminder = () => {
    console.log("[v0] Adding new reminder:", newReminder)
    setIsReminderDialogOpen(false)
    setNewReminder({ title: "", date: "", time: "", priority: "", description: "" })
  }

  const handleAddEvent = () => {
    console.log("[v0] Adding new event:", newEvent)
    setIsEventDialogOpen(false)
    setNewEvent({ title: "", date: "", time: "", type: "", description: "" })
  }

  return (
    <div className="space-y-6">
      {/* Mini Calendar */}
      <Card className="bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-card-foreground">Diciembre 2024</CardTitle>
            <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agregar Evento al Calendario</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="event-title">Título del Evento</Label>
                    <Input
                      id="event-title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="Ej: Reunión con proveedor"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event-type">Tipo de Evento</Label>
                    <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reunion">Reunión</SelectItem>
                        <SelectItem value="entrega">Entrega</SelectItem>
                        <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                        <SelectItem value="capacitacion">Capacitación</SelectItem>
                        <SelectItem value="inspeccion">Inspección</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                      <Label htmlFor="event-date">Fecha</Label>
                      <Input
                        id="event-date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="event-time">Hora</Label>
                      <Input
                        id="event-time"
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event-description">Descripción</Label>
                    <Textarea
                      id="event-description"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      placeholder="Detalles del evento"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsEventDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleAddEvent}>Agregar Evento</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            <div className="text-muted-foreground font-medium p-2">Dom</div>
            <div className="text-muted-foreground font-medium p-2">Lun</div>
            <div className="text-muted-foreground font-medium p-2">Mar</div>
            <div className="text-muted-foreground font-medium p-2">Mié</div>
            <div className="text-muted-foreground font-medium p-2">Jue</div>
            <div className="text-muted-foreground font-medium p-2">Vie</div>
            <div className="text-muted-foreground font-medium p-2">Sáb</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6 + 1
              const isCurrentMonth = day > 0 && day <= 31
              const isToday = day === 17
              const hasEvent = [5, 12, 18, 25].includes(day)

              return (
                <div
                  key={i}
                  className={`
                    p-2 rounded-md cursor-pointer transition-colors
                    ${!isCurrentMonth ? "text-muted-foreground/30" : "text-card-foreground hover:bg-muted"}
                    ${isToday ? "bg-primary text-primary-foreground font-bold" : ""}
                    ${hasEvent && !isToday ? "bg-accent/20 text-accent-foreground" : ""}
                  `}
                >
                  {isCurrentMonth ? day : ""}
                  {hasEvent && <div className="w-1 h-1 bg-accent rounded-full mx-auto mt-1"></div>}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Reminders */}
      <Card className="bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recordatorios
            </CardTitle>
            <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agregar Recordatorio</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-title">Título del Recordatorio</Label>
                    <Input
                      id="reminder-title"
                      value={newReminder.title}
                      onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                      placeholder="Ej: Riego matutino"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-priority">Prioridad</Label>
                    <Select
                      value={newReminder.priority}
                      onValueChange={(value) => setNewReminder({ ...newReminder, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar prioridad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">Alta</SelectItem>
                        <SelectItem value="medium">Media</SelectItem>
                        <SelectItem value="low">Baja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-date">Fecha</Label>
                      <Input
                        id="reminder-date"
                        type="date"
                        value={newReminder.date}
                        onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-time">Hora</Label>
                      <Input
                        id="reminder-time"
                        type="time"
                        value={newReminder.time}
                        onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-description">Descripción</Label>
                    <Textarea
                      id="reminder-description"
                      value={newReminder.description}
                      onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                      placeholder="Detalles adicionales del recordatorio"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsReminderDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleAddReminder}>Agregar Recordatorio</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="p-1 rounded bg-primary/10">
                  <Clock className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-card-foreground truncate">{reminder.title}</h4>
                    <Badge
                      variant={
                        reminder.priority === "high"
                          ? "destructive"
                          : reminder.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs ml-2"
                    >
                      {reminder.priority === "high" ? "Alta" : reminder.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{reminder.date}</span>
                    <span>•</span>
                    <span>{reminder.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
