import {
  ArrowUpRight,
  CalendarDays,
  CarFront,
  ChevronRight,
  GraduationCap,
  Heart,
  House,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const goals = [
  {
    title: "Liburan ke Bali",
    category: "Travel",
    saved: 3500000,
    target: 6000000,
    deadline: "15 Desember 2026",
    icon: CarFront,
    iconClass: "bg-bubu-peach-soft text-bubu-peach",
    accent: "bg-bubu-primary",
    status: "On track",
  },
  {
    title: "Dana darurat",
    category: "Keamanan finansial",
    saved: 4500000,
    target: 10000000,
    deadline: "31 Maret 2027",
    icon: Heart,
    iconClass: "bg-bubu-expense-soft text-bubu-expense",
    accent: "bg-bubu-purple",
    status: "On track",
  },
  {
    title: "Laptop baru",
    category: "Perangkat",
    saved: 2800000,
    target: 8000000,
    deadline: "20 Januari 2027",
    icon: GraduationCap,
    iconClass: "bg-bubu-yellow-soft text-amber-600",
    accent: "bg-bubu-yellow",
    status: "Perlu konsisten",
  },
  {
    title: "DP rumah",
    category: "Rumah",
    saved: 12000000,
    target: 50000000,
    deadline: "1 Januari 2028",
    icon: House,
    iconClass: "bg-bubu-income-soft text-bubu-income",
    accent: "bg-bubu-income",
    status: "On track",
  },
];

const formatRupiah = (amount: number) =>
  `Rp ${amount.toLocaleString("id-ID")}`;

export default function GoalsPage() {
  const totalSaved = goals.reduce((total, goal) => total + goal.saved, 0);
  const totalTarget = goals.reduce((total, goal) => total + goal.target, 0);
  const overallProgress = Math.round((totalSaved / totalTarget) * 100);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-bubu-muted">Rencanakan masa depanmu</p>
          <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
            Target Tabungan
          </h1>
          <p className="mt-1 text-sm text-bubu-muted">
            Sedikit demi sedikit, semua impian bisa tercapai.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-bubu-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-bubu-primary-hover"
        >
          <Plus size={18} />
          Buat Target
        </button>
      </div>

      <section className="relative overflow-hidden rounded-3xl bg-bubu-primary p-6 text-white shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-28 right-32 h-56 w-56 rounded-full bg-white/10" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/90">
              <Sparkles size={17} />
              Perjalanan impianmu
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight">
              {formatRupiah(totalSaved)}
            </p>
            <p className="mt-1 text-sm text-white/80">
              terkumpul dari {formatRupiah(totalTarget)} target tabungan
            </p>
            <div className="mt-6 h-3 max-w-xl overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <div className="mt-2 flex max-w-xl justify-between text-xs text-white/85">
              <span>{overallProgress}% tercapai</span>
              <span>{formatRupiah(totalTarget - totalSaved)} lagi</span>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 sm:min-w-52">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
              <TrendingUp size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold">{goals.length}</p>
              <p className="text-xs text-white/80">target aktif</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-bold text-bubu-heading">Target kamu</h2>
          <p className="mt-1 text-xs text-bubu-muted">
            Pantau progres tabunganmu satu per satu.
          </p>
        </div>
        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-xl border border-bubu-border bg-bubu-card px-4 py-2.5 text-sm font-medium text-bubu-heading"
        >
          Semua target
          <ChevronRight size={16} className="rotate-90 text-bubu-muted" />
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const progress = Math.round((goal.saved / goal.target) * 100);

          return (
            <section
              key={goal.title}
              className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${goal.iconClass}`}
                  >
                    <Icon size={21} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-bubu-heading">
                      {goal.title}
                    </h3>
                    <p className="mt-1 text-xs text-bubu-muted">
                      {goal.category}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-bubu-income-soft px-2.5 py-1 text-xs font-semibold text-bubu-income">
                  {goal.status}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs text-bubu-muted">Sudah terkumpul</p>
                  <p className="mt-1 text-lg font-bold text-bubu-heading">
                    {formatRupiah(goal.saved)}
                  </p>
                </div>
                <p className="text-right text-xs text-bubu-muted">
                  dari {formatRupiah(goal.target)}
                </p>
              </div>

              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-bubu-primary-soft">
                <div
                  className={`h-full rounded-full ${goal.accent}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-bubu-heading">
                  {progress}% tercapai
                </span>
                <span className="flex items-center gap-1.5 text-bubu-muted">
                  <CalendarDays size={13} />
                  {goal.deadline}
                </span>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-bubu-primary-hover transition hover:gap-2"
              >
                Lihat detail
                <ArrowUpRight size={15} />
              </button>
            </section>
          );
        })}
      </div>

      <section className="flex items-center gap-4 rounded-3xl border border-bubu-border bg-bubu-card p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bubu-yellow-soft text-amber-600">
          <Sparkles size={20} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-bubu-heading">
            Tips kecil untuk Bubu
          </h2>
          <p className="mt-1 text-sm leading-6 text-bubu-muted">
            Sisihkan tabungan di awal bulan agar target impianmu makin cepat
            tercapai.
          </p>
        </div>
      </section>
    </div>
  );
}
