import { RemindersContainer } from "@/app/reminders/components/reminders-container"

export default function HomePage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F1F7ED" }}>
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Recordatorios</h1>
          <RemindersContainer />
        </div>
      </main>
    </div>
  )
}
