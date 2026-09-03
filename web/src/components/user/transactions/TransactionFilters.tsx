import { Search } from "lucide-react";

export default function TransactionFilters() {
  return (
    <section className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-bubu-muted"
          />

          <input
            type="text"
            placeholder="Cari transaksi..."
            className="w-full rounded-xl border border-bubu-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-bubu-primary"
          />
        </div>

        <select
          className="rounded-xl border border-bubu-border bg-white px-4 py-3 text-sm text-bubu-heading outline-none focus:border-bubu-primary"
          defaultValue="all"
        >
          <option value="all">Semua Tipe</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>

        <select
          className="rounded-xl border border-bubu-border bg-white px-4 py-3 text-sm text-bubu-heading outline-none focus:border-bubu-primary"
          defaultValue="all"
        >
          <option value="all">Semua Kategori</option>
          <option value="food">Makanan</option>
          <option value="transport">Transportasi</option>
          <option value="entertainment">Hiburan</option>
          <option value="shopping">Belanja</option>
          <option value="salary">Gaji</option>
        </select>
      </div>
    </section>
  );
}