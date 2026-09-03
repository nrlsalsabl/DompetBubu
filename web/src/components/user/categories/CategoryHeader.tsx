"use client";

import { Plus } from "lucide-react";

export default function CategoryHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-bubu-muted">Finance</p>

        <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
          Categories
        </h1>

        <p className="mt-1 text-sm text-bubu-muted">
          Kelola kategori pemasukan dan pengeluaran kamu.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-bubu-primary px-5 py-3 text-sm font-semibold text-white hover:bg-bubu-primary-hover"
      >
        <Plus size={18} />
        Tambah Kategori
      </button>
    </div>
  );
}