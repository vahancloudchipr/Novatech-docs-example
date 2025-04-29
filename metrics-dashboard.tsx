import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Activity, Clock, AlertTriangle, BarChart2, Calendar, Filter, RefreshCw, Download } from 'lucide-react';

// Sample data generated from our analysis
const availabilityData = [
  {date: "2025-03-31", availability: 98.86},
  {date: "2025-04-01", availability: 99.41},
  {date: "2025-04-02", availability: 96.58},
  {date: "2025-04-03", availability: 97.92},
  {date: "2025-04-04", availability: 99.56},
  {date: "2025-04-05", availability: 98.23},
  {date: "2025-04-06", availability: 97.67},
  {date: "2025-04-07", availability: 99.12},
  {date: "2025-04-08", availability: 99.45},
  {date: "2025-04-09", availability: 98.78},
  {date: "2025-04-10", availability: 99.67},
  {date: "2025-04-11", availability: 99.34},
  {date: "2025-04-12", availability: 98.91},
  {date: "2025-04-13", availability: 98.45},
  {date: "2025-04-14", availability: 99.23},
  {date: "2025-04-15", availability: 99.56},
  {date: "2025-04-16", availability: 98.87},
  {date: "2025-04-17", availability: 99.12},
  {date: "2025-04-18", availability: 98.45},
  {date: "2025-04-19", availability: 97.23},
  {date: "2025-04-20", availability: 96.78},
  {date: "2025-04-21", availability: 97.98},
  {date: "2025-04-22", availability: 98.56},
  {date: "2025-04-23", availability: 98.97},
  {date: "2025-04-24", availability: 99.34},
  {date: "2025-04-25", availability: 97.56},
  {date: "2025-04-26", availability: 96.78},
  {date: "2025-04-27", availability: 95.23},
  {date: "2025-04-28", availability: 94.70},
  {date: "2025-04-29", availability: 99.03}
];

const responseTimeData = [
  {date: "2025-03-31", responseTime: 164.93},
  {date: "2025-04-01", responseTime: 165.47},
  {date: "2025-04-02", responseTime: 188.15},
  {date: "2025-04-03", responseTime: 175.23},
  {date: "2025-04-04", responseTime: 169.45},
  {date: "2025-04-05", responseTime: 172.34},
  {date: "2025-04-06", responseTime: 178.56},
  {date: "2025-04-07", responseTime: 170.12},
  {date: "2025-04-08", responseTime: 167.89},
  {date: "2025-04-09", responseTime: 165.67},
  {date: "2025-04-10", responseTime: 162.35},
  {date: "2025-04-11", responseTime: 160.23},
  {date: "2025-04-12", responseTime: 163.45},
  {date: "2025-04-13", responseTime: 166.78},
  {date: "2025-04-14", responseTime: 162.19},
  {date: "2025-04-15", responseTime: 158.44},
  {date: "2025-04-16", responseTime: 163.25},
  {date: "2025-04-17", responseTime: 167.91},
  {date: "2025-04-18", responseTime: 172.35},
  {date: "2025-04-19", responseTime: 176.98},
  {date: "2025-04-20", responseTime: 180.45},
  {date: "2025-04-21", responseTime: 184.32},
  {date: "2025-04-22", responseTime: 188.67},
  {date: "2025-04-23", responseTime: 195.12},
  {date: "2025-04-24", responseTime: 201.45},
  {date: "2025-04-25", responseTime: 210.34},
  {date: "2025-04-26", responseTime: 204.56},
  {date: "2025-04-27", responseTime: 198.35},
  {date: "2025-04-28", responseTime: 192.22},
  {date: "2025-04-29", responseTime: 166.78}
];

const errorRateData = [
  {date: "2025-03-31", errorRate: 0.07},
  {date: "2025-04-01", errorRate: 0.07},
  {date: "2025-04-02", errorRate: 0.14},
  {date: "2025-04-03", errorRate: 0.11},
  {date: "2025-04-04", errorRate: 0.09},
  {date: "2025-04-05", errorRate: 0.08},
  {date: "2025-04-06", errorRate: 0.10},
  {date: "2025-04-07", errorRate: 0.06},
  {date: "2025-04-08", errorRate: 0.05},
  {date: "2025-04-09", errorRate: 0.06},
  {date: "2025-04-10", errorRate: 0.04},
  {date: "2025-04-11", errorRate: 0.05},
  {date: "2025-04-12", errorRate: 0.07},
  {date: "2025-04-13", errorRate: 0.09},
  {date: "2025-04-14", errorRate: 0.08},
  {date: "2025-04-15", errorRate: 0.07},
  {date: "2025-04-16", errorRate: 0.08},
  {date: "2025-04-17", errorRate: 0.07},
  {date: "2025-04-18", errorRate: 0.09},
  {date: "2025-04-19", errorRate: 0.11},
  {date: "2025-04-20", errorRate: 0.14},
  {date: "2025-04-21", errorRate: 0.12},
  {date: "2025-04-22", errorRate: 0.10},
  {date: "2025-04-23", errorRate: 0.09},
  {date: "2025-04-24", errorRate: 0.08},
  {date: "2025-04-25", errorRate: 0.11},
  {date: "2025-04-26", errorRate: 0.13},
  {date: "2025-04-27", errorRate: 0.15},
  {date: "2025-04-28", errorRate: 0.09},
  {date: "2025-04-29", errorRate: 0.07}
];

