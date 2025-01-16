"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    date: "Ene 01",
    income: 1200,
  },
  {
    date: "Ene 02",
    income: 900,
  },
  {
    date: "Ene 03",
    income: 1600,
  },
  {
    date: "Ene 04",
    income: 1800,
  },
  {
    date: "Ene 05",
    income: 2100,
  },
  {
    date: "Ene 06",
    income: 1900,
  },
  {
    date: "Ene 07",
    income: 2300,
  },
];

export function DailyIncomeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingresos Diarios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `S/${value}`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
