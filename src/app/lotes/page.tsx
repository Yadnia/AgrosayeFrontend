
import { CropsContainer } from "@/app/lotes/components/crops-container"

export default function HomePage() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F1F7ED" }}>
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Cultivos</h1>
          <CropsContainer />
        </div>
      </main>
    </div>
  )
}
