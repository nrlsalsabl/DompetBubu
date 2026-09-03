import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const summaries = [
  {
    title: "Pemasukan",
    amount: "Rp 2.000.000",
    description: "Bulan ini",
    icon: ArrowUpRight,
    iconClass: "bg-bubu-income-soft text-bubu-income",
  },
  {
    title: "Pengeluaran",
    amount: "Rp 750.000",
    description: "Bulan ini",
    icon: ArrowDownLeft,
    iconClass: "bg-bubu-expense-soft text-bubu-expense",
  },
];

export default function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {summaries.map((summary) => {
        const Icon = summary.icon;

        return (
          <div
            key={summary.title}
            className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-bubu-muted">
                  {summary.title}
                </p>

                <p className="mt-2 text-xl font-bold text-bubu-heading">
                  {summary.amount}
                </p>

                <p className="mt-1 text-xs text-bubu-muted">
                  {summary.description}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${summary.iconClass}`}
              >
                <Icon size={21} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}