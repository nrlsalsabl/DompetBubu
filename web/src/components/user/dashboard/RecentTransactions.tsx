import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Jajan Boba",
    category: "Makanan",
    amount: "- Rp 25.000",
    type: "expense",
    date: "21 Aug 2026",
  },
  {
    id: 2,
    name: "Gaji Bulanan",
    category: "Gaji",
    amount: "+ Rp 2.000.000",
    type: "income",
    date: "20 Aug 2026",
  },
  {
    id: 3,
    name: "Naik Grab",
    category: "Transportasi",
    amount: "- Rp 35.000",
    type: "expense",
    date: "19 Aug 2026",
  },
  {
    id: 4,
    name: "Netflix",
    category: "Hiburan",
    amount: "- Rp 54.000",
    type: "expense",
    date: "18 Aug 2026",
  },
];

export default function RecentTransactions() {
  return (
    <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-bubu-heading">
            Transaksi Terbaru
          </h2>

          <p className="mt-1 text-xs text-bubu-muted">
            Aktivitas keuangan terbaru kamu
          </p>
        </div>

        <a
          href="/transactions"
          className="text-sm font-medium text-bubu-primary hover:underline"
        >
          Lihat semua
        </a>
      </div>

      <div className="divide-y divide-bubu-border">
        {transactions.map((transaction) => {
          const isIncome = transaction.type === "income";

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                    isIncome
                      ? "bg-bubu-income-soft text-bubu-income"
                      : "bg-bubu-expense-soft text-bubu-expense"
                  }`}
                >
                  {isIncome ? (
                    <ArrowUpRight size={19} />
                  ) : (
                    <ArrowDownLeft size={19} />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-bubu-heading">
                    {transaction.name}
                  </p>

                  <p className="mt-1 text-xs text-bubu-muted">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
              </div>

              <p
                className={`shrink-0 text-sm font-bold ${
                  isIncome
                    ? "text-bubu-income"
                    : "text-bubu-expense"
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}