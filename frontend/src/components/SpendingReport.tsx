import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import svgPaths from "../imports/svg-eoxo8t85xb";

const data = [
  { month: 'Jan', income: 35, expense: 30 },
  { month: 'Feb', income: 40, expense: 35 },
  { month: 'March', income: 45, expense: 40 },
  { month: 'Apr', income: 50, expense: 45 },
  { month: 'May', income: 55, expense: 48 },
  { month: 'Jun', income: 60, expense: 50 },
  { month: 'Jul', income: 65, expense: 52 },
  { month: 'Aug', income: 60, expense: 48 },
  { month: 'Sep', income: 58, expense: 45 },
  { month: 'Oct', income: 55, expense: 43 },
  { month: 'Nov', income: 52, expense: 42 },
  { month: 'Des', income: 50, expense: 40 },
];

export function SpendingReport() {
  const [activeTab, setActiveTab] = useState('12 Months');
  const tabs = ['12 Months', '3 months', '30 days', '7 days', '24 Hours'];

  return (
    <div className="card shadow">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3">
          <h4 className="mb-0">Spending Report</h4>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary btn-sm">Add Transaction</button>
            <button className="btn btn-primary btn-sm">View Report</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-flex gap-2 gap-md-3 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn btn-link text-decoration-none p-1 ${
                activeTab === tab ? 'text-dark fw-semibold' : 'text-muted'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="0" stroke="#3C3C3B" strokeOpacity={0.1} />
              <XAxis 
                dataKey="month" 
                stroke="#3c3c3b" 
                style={{ fontSize: '12px' }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis stroke="#3c3c3b" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #ededed',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 15px rgba(124, 141, 181, 0.12)'
                }}
                labelStyle={{ color: '#a7a7a7', fontSize: '12px' }}
              />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#0047D1" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: 'white', stroke: '#ededed' }}
              />
              <Line 
                type="monotone" 
                dataKey="expense" 
                stroke="#FEB700" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}