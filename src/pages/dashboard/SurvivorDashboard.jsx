// src/pages/dashboard/SurvivorDashboard.jsx
import { useAuth } from '../../contexts/AuthContext'
import { Calendar, Clock, FileText, Activity, Users } from 'lucide-react'

const SurvivorDashboard = () => {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name || 'User'}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your support journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Active Reports',
            stat: '3',
            icon: FileText,
            color: 'text-blue-500',
            bgColor: 'bg-blue-100',
          },
          {
            name: 'Upcoming Appointments',
            stat: '2',
            icon: Calendar,
            color: 'text-purple-500',
            bgColor: 'bg-purple-100',
          },
          {
            name: 'Support Team Members',
            stat: '3',
            icon: Users,
            color: 'text-green-500',
            bgColor: 'bg-green-100',
          },
          {
            name: 'Progress Goals',
            stat: '5',
            icon: Activity,
            color: 'text-pink-500',
            bgColor: 'bg-pink-100',
          },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`${item.bgColor} rounded-md p-3`}>
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {item.stat}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">File Report</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Schedule Session</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Activity className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Track Progress</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all duration-200">
            <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="block text-sm font-medium text-gray-900">Join Support Group</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SurvivorDashboard