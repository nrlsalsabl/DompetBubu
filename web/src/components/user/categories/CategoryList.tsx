import {
  Car,
  Gamepad2,
  ShoppingBag,
  Tags,
  Utensils,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Makanan",
    type: "expense",
    icon: Utensils,
    iconClass: "bg-bubu-peach-soft text-bubu-peach",
  },
  {
    id: 2,
    name: "Transportasi",
    type: "expense",
    icon: Car,
    iconClass: "bg-bubu-purple-soft text-bubu-purple",
  },
  {
    id: 3,
    name: "Hiburan",
    type: "expense",
    icon: Gamepad2,
    iconClass: "bg-bubu-yellow-soft text-bubu-yellow",
  },
  {
    id: 4,
    name: "Belanja",
    type: "expense",
    icon: ShoppingBag,
    iconClass: "bg-bubu-primary-soft text-bubu-primary",
  },
  {
    id: 5,
    name: "Gaji",
    type: "income",
    icon: Tags,
    iconClass: "bg-bubu-income-soft text-bubu-income",
  },
];

export default function CategoryList() {
  return (
    <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="font-bold text-bubu-heading">
          Daftar Kategori
        </h2>

        <p className="mt-1 text-xs text-bubu-muted">
          Kategori yang tersedia untuk transaksi kamu.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="flex items-center gap-4 rounded-2xl border border-bubu-border p-4 transition hover:border-bubu-primary"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${category.iconClass}`}
              >
                <Icon size={21} />
              </div>

              <div>
                <p className="font-semibold text-bubu-heading">
                  {category.name}
                </p>

                <p className="mt-1 text-xs text-bubu-muted">
                  {category.type === "income"
                    ? "Pemasukan"
                    : "Pengeluaran"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}