"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Lightbulb,
  PiggyBank,
  Wallet,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const periods = ["Minggu", "Bulan", "Tahun"] as const;
type Period = (typeof periods)[number];

const periodData: Record<
  Period,
  {
    label: string;
    income: string;
    expense: string;
    savings: string;
    chart: { label: string; income: number; expense: number }[];
  }
> = {
  Minggu: {
    label: "17 – 23 Agustus 2026",
    income: "Rp 2.000.000",
    expense: "Rp 264.000",
    savings: "87%",
    chart: [
      { label: "Sen", income: 0, expense: 45000 },
      { label: "Sel", income: 0, expense: 32000 },
      { label: "Rab", income: 2000000, expense: 54000 },
      { label: "Kam", income: 0, expense: 35000 },
      { label: "Jum", income: 0, expense: 28000 },
      { label: "Sab", income: 0, expense: 42000 },
      { label: "Min", income: 0, expense: 28000 },
    ],
  },
  Bulan: {
    label: "Agustus 2026",
    income: "Rp 2.000.000",
    expense: "Rp 750.000",
    savings: "63%",
    chart: [
      { label: "Mar", income: 1800000, expense: 900000 },
      { label: "Apr", income: 2000000, expense: 1100000 },
      { label: "Mei", income: 2000000, expense: 850000 },
      { label: "Jun", income: 2200000, expense: 1200000 },
      { label: "Jul", income: 2000000, expense: 950000 },
      { label: "Agu", income: 2000000, expense: 750000 },
    ],
  },
  Tahun: {
    label: "Januari – Agustus 2026",
    income: "Rp 16.000.000",
    expense: "Rp 7.250.000",
    savings: "55%",
    chart: [
      { label: "Jan", income: 2000000, expense: 900000 },
      { label: "Feb", income: 2000000, expense: 850000 },
      { label: "Mar", income: 1800000, expense: 900000 },
      { label: "Apr", income: 2000000, expense: 1100000 },
      { label: "Mei", income: 2000000, expense: 850000 },
      { label: "Jun", income: 2200000, expense: 1200000 },
      { label: "Jul", income: 2000000, expense: 700000 },
      { label: "Agu", income: 2000000, expense: 750000 },
    ],
  },
};

const categories = [
  { name: "Makanan", amount: 300000, percentage: 40, color: "#f59bb5" },
  { name: "Transportasi", amount: 200000, percentage: 27, color: "#a99adf" },
  { name: "Hiburan", amount: 150000, percentage: 20, color: "#f8d878" },
  { name: "Belanja", amount: 100000, percentage: 13, color: "#ffc9a5" },
];

const formatRupiah = (value: number) =>
  `Rp ${value.toLocaleString("id-ID")}`;

