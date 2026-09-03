"use client";

import { X } from "lucide-react";
import { FormEvent, useState } from "react";

type TransactionFormProps = {
  onClose: () => void;
};

export default function TransactionForm({
  onClose,
}: TransactionFormProps) {
  const [type, setType] = useState<"income" | "expense">("expense");

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Jumlah transaksi harus lebih dari 0.");
      return;
    }

    if (!category) {
      alert("Silakan pilih kategori.");
      return;
    }

    if (!date) {
      alert("Silakan pilih tanggal.");
      return;
    }

    console.log({
      type,
      amount: Number(amount),
      category,
      date,
      description,
    });

    alert("Data transaksi berhasil disiapkan!");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-bubu-border p-6">
          <div>
            <h2 className="text-lg font-bold text-bubu-heading">
              Tambah Transaksi
            </h2>

            <p className="mt-1 text-xs text-bubu-muted">
              Catat pemasukan atau pengeluaran kamu.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-bubu-muted hover:bg-bubu-primary-soft hover:text-bubu-primary"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-bubu-heading">
              Tipe Transaksi
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType("expense")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                  type === "expense"
                    ? "border-bubu-expense bg-bubu-expense-soft text-bubu-expense"
                    : "border-bubu-border text-bubu-muted"
                }`}
              >
                Pengeluaran
              </button>

              <button
                type="button"
                onClick={() => setType("income")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                  type === "income"
                    ? "border-bubu-income bg-bubu-income-soft text-bubu-income"
                    : "border-bubu-border text-bubu-muted"
                }`}
              >
                Pemasukan
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-semibold text-bubu-heading"
            >
              Jumlah
            </label>

            <input
              id="amount"
              type="number"
              min="1"
              placeholder="Contoh: 50000"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full rounded-xl border border-bubu-border px-4 py-3 text-sm outline-none focus:border-bubu-primary"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-bubu-heading"
            >
              Kategori
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-bubu-border bg-white px-4 py-3 text-sm outline-none focus:border-bubu-primary"
            >
              <option value="">Pilih kategori</option>
              <option value="food">Makanan</option>
              <option value="transport">Transportasi</option>
              <option value="entertainment">Hiburan</option>
              <option value="shopping">Belanja</option>
              <option value="salary">Gaji</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-semibold text-bubu-heading"
            >
              Tanggal
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full rounded-xl border border-bubu-border px-4 py-3 text-sm outline-none focus:border-bubu-primary"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-bubu-heading"
            >
              Deskripsi
              <span className="ml-1 font-normal text-bubu-muted">
                (opsional)
              </span>
            </label>

            <textarea
              id="description"
              rows={3}
              placeholder="Contoh: Beli boba setelah pulang kerja"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full resize-none rounded-xl border border-bubu-border px-4 py-3 text-sm outline-none focus:border-bubu-primary"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-bubu-border px-4 py-3 text-sm font-semibold text-bubu-muted hover:bg-bubu-primary-soft"
            >
              Batal
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-bubu-primary px-4 py-3 text-sm font-semibold text-white hover:bg-bubu-primary-hover"
            >
              Simpan Transaksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}