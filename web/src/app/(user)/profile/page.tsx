import {
  Bell,
  CalendarDays,
  Camera,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";

const fieldClassName =
  "mt-2 w-full rounded-xl border border-bubu-border bg-white px-4 py-3 text-sm text-bubu-heading outline-none transition placeholder:text-bubu-muted focus:border-bubu-primary focus:ring-2 focus:ring-bubu-primary/15";

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <div>
        <p className="text-sm text-bubu-muted">Akun dan preferensi</p>
        <h1 className="mt-1 text-2xl font-bold text-bubu-heading">
          Profil Saya
        </h1>
        <p className="mt-1 text-sm text-bubu-muted">
          Kelola informasi personal dan pengaturan akunmu.
        </p>
      </div>

      <section className="overflow-hidden rounded-3xl border border-bubu-border bg-bubu-card shadow-sm">
        <div className="h-32 bg-gradient-to-r from-bubu-primary-soft via-bubu-purple-soft to-bubu-peach-soft" />
        <div className="px-5 pb-6 sm:px-8">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border-4 border-white bg-bubu-primary text-3xl font-bold text-white shadow-sm">
                B
                <button
                  type="button"
                  aria-label="Ubah foto profil"
                  className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-white bg-white text-bubu-heading shadow-sm"
                >
                  <Camera size={15} />
                </button>
              </div>
              <div className="pb-1">
                <h2 className="text-xl font-bold text-bubu-heading">Bubu</h2>
                <p className="mt-1 text-sm text-bubu-muted">
                  Personal Account
                </p>
              </div>
            </div>
            <span className="mb-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-bubu-income-soft px-3 py-1.5 text-xs font-semibold text-bubu-income">
              <ShieldCheck size={14} />
              Akun aktif
            </span>
          </div>

          <div className="mt-6 grid gap-3 border-t border-bubu-border pt-5 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl bg-background p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-primary-soft text-bubu-primary">
                <WalletCards size={19} />
              </div>
              <div>
                <p className="text-xs text-bubu-muted">Jenis akun</p>
                <p className="mt-1 text-sm font-semibold text-bubu-heading">
                  Personal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-background p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-purple-soft text-bubu-purple">
                <CalendarDays size={19} />
              </div>
              <div>
                <p className="text-xs text-bubu-muted">Bergabung sejak</p>
                <p className="mt-1 text-sm font-semibold text-bubu-heading">
                  Agustus 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-background p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-peach-soft text-bubu-peach">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-xs text-bubu-muted">Lokasi</p>
                <p className="mt-1 text-sm font-semibold text-bubu-heading">
                  Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid items-start gap-6 lg:grid-cols-3">
        <section className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm sm:p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-bold text-bubu-heading">
                Informasi Personal
              </h2>
              <p className="mt-1 text-xs text-bubu-muted">
                Pastikan informasi akunmu selalu terbaru.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-bubu-border px-3 py-2 text-sm font-medium text-bubu-heading transition hover:bg-bubu-primary-soft"
            >
              <Pencil size={15} />
              Edit
            </button>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-bubu-heading">
              Nama lengkap
              <input
                type="text"
                defaultValue="Bubu"
                className={fieldClassName}
                placeholder="Masukkan nama lengkap"
              />
            </label>
            <label className="text-sm font-medium text-bubu-heading">
              Nama panggilan
              <input
                type="text"
                defaultValue="Bubu"
                className={fieldClassName}
                placeholder="Masukkan nama panggilan"
              />
            </label>
            <label className="text-sm font-medium text-bubu-heading">
              Alamat email
              <span className="relative block">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-bubu-muted"
                />
                <input
                  type="email"
                  defaultValue="bubu@email.com"
                  className={`${fieldClassName} pl-11`}
                  placeholder="nama@email.com"
                />
              </span>
            </label>
            <label className="text-sm font-medium text-bubu-heading">
              Nomor telepon
              <input
                type="tel"
                defaultValue="+62 812 3456 7890"
                className={fieldClassName}
                placeholder="+62"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-bubu-border pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-bubu-muted transition hover:bg-background"
            >
              Batal
            </button>
            <button
              type="button"
              className="rounded-xl bg-bubu-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-bubu-primary-hover"
            >
              Simpan Perubahan
            </button>
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm">
            <h2 className="font-bold text-bubu-heading">Preferensi</h2>
            <p className="mt-1 text-xs text-bubu-muted">
              Atur pengalaman Dompet Bubu.
            </p>
            <div className="mt-5 divide-y divide-bubu-border">
              <button
                type="button"
                className="flex w-full items-center gap-3 py-4 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-purple-soft text-bubu-purple">
                  <Globe2 size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-bubu-heading">
                    Bahasa
                  </p>
                  <p className="mt-1 text-xs text-bubu-muted">Bahasa Indonesia</p>
                </div>
                <ChevronRight size={17} className="text-bubu-muted" />
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-3 py-4 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-yellow-soft text-amber-600">
                  <Bell size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-bubu-heading">
                    Notifikasi
                  </p>
                  <p className="mt-1 text-xs text-bubu-muted">
                    Pengingat transaksi aktif
                  </p>
                </div>
                <ChevronRight size={17} className="text-bubu-muted" />
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-bubu-border bg-bubu-card p-5 shadow-sm">
            <h2 className="font-bold text-bubu-heading">Keamanan</h2>
            <button
              type="button"
              className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-bubu-border p-4 text-left transition hover:border-bubu-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bubu-income-soft text-bubu-income">
                <LockKeyhole size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-bubu-heading">
                  Kata sandi
                </p>
                <p className="mt-1 text-xs text-bubu-muted">
                  Belum ada perubahan kata sandi
                </p>
              </div>
              <ChevronRight size={17} className="text-bubu-muted" />
            </button>
            <div className="mt-4 flex items-center gap-2 text-xs leading-5 text-bubu-muted">
              <UserRound size={15} className="shrink-0 text-bubu-primary" />
              Informasi akun hanya dapat dilihat oleh kamu.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