const requestCountData = [
  {date: "2025-03-31", requestCount: 4823234},
  {date: "2025-04-01", requestCount: 4776643},
  {date: "2025-04-02", requestCount: 4464590},
  {date: "2025-04-03", requestCount: 4568923},
  {date: "2025-04-04", requestCount: 4782345},
  {date: "2025-04-05", requestCount: 4234567},
  {date: "2025-04-06", requestCount: 4123456},
  {date: "2025-04-07", requestCount: 4567890},
  {date: "2025-04-08", requestCount: 4876543},
  {date: "2025-04-09", requestCount: 4956789},
  {date: "2025-04-10", requestCount: 5012345},
  {date: "2025-04-11", requestCount: 5123456},
  {date: "2025-04-12", requestCount: 4876543},
  {date: "2025-04-13", requestCount: 4765432},
  {date: "2025-04-14", requestCount: 4876543},
  {date: "2025-04-15", requestCount: 4987654},
  {date: "2025-04-16", requestCount: 5098765},
  {date: "2025-04-17", requestCount: 5187654},
  {date: "2025-04-18", requestCount: 5056789},
  {date: "2025-04-19", requestCount: 4654321},
  {date: "2025-04-20", requestCount: 4432109},
  {date: "2025-04-21", requestCount: 4543210},
  {date: "2025-04-22", requestCount: 4654321},
  {date: "2025-04-23", requestCount: 4765432},
  {date: "2025-04-24", requestCount: 4876543},
  {date: "2025-04-25", requestCount: 4345678},
  {date: "2025-04-26", requestCount: 4234567},
  {date: "2025-04-27", requestCount: 4321098},
  {date: "2025-04-28", requestCount: 4545678},
  {date: "2025-04-29", requestCount: 4767021}
];

const servicePerformanceData = [
  {service: "User Service", availability: 99.99, responseTime: 120, errorRate: 0.05},
  {service: "Catalog Service", availability: 99.85, responseTime: 155, errorRate: 0.08},
  {service: "Search Service", availability: 98.75, responseTime: 205, errorRate: 0.15},
  {service: "Cart Service", availability: 99.92, responseTime: 95, errorRate: 0.03},
  {service: "Order Service", availability: 99.80, responseTime: 175, errorRate: 0.07},
  {service: "Payment Service", availability: 99.95, responseTime: 165, errorRate: 0.02},
  {service: "Inventory Service", availability: 99.88, responseTime: 185, errorRate: 0.06},
  {service: "Fulfillment Service", availability: 99.75, responseTime: 220, errorRate: 0.09}
];

const incidentData = [
  {id: 1, service: "Search Service", severity: "High", status: "Resolved", startTime: "Apr 2, 08:15 AM", endTime: "Apr 2, 10:45 AM", duration: "2h 30m", impact: "Degraded search results for 15% of users"},
  {id: 2, service: "Order Service", severity: "Medium", status: "Resolved", startTime: "Apr 13, 03:20 PM", endTime: "Apr 13, 04:15 PM", duration: "55m", impact: "Delayed order processing for EU customers"},
  {id: 3, service: "Cart Service", severity: "Critical", status: "Resolved", startTime: "Apr 28, 09:10 AM", endTime: "Apr 28, 11:30 AM", duration: "2h 20m", impact: "Cart unavailable for 40% of users"},
  {id: 4, service: "Payment Service", severity: "Low", status: "Resolved", startTime: "Apr 21, 01:45 AM", endTime: "Apr 21, 02:30 AM", duration: "45m", impact: "Payment confirmations delayed by up to 2 minutes"}
];

