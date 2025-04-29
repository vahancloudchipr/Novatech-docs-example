import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, Clock, Database, Server, Globe, Activity, AlertTriangle, Check, RefreshCw } from 'lucide-react';

// Sample data
const serviceHealthData = [
  { name: 'User Service', status: 'healthy', uptime: 99.99, responseTime: 120 },
  { name: 'Catalog Service', status: 'healthy', uptime: 99.95, responseTime: 150 },
  { name: 'Search Service', status: 'degraded', uptime: 99.5, responseTime: 280 },
  { name: 'Cart Service', status: 'healthy', uptime: 99.98, responseTime: 90 },
  { name: 'Order Service', status: 'healthy', uptime: 99.97, responseTime: 200 },
  { name: 'Payment Service', status: 'healthy', uptime: 99.99, responseTime: 180 },
  { name: 'Inventory Service', status: 'healthy', uptime: 99.95, responseTime: 210 },
  { name: 'Fulfillment Service', status: 'healthy', uptime: 99.90, responseTime: 230 },
];

const responseTimeData = [
  { time: '00:00', user: 120, catalog: 150, search: 280, cart: 90, order: 200, payment: 180, inventory: 210, fulfillment: 230 },
  { time: '01:00', user: 125, catalog: 155, search: 290, cart: 95, order: 210, payment: 185, inventory: 215, fulfillment: 235 },
  { time: '02:00', user: 110, catalog: 145, search: 275, cart: 85, order: 195, payment: 175, inventory: 205, fulfillment: 225 },
  { time: '03:00', user: 115, catalog: 150, search: 285, cart: 90, order: 205, payment: 180, inventory: 210, fulfillment: 230 },
  { time: '04:00', user: 130, catalog: 160, search: 300, cart: 100, order: 215, payment: 190, inventory: 220, fulfillment: 240 },
  { time: '05:00', user: 125, catalog: 155, search: 295, cart: 95, order: 210, payment: 185, inventory: 215, fulfillment: 235 },
  { time: '06:00', user: 140, catalog: 170, search: 310, cart: 105, order: 220, payment: 195, inventory: 225, fulfillment: 245 },
  { time: '07:00', user: 150, catalog: 180, search: 320, cart: 110, order: 230, payment: 205, inventory: 235, fulfillment: 255 },
];

const errorRateData = [
  { time: '00:00', errors: 0.1 },
  { time: '01:00', errors: 0.2 },
  { time: '02:00', errors: 0.15 },
  { time: '03:00', errors: 0.1 },
  { time: '04:00', errors: 0.25 },
  { time: '05:00', errors: 0.3 },
  { time: '06:00', errors: 0.2 },
  { time: '07:00', errors: 0.15 },
];

const requestsData = [
  { time: '00:00', requests: 1200 },
  { time: '01:00', requests: 980 },
  { time: '02:00', requests: 850 },
  { time: '03:00', requests: 750 },
  { time: '04:00', requests: 950 },
  { time: '05:00', requests: 1100 },
  { time: '06:00', requests: 1350 },
  { time: '07:00', requests: 1500 },
];

const resourceUsageData = [
  { name: 'US-East-1', cpu: 65, memory: 72, disk: 58 },
  { name: 'EU-West-1', cpu: 58, memory: 65, disk: 45 },
  { name: 'AP-Southeast-1', cpu: 70, memory: 68, disk: 62 },
];

const incidentData = [
  { id: 1, severity: 'High', service: 'Search Service', status: 'Investigating', time: '06:42 AM' },
  { id: 2, severity: 'Low', service: 'Notification Service', status: 'Resolved', time: '02:15 AM' },
  { id: 3, severity: 'Medium', service: 'Payment Service', status: 'Monitoring', time: 'Yesterday 11:30 PM' },
];

const alertsData = [
  { id: 1, type: 'CPU', message: 'High CPU utilization in Search Service', time: '06:35 AM' },
  { id: 2, type: 'Memory', message: 'Memory pressure in Catalog Service', time: '05:20 AM' },
  { id: 3, type: 'Latency', message: 'API response time exceeded threshold', time: '04:15 AM' },
  { id: 4, type: 'Disk', message: 'Low disk space on Analytics cluster', time: '01:30 AM' },
];

const regionData = [
  { name: 'North America', value: 55 },
  { name: 'Europe', value: 25 },
  { name: 'Asia-Pacific', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

const MonitoringDashboard = () => {
  const [timeRange, setTimeRange] = useState('8h');
  
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">NovaTech Operations Dashboard</h1>
            <p className="text-gray-500">Real-time monitoring and observability</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border rounded-md p-1">
              <select 
                className="bg-white text-gray-800 p-1 outline-none"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="1h">Last hour</option>
                <option value="8h">Last 8 hours</option>
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
              </select>
            </div>
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <RefreshCw size={16} className="mr-1" />
              <span>Refresh</span>
            </button>
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <Check size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Services Healthy</p>
              <p className="text-2xl font-bold text-gray-800">7/8</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <Activity size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Requests/Minute</p>
              <p className="text-2xl font-bold text-gray-800">1,453</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <Clock size={24} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-800">182 ms</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <AlertTriangle size={24} className="text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Incidents</p>
              <p className="text-2xl font-bold text-gray-800">1</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Response Time (ms)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="user" stroke="#8884d8" activeDot={{ r: 8 }} name="User Service" />
                <Line type="monotone" dataKey="catalog" stroke="#82ca9d" name="Catalog Service" />
                <Line type="monotone" dataKey="search" stroke="#ffc658" name="Search Service" />
                <Line type="monotone" dataKey="cart" stroke="#ff8042" name="Cart Service" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Requests vs Error Rate</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={requestsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 1]} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="requests" stroke="#8884d8" fill="#8884d8" yAxisId="left" name="Requests" />
                <Line type="monotone" dataKey="errors" stroke="#ff0000" yAxisId="right" name="Error Rate %" data={errorRateData} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4 col-span-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Region</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Resource Usage by Region</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="cpu" fill="#8884d8" name="CPU Usage %" />
                <Bar dataKey="memory" fill="#82ca9d" name="Memory Usage %" />
                <Bar dataKey="disk" fill="#ffc658" name="Disk Usage %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Service health and alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Service Health</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uptime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {serviceHealthData.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${service.status === 'healthy' ? 'bg-green-100 text-green-800' : 
                          service.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.uptime}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.responseTime} ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Incidents</h2>
            <div className="space-y-4">
              {incidentData.map((incident) => (
                <div key={incident.id} className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-2
                        ${incident.severity === 'High' ? 'bg-red-100 text-red-600' : 
                          incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 
                          'bg-blue-100 text-blue-600'}`}>
                        {incident.severity.charAt(0)}
                      </span>
                      <span className="font-medium">{incident.service}</span>
                    </div>
                    <span className="text-xs text-gray-500">{incident.time}</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className={`text-sm px-2 py-1 rounded
                      ${incident.status === 'Investigating' ? 'bg-red-100 text-red-800' : 
                        incident.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'}`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Alerts</h2>
            <div className="space-y-3">
              {alertsData.map((alert) => (
                <div key={alert.id} className="flex items-start p-2 border-b border-gray-200 last:border-0">
                  <div className={`rounded-full p-2 mr-3
                    ${alert.type === 'CPU' ? 'bg-purple-100 text-purple-600' : 
                      alert.type === 'Memory' ? 'bg-blue-100 text-blue-600' : 
                      alert.type === 'Latency' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'}`}>
                    <Server size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;
