"use client";

import React from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ModernAreaChart: React.FC<{
  data: Array<{
    name: string;
    value: number;
  }>;
  primaryColor?: string;
  secondaryColor?: string;
}> = ({ data, primaryColor = "#e11d48", secondaryColor = "#fda4af" }) => {
  return (
    <div className="w-full h-[400px] relative">
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={secondaryColor}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={secondaryColor}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            {/* Subtle Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              strokeOpacity={0.5}
            />

            {/* Axes with Enhanced Styling */}
            <XAxis
              dataKey="name"
              axisLine={{ stroke: primaryColor, strokeWidth: 2 }}
              tickLine={{ stroke: primaryColor }}
              tick={{ fill: primaryColor, fontWeight: 600 }}
            />
            <YAxis
              axisLine={{ stroke: primaryColor, strokeWidth: 2 }}
              tickLine={{ stroke: primaryColor }}
              tick={{ fill: primaryColor, fontWeight: 600 }}
            />

            {/* Custom Tooltip */}
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white shadow-xl rounded-lg p-4 border border-rose-200">
                      <p className="font-bold text-rose-800">{label}</p>
                      <p className="text-rose-600">Value: {payload[0].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Area with Sophisticated Gradient */}
            <Area
              type="monotone"
              dataKey="value"
              stroke={primaryColor}
              fillOpacity={0.7}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
