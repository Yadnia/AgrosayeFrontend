
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header"
import { FinancialCards } from "@/app/dashboard/components/financial-cards"
import { RecentActivities } from "@/app/dashboard/components/recent-activities"
import { CalendarSection } from "@/app/dashboard/components/calendar-section";
import "@/app/styles/dashboard.css";

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
     
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* Main content area - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* Financial overview cards */}
              <FinancialCards />

              {/* Recent activities */}
              <RecentActivities />
            </div>

            {/* Right sidebar - 1 column */}
            <div className="lg:col-span-1">
              <CalendarSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
