"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Mar", income: 1800000, expense: 900000 },
  { month: "Apr", income: 2000000, expense: 1100000 },
  { month: "Mei", income: 2000000, expense: 850000 },
  { month: "Jun", income: 2200000, expense: 1200000 },
  { month: "Jul", income: 2000000, expense: 950000 },
  { month: "Agu", income: 2000000, expense: 750000 },
];

export default function IncomeExpenseChart() {
  return (
    <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="font-bold text-bubu-heading">
          Pemasukan & Pengeluaran
        </h2>

        <p className="mt-1 text-xs text-bubu-muted">
          Perbandingan keuangan beberapa bulan terakhir
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `${value / 1000000}jt`
              }
            />

            <Tooltip
              formatter={(value) =>
                `Rp ${Number(value).toLocaleString("id-ID")}`
              }
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="income"
              name="Pemasukan"
              stroke="#65b891"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              name="Pengeluaran"
              stroke="#ed7777"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}