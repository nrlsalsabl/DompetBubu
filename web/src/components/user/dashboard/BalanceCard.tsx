import { Wallet } from "lucide-react";

export default function BalanceCard() {
  return (
    <section className="rounded-3xl bg-bubu-primary p-6 text-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium opacity-90">
            Sisa Saldo
          </p>

          <p className="mt-2 text-sm opacity-80">
            Agustus 2026
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
          <Wallet size={22} />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-3xl font-bold tracking-tight">
          Rp 1.250.000
        </p>

        <p className="mt-2 text-sm opacity-80">
          Keep your spending on track 🐰
        </p>
      </div>
    </section>
  );
}