export default function StatisticsPage() {
  const [period, setPeriod] = useState<Period>("Bulan");
  const selectedData = periodData[period];

  const summaries = [
    {
      title: "Total pemasukan",
      amount: selectedData.income,
      note: "Dari semua sumber",
      icon: ArrowUpRight,
      iconClass: "bg-bubu-income-soft text-bubu-income",
      change: "+12,8%",
      changeClass: "text-bubu-income",
    },
    {
      title: "Total pengeluaran",
      amount: selectedData.expense,
      note: "Dari semua kategori",
      icon: ArrowDownRight,
      iconClass: "bg-bubu-expense-soft text-bubu-expense",
      change: "-8,2%",
      changeClass: "text-bubu-income",
    },
    {
      title: "Sisa saldo",
      amount: formatRupiah(
        Number(selectedData.income.replace(/\D/g, "")) -
          Number(selectedData.expense.replace(/\D/g, "")),
      ),
      note: "Pemasukan dikurangi pengeluaran",
      icon: Wallet,
      iconClass: "bg-bubu-purple-soft text-bubu-purple",
      change: "Tersimpan",
      changeClass: "text-bubu-purple",
    },
    {
      title: "Rasio menabung",
      amount: selectedData.savings,
      note: "Dari total pemasukan",
      icon: PiggyBank,
      iconClass: "bg-bubu-yellow-soft text-amber-600",
      change: "Sehat",
      changeClass: "text-bubu-income",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-bubu-muted">Lihat ke mana uangmu pergi</p>
          <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
            Statistik Keuangan
          </h1>
        </div>

        <div className="flex items-center gap-2 self-start rounded-2xl border border-bubu-border bg-bubu-card p-1 sm:self-auto">
          {periods.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={period === item}
              onClick={() => setPeriod(item)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                period === item
                  ? "bg-bubu-primary text-white shadow-sm"
                  : "text-bubu-muted hover:bg-bubu-primary-soft hover:text-bubu-heading"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm text-bubu-muted">
        <CalendarDays size={17} className="text-bubu-primary" />
        <span>{selectedData.label}</span>
        <span className="rounded-full bg-bubu-primary-soft px-2.5 py-1 text-xs font-medium text-bubu-primary-hover">
          Data contoh
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaries.map((summary) => {
          const Icon = summary.icon;

          return (
            <section
              key={summary.title}
              className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-bubu-muted">{summary.title}</p>
                  <p className="mt-3 text-xl font-bold text-bubu-heading">
                    {summary.amount}
                  </p>
                </div>
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${summary.iconClass}`}
                >
                  <Icon size={21} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <p className="text-xs text-bubu-muted">{summary.note}</p>
                <span className={`text-xs font-semibold ${summary.changeClass}`}>
                  {summary.change}
                </span>
              </div>
            </section>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-bold text-bubu-heading">
                Pemasukan & Pengeluaran
              </h2>
              <p className="mt-1 text-xs text-bubu-muted">
                Bandingkan arus uangmu pada periode ini
              </p>
            </div>
            <div className="flex gap-4 text-xs text-bubu-muted">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-bubu-income" />
                Pemasukan
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-bubu-expense" />
                Pengeluaran
              </span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={selectedData.chart}
                margin={{ top: 8, right: 4, left: -16, bottom: 0 }}
                barGap={6}
              >
                <CartesianGrid
                  stroke="#f0e7eb"
                  strokeDasharray="4 4"
                  vertical={false}
                />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#91878d", fontSize: 12 }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#91878d", fontSize: 11 }}
                  tickFormatter={(value: number) =>
                    value >= 1000000
                      ? `${value / 1000000}jt`
                      : `${value / 1000}rb`
                  }
                />
                <Tooltip
                  cursor={{ fill: "#fffafb" }}
                  formatter={(value, name) => [
                    formatRupiah(Number(value)),
                    name === "income" ? "Pemasukan" : "Pengeluaran",
                  ]}
                  contentStyle={{
                    border: "1px solid #f0e7eb",
                    borderRadius: 14,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="income"
                  name="income"
                  fill="#65b891"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={28}
                />
                <Bar
                  dataKey="expense"
                  name="expense"
                  fill="#ed7777"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm">
          <div>
            <h2 className="font-bold text-bubu-heading">
              Pengeluaran per kategori
            </h2>
            <p className="mt-1 text-xs text-bubu-muted">
              Rincian pengeluaran bulan ini
            </p>
          </div>

          <div className="relative mx-auto mt-3 h-48 w-full max-w-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  dataKey="amount"
                  nameKey="name"
                  innerRadius={58}
                  outerRadius={82}
                  paddingAngle={4}
                  stroke="none"
                >
                  {categories.map((category) => (
                    <Cell key={category.name} fill={category.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatRupiah(Number(value))}
                  contentStyle={{
                    border: "1px solid #f0e7eb",
                    borderRadius: 14,
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-bubu-muted">Total</span>
              <span className="mt-1 text-lg font-bold text-bubu-heading">
                Rp 750rb
              </span>
            </div>
          </div>

          <div className="mt-2 space-y-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="truncate text-bubu-muted">
                    {category.name}
                  </span>
                </div>
                <span className="shrink-0 font-semibold text-bubu-heading">
                  {category.percentage}%
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-4 rounded-3xl border border-bubu-primary/20 bg-bubu-primary-soft p-5 sm:flex-row sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-bubu-primary">
          <Lightbulb size={21} />
        </div>
        <div>
          <h2 className="font-bold text-bubu-heading">Insight bulan ini</h2>
          <p className="mt-1 text-sm leading-6 text-bubu-muted">
            Pengeluaran terbesar ada di kategori{" "}
            <span className="font-semibold text-bubu-heading">Makanan</span>.
            Coba sisihkan anggaran makan mingguan supaya tabunganmu tetap
            bertambah.
          </p>
        </div>
      </section>
    </div>
  );
}
