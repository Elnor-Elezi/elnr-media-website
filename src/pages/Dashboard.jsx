import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, TrendingUp, DollarSign, Activity, 
  ArrowUpRight, BarChart3, PieChart, FileText, Settings, LogOut
} from 'lucide-react'

// Mock Data
const metrics = [
  { label: 'Total Leads (30d)', value: '342', change: '+12.5%', isPositive: true, icon: Users },
  { label: 'Conversion Rate', value: '4.8%', change: '+1.2%', isPositive: true, icon: Activity },
  { label: 'Ad Spend ROI', value: '310%', change: '+45%', isPositive: true, icon: TrendingUp },
  { label: 'Cost Per Lead', value: '$12.40', change: '-$2.10', isPositive: true, icon: DollarSign },
]

const recentLeads = [
  { name: 'Sarah Jenkins', company: 'TechFlow Inc', status: 'Hot', date: '2 hours ago' },
  { name: 'Marcus Cole', company: 'BuildRight', status: 'Qualified', date: '5 hours ago' },
  { name: 'Elena Rodriguez', company: 'StartUp Co', status: 'Follow-up', date: '1 day ago' },
  { name: 'James Wilson', company: 'Enterprise LLC', status: 'Hot', date: '1 day ago' },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col lg:flex-row pt-16 lg:pt-20">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white border-r border-charcoal-200/40 p-6 flex flex-col hidden lg:flex">
        <div className="mb-10">
          <div className="text-xs font-bold tracking-[0.2em] text-charcoal-400 uppercase mb-4">Client Portal</div>
          <nav className="space-y-2">
            {[
              { id: 'overview', icon: BarChart3, label: 'Overview' },
              { id: 'campaigns', icon: PieChart, label: 'Campaigns' },
              { id: 'leads', icon: Users, label: 'Lead Pipeline' },
              { id: 'reports', icon: FileText, label: 'Reports' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-brand-50 text-brand-600' 
                    : 'text-charcoal-500 hover:bg-charcoal-50 hover:text-navy-700'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-charcoal-500 hover:bg-charcoal-50 transition-all duration-200">
              <Settings size={18} /> Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200">
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h1 className="font-display text-3xl font-bold text-navy-700 mb-1">Welcome back, Client</h1>
              <p className="text-charcoal-500 text-sm">Here is what's happening with your growth systems today.</p>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors">
              Download Report <ArrowUpRight size={16} />
            </button>
          </header>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-charcoal-200/40 shadow-soft"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                    <metric.icon size={18} className="text-brand-600" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    metric.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-display font-bold text-navy-700 mb-1">{metric.value}</div>
                <div className="text-xs font-medium text-charcoal-400 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart Area Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-white rounded-2xl p-6 border border-charcoal-200/40 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-navy-700">Audience Growth</h3>
                <select className="text-xs font-medium text-charcoal-500 bg-charcoal-50 border-none rounded-lg px-3 py-1.5 focus:ring-0 cursor-pointer">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Year to Date</option>
                </select>
              </div>
              <div className="h-64 w-full flex items-end justify-between gap-2">
                {/* Fake bar chart bars */}
                {[40, 55, 45, 60, 75, 65, 85, 80, 95, 90, 100, 110].map((h, i) => (
                  <div key={i} className="w-full bg-brand-100 rounded-t-sm relative group cursor-pointer" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-500 rounded-t-sm transition-all duration-300 group-hover:bg-brand-400" style={{ height: `${h * 0.7}%` }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Leads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-charcoal-200/40 shadow-soft flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-navy-700">Recent Leads</h3>
                <button className="text-xs font-semibold text-brand-600 hover:text-brand-700">View All</button>
              </div>
              <div className="space-y-4 flex-1">
                {recentLeads.map((lead, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-charcoal-50 transition-colors cursor-pointer border border-transparent hover:border-charcoal-200/40">
                    <div>
                      <div className="text-sm font-bold text-navy-700">{lead.name}</div>
                      <div className="text-xs text-charcoal-400">{lead.company} • {lead.date}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      lead.status === 'Hot' ? 'bg-orange-50 text-orange-600' : 
                      lead.status === 'Qualified' ? 'bg-brand-50 text-brand-600' : 
                      'bg-charcoal-100 text-charcoal-600'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  )
}
