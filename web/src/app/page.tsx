export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-6 text-7xl">🐰</div>

          <h1 className="text-4xl font-bold text-pink-900">
            Dompet Bubu
          </h1>

          <p className="mt-3 text-lg text-pink-700">
            Teman kecil untuk mengatur keuanganmu 💰
          </p>

          <button className="mt-8 rounded-xl bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-600">
            Mulai Kelola Keuangan
          </button>
        </div>
      </div>
    </main>
  );
}