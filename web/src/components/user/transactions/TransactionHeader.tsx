"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import TransactionForm from "./TransactionForm";

export default function TransactionHeader() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-bubu-muted">Finance</p>

          <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
            Transactions
          </h1>

          <p className="mt-1 text-sm text-bubu-muted">
            Kelola semua pemasukan dan pengeluaran kamu.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-bubu-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-bubu-primary-hover"
        >
          <Plus size={18} />
          Tambah Transaksi
        </button>
      </div>

      {isFormOpen && (
        <TransactionForm
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}