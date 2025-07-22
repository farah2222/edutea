export default function Panduan() {
  return (
    <main className="min-h-screen bg-white p-6 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">📚 Panduan Reward OSS TEA</h1>
        
        <p className="mb-4">
          Ingin dapat TEA secara gratis? Kamu bisa ikutan program OSS (Open Source Submission) dari TEA Protocol!
        </p>

        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">🔧 Langkah-langkah:</h2>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Buat proyek open-source di GitHub (harus public)</li>
          <li>Pastikan proyek kamu asli, bukan hasil copy paste</li>
          <li>Tulis README dan beri nama jelas</li>
          <li>Masuk ke situs reward TEA (contoh: <a href="https://oss.fish" target="_blank" className="text-blue-600 underline">oss.fish</a>)</li>
          <li>Koneksikan wallet dan submit link GitHub-mu</li>
          <li>Tunggu 1–3 jam, kamu akan dapat +10.000 TEA (kalau valid)</li>
        </ol>

        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">📌 Tips Supaya Diterima:</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Jangan pakai template kosong</li>
          <li>Gunakan nama unik dan isi project-nya jelas</li>
          <li>Tambah README minimal 3–5 baris</li>
          <li>Jangan submit proyek yang sama berkali-kali</li>
        </ul>

        <p className="mt-4">Selamat mencoba dan semoga TEA kamu terus bertambah! 🍵</p>
      </div>
    </main>
  );
}
