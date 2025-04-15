import {
  Search,
  Bell,
  BarChart2,
  TrendingUp,
  Users,
  Map,
  Truck,
  Anchor,
  Building,
  Train,
  Database,
  Activity,
  Briefcase,
  Cpu,
  UsersIcon,
  ArrowUp, 
} from "lucide-react"
import LineChartComponent from "../components/LineChartComponent"
import { PipelineComparables } from "../components/PipelineComparables"

export default function LocationAnalysis() {
  return (
    <div className="min-h-screen bg-white max-w-[1300px] mx-auto">
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <div className="text-sm text-[#6b6b6b] mb-2">Demographic Trends: Workforce Composition</div>
            <div className="text-3xl font-bold mb-1">50% Industrial Workforce</div>
            <div className="text-sm text-[#6b6b6b] mb-6">
              2020-2025 <span className="text-[#3db070]">+5%</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Industrial</span>
                </div>
                <div className="h-2 bg-[#ededed] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b6b6b] rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Retail</span>
                </div>
                <div className="h-2 bg-[#ededed] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b6b6b] rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Office</span>
                </div>
                <div className="h-2 bg-[#ededed] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b6b6b] rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <div className="text-sm text-[#6b6b6b] mb-2">Population and Income Growth</div>
            <div className="text-3xl font-bold mb-1">3% Annual Growth</div>
            <div className="text-sm text-[#6b6b6b] mb-6">
              2018-2023 <span className="text-[#f52626]">-2%</span>
            </div>

            <div className="h-32 relative">
              {/* <svg viewBox="0 0 400 100" className="w-full h-full">
                <path
                  d="M0,50 C20,40 40,60 60,50 C80,40 100,30 120,50 C140,70 160,60 180,40 C200,20 220,30 240,50 C260,70 280,90 300,50 C320,10 340,30 360,40 C380,50 400,30 400,20"
                  fill="none"
                  stroke="#6b6b6b"
                  strokeWidth="2"
                />
              </svg> */}
                <LineChartComponent />

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <h3 className="font-medium mb-4">Proximity Insights</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Truck className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Highway</div>
                  <div className="font-semibold">1.2 mi</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Anchor className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Port</div>
                  <div className="font-semibold">8.7 mi</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Building className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Major Tenant</div>
                  <div className="font-semibold">Amazon</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Train className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Rail</div>
                  <div className="font-semibold">1.0 mi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <h3 className="font-medium mb-4">Demographic Trends</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Population</div>
                  <div className="font-semibold">2.7M</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Population Growth</div>
                  <div className="font-semibold">2.2%</div>
                  <div className="text-xs text-[#6b6b6b]">3-Year Growth</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <BarChart2 className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Income Growth</div>
                  <div className="font-semibold">2.2%</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Activity className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Mark-to-Market Opportunity</div>
                  <div className="font-semibold">30%+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <h3 className="font-medium mb-4">Workforce Composition</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Briefcase className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Skilled Labor</div>
                  <div className="font-semibold">40%</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Database className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Office/Admin</div>
                  <div className="font-semibold">25%</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Cpu className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Tech/Engineers</div>
                  <div className="font-semibold">10%</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <UsersIcon className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Others</div>
                  <div className="font-semibold">25%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#e5e8eb] rounded-lg p-6">
            <h3 className="font-medium mb-4">Zoning overlays</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Map className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Light Industrial</div>
                  <div className="font-semibold">M1-2</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Map className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Medium Industrial</div>
                  <div className="font-semibold">M1-3</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <ArrowUp className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Heavy Industrial</div>
                  <div className="font-semibold">M1-4</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#ededed] rounded flex items-center justify-center mr-3">
                  <Map className="w-4 h-4 text-[#6b6b6b]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b]">Extra Heavy Industrial</div>
                  <div className="font-semibold">M1-5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PipelineComparables/>
      </main>
    </div>
  )
}
