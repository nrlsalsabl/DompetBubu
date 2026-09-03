import {
  ArrowDownLeft,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Gaji Bulanan",
    category: "Gaji",
    type: "income",
    amount: 2000000,
    date: "20 Aug 2026",
  },
  {
    id: 2,
    name: "Jajan Boba",
    category: "Makanan",
    type: "expense",
    amount: 25000,
    date: "21 Aug 2026",
  },
  {
    id: 3,
    name: "Naik Grab",
    category: "Transportasi",
    type: "expense",
    amount: 35000,
    date: "19 Aug 2026",
  },
  {
    id: 4,
    name: "Netflix",
    category: "Hiburan",
    type: "expense",
    amount: 54000,
    date: "18 Aug 2026",
  },
  {
    id: 5,
    name: "Belanja Shopee",
    category: "Belanja",
    type: "expense",
    amount: 125000,
    date: "17 Aug 2026",
  },
];

export default function TransactionTable() {
  return (
    <section className="overflow-hidden rounded-3xl border border-bubu-border bg-bubu-card shadow-sm">
      <div className="border-b border-bubu-border p-6">
        <h2 className="font-bold text-bubu-heading">
          Semua Transaksi
        </h2>

        <p className="mt-1 text-xs text-bubu-muted">
          Riwayat transaksi keuangan kamu
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-190 text-left">
          <thead className="border-b border-bubu-border bg-[#fffafb]">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-bubu-muted">
                Transaksi
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-bubu-muted">
                Kategori
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-bubu-muted">
                Tipe
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-bubu-muted">
                Tanggal
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold text-bubu-muted">
                Jumlah
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold text-bubu-muted">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-bubu-border">
            {transactions.map((transaction) => {
              const isIncome = transaction.type === "income";

              return (
                <tr
                  key={transaction.id}
                  className="transition hover:bg-[#fffafb]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                          isIncome
                            ? "bg-bubu-income-soft text-bubu-income"
                            : "bg-bubu-expense-soft text-bubu-expense"
                        }`}
                      >
                        {isIncome ? (
                          <ArrowUpRight size={18} />
                        ) : (
                          <ArrowDownLeft size={18} />
                        )}
                      </div>

                      <p className="text-sm font-semibold text-bubu-heading">
                        {transaction.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-bubu-muted">
                    {transaction.category}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isIncome
                          ? "bg-bubu-income-soft text-bubu-income"
                          : "bg-bubu-expense-soft text-bubu-expense"
                      }`}
                    >
                      {isIncome ? "Pemasukan" : "Pengeluaran"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-bubu-muted">
                    {transaction.date}
                  </td>

                  <td
                    className={`px-6 py-4 text-right text-sm font-bold ${
                      isIncome
                        ? "text-bubu-income"
                        : "text-bubu-expense"
                    }`}
                  >
                    {isIncome ? "+" : "-"} Rp{" "}
                    {transaction.amount.toLocaleString("id-ID")}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-bubu-muted hover:bg-bubu-primary-soft hover:text-bubu-primary"
                      aria-label={`Aksi untuk ${transaction.name}`}
                    >
                      <MoreHorizontal size={19} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}