// Dashboard statistics
const dashboardStats = {
  currentAvailability: 99.03,
  availabilityChange: 4.33,
  currentResponseTime: 166.78,
  responseTimeChange: -25.44,
  currentErrorRate: 0.07,
  errorRateChange: -0.02,
  currentRequestCount: 4767021,
  requestCountChange: 4.88,
  avgAvailability7Days: 97.69,
  avgResponseTime7Days: 179.09,
  avgErrorRate7Days: 0.08
};

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
};

const MetricsDashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [serviceFilter, setServiceFilter] = useState('All');
  
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">NovaTech Performance Metrics</h1>
            <p className="text-gray-500">System performance and availability monitoring</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center border rounded-md p-2 bg-white">
              <Calendar size={16} className="mr-2 text-gray-500" />
              <select 
                className="bg-white text-sm text-gray-700 outline-none"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7d">Last 7 days</option>
                <option value="14d">Last 14 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            <div className="flex items-center border rounded-md p-2 bg-white">
              <Filter size={16} className="mr-2 text-gray-500" />
              <select 
                className="bg-white text-sm text-gray-700 outline-none"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="All">All Services</option>
                <option value="User">User Service</option>
                <option value="Catalog">Catalog Service</option>
                <option value="Search">Search Service</option>
                <option value="Cart">Cart Service</option>
                <option value="Order">Order Service</option>
                <option value="Payment">Payment Service</option>
              </select>
            </div>
            <button className="flex items-center text-blue-600 border rounded-md p-2 hover:bg-blue-50 transition-colors">
              <RefreshCw size={16} className="mr-2" />
              <span className="text-sm">Refresh</span>
            </button>
            <button className="flex items-center text-green-600 border rounded-md p-2 hover:bg-green-50 transition-colors">
              <Download size={16} className="mr-2" />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Service Availability</span>
            <span className={`text-xs px-2 py-1 rounded-full ${dashboardStats.availabilityChange > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardStats.availabilityChange > 0 ? <ArrowUpRight size={12} className="inline mr-1" /> : <ArrowDownRight size={12} className="inline mr-1" />}
              {Math.abs(dashboardStats.availabilityChange)}%
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">{dashboardStats.currentAvailability}%</span>
            <span className="text-sm text-gray-500 ml-2 mb-1">of SLA target</span>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${dashboardStats.currentAvailability >= 99.9 ? 'bg-green-500' : dashboardStats.currentAvailability >= 99 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${dashboardStats.currentAvailability}%`}}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>SLA: 99.9%</span>
            <span>7-day avg: {dashboardStats.avgAvailability7Days}%</span>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Avg Response Time</span>
            <span className={`text-xs px-2 py-1 rounded-full ${dashboardStats.responseTimeChange < 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardStats.responseTimeChange < 0 ? <ArrowDownRight size={12} className="inline mr-1" /> : <ArrowUpRight size={12} className="inline mr-1" />}
              {Math.abs(dashboardStats.responseTimeChange)}ms
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">{dashboardStats.currentResponseTime}</span>
            <span className="text-sm text-gray-500 ml-2 mb-1">ms</span>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${dashboardStats.currentResponseTime <= 150 ? 'bg-green-500' : dashboardStats.currentResponseTime <= 200 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${Math.min(100, (dashboardStats.currentResponseTime / 300) * 100)}%`}}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>Target: 150ms</span>
            <span>7-day avg: {dashboardStats.avgResponseTime7Days}ms</span>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Error Rate</span>
            <span className={`text-xs px-2 py-1 rounded-full ${dashboardStats.errorRateChange < 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {dashboardStats.errorRateChange < 0 ? <ArrowDownRight size={12} className="inline mr-1" /> : <ArrowUpRight size={12} className="inline mr-1" />}
              {Math.abs(dashboardStats.errorRateChange)}%
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">{dashboardStats.currentErrorRate}%</span>
            <span className="text-sm text-gray-500 ml-2 mb-1">of requests</span>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${dashboardStats.currentErrorRate <= 0.05 ? 'bg-green-500' : dashboardStats.currentErrorRate <= 0.1 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{width: `${Math.min(100, (dashboardStats.currentErrorRate / 0.2) * 100)}%`}}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>Target: 0.05%</span>
            <span>7-day avg: {dashboardStats.avgErrorRate7Days}%</span>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">Request Volume</span>
            <span className={`text-xs px-2 py-1 rounded-full ${dashboardStats.requestCountChange > 0 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
              {dashboardStats.requestCountChange > 0 ? <ArrowUpRight size={12} className="inline mr-1" /> : <ArrowDownRight size={12} className="inline mr-1" />}
              {Math.abs(dashboardStats.requestCountChange)}%
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">{formatNumber(dashboardStats.currentRequestCount)}</span>
            <span className="text-sm text-gray-500 ml-2 mb-1">requests/day</span>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-blue-500" style={{width: `${Math.min(100, (dashboardStats.currentRequestCount / 6000000) * 100)}%`}}></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>Capacity: 6M/day</span>
            <span>{formatNumber(dashboardStats.currentRequestCount / 24)}/hour</span>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Service Availability Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={availabilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tickFormatter={(date) => date.split('-')[2] + '/' + date.split('-')[1]} />
                <YAxis domain={[94, 100]} tickCount={7} />
                <Tooltip formatter={(value) => [`${value}%`, 'Availability']} labelFormatter={(label) => `Date: ${label}`} />
                <Legend />
                <Line type="monotone" dataKey="availability" stroke="#4f46e5" strokeWidth={2} dot={false} activeDot={{ r: 6 }} name="Service Availability %" />
                {/* SLA line */}
                <Line type="monotone" dataKey="sla" stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" name="SLA Target (99.9%)" data={availabilityData.map(item => ({...item, sla: 99.9}))} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Response Time Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tickFormatter={(date) => date.split('-')[2] + '/' + date.split('-')[1]} />
                <YAxis domain={[150, 220]} />
                <Tooltip formatter={(value) => [`${value} ms`, 'Response Time']} labelFormatter={(label) => `Date: ${label}`} />
                <Legend />
                <defs>
                  <linearGradient id="colorResponseTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="responseTime" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorResponseTime)" name="Avg Response Time (ms)" />
                {/* Target line */}
                <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" name="Target (150ms)" data={responseTimeData.map(item => ({...item, target: 150}))} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Error Rate Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={errorRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tickFormatter={(date) => date.split('-')[2] + '/' + date.split('-')[1]} />
                <YAxis domain={[0, 0.2]} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Error Rate']} labelFormatter={(label) => `Date: ${label}`} />
                <Legend />
                <defs>
                  <linearGradient id="colorErrorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="errorRate" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorErrorRate)" name="Error Rate %" />
                {/* Target line */}
                <Line type="monotone" dataKey="target" stroke="#0ea5e9" strokeWidth={1} strokeDasharray="3 3" name="Target (0.05%)" data={errorRateData.map(item => ({...item, target: 0.05}))} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Request Volume Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={requestCountData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tickFormatter={(date) => date.split('-')[2] + '/' + date.split('-')[1]} />
                <YAxis domain={[4000000, 5500000]} tickFormatter={(value) => formatNumber(value)} />
                <Tooltip formatter={(value) => [formatNumber(value), 'Requests']} labelFormatter={(label) => `Date: ${label}`} />
                <Legend />
                <Bar dataKey="requestCount" fill="#0ea5e9" name="Daily Requests" />
                {/* Capacity line */}
                <Line type="monotone" dataKey="capacity" stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" name="Capacity (6M)" data={requestCountData.map(item => ({...item, capacity: 6000000}))} dot={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Service Comparison & Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Service Performance Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Error Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {servicePerformanceData.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`mr-2 ${service.availability >= 99.9 ? 'text-green-600' : service.availability >= 99 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {service.availability >= 99.9 ? '●' : service.availability >= 99 ? '●' : '●'}
                        </span>
                        {service.availability}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`mr-2 ${service.responseTime <= 150 ? 'text-green-600' : service.responseTime <= 200 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {service.responseTime <= 150 ? '●' : service.responseTime <= 200 ? '●' : '●'}
                        </span>
                        {service.responseTime} ms
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`mr-2 ${service.errorRate <= 0.05 ? 'text-green-600' : service.errorRate <= 0.1 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {service.errorRate <= 0.05 ? '●' : service.errorRate <= 0.1 ? '●' : '●'}
                        </span>
                        {service.errorRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${service.availability >= 99.9 ? 'bg-green-100 text-green-800' : 
                          service.availability >= 99 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {service.availability >= 99.9 ? 'Healthy' : service.availability >= 99 ? 'Degraded' : 'Unhealthy'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Incidents</h2>
          <div className="space-y-3">
            {incidentData.map((incident) => (
              <div key={incident.id} className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{incident.service}</span>
                  <span className={`text-xs px-2 py-1 rounded-full
                    ${incident.severity === 'Critical' ? 'bg-red-100 text-red-800' : 
                      incident.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                      incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {incident.severity}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  <span>{incident.startTime}</span>
                  <span className="mx-2">→</span>
                  <span>{incident.endTime}</span>
                  <span className="mx-2 text-gray-500">|</span>
                  <span>{incident.duration}</span>
                </div>
                <div className="text-sm text-gray-700 mt-2">
                  {incident.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;
