import { Utensils, Car, Gamepad2, ShoppingBag } from "lucide-react";

const categories = [
  {
    name: "Makanan",
    amount: 300000,
    percentage: 40,
    icon: Utensils,
    iconClass: "bg-bubu-peach-soft text-bubu-peach",
  },
  {
    name: "Transportasi",
    amount: 200000,
    percentage: 27,
    icon: Car,
    iconClass: "bg-bubu-purple-soft text-bubu-purple",
  },
  {
    name: "Hiburan",
    amount: 150000,
    percentage: 20,
    icon: Gamepad2,
    iconClass: "bg-bubu-yellow-soft text-bubu-yellow",
  },
  {
    name: "Belanja",
    amount: 100000,
    percentage: 13,
    icon: ShoppingBag,
    iconClass: "bg-bubu-primary-soft text-bubu-primary",
  },
];

export default function CategorySpending() {
  return (
    <section className="rounded-3xl border border-bubu-border bg-bubu-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="font-bold text-bubu-heading">
          Pengeluaran Berdasarkan Kategori
        </h2>

        <p className="mt-1 text-xs text-bubu-muted">
          Distribusi pengeluaran bulan ini
        </p>
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div key={category.name}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${category.iconClass}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-bubu-heading">
                      {category.name}
                    </p>

                    <p className="text-xs text-bubu-muted">
                      Rp {category.amount.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-bold text-bubu-heading">
                  {category.percentage}%
                </p>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-bubu-primary-soft">
                <div
                  className="h-full rounded-full bg-bubu-primary"
                  style={{
                    width: `${category.percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}