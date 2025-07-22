export default function Unstake() {
  return (
    <main className="min-h-screen bg-white p-6 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🛡️ Tips Unstake Aman di TEA Protocol
        </h1>

        <p className="mb-4">
          Saat program reward sedang dalam transisi, sangat penting untuk melakukan unstake TEA dengan cara yang benar agar token kamu tidak hilang.
        </p>

        <h2 className="text-xl font-semibold text-green-600 mb-2">✅ Langkah Aman Unstake:</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Kunjungi situs resmi tempat kamu staking (biasanya <a href="https://oss.fish" target="_blank" className="text-blue-600 underline">oss.fish</a>)</li>
          <li>Hubungkan wallet BNB Smart Chain kamu</li>
          <li>Pilih tombol <strong>Unstake</strong></li>
          <li>Pastikan koneksi internet stabil dan jaringan tidak padat</li>
          <li>Screenshot bukti unstake jika perlu</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-600 mb-2">⚠️ Hindari Hal Ini:</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Jangan menunggu terlalu lama setelah ada himbauan resmi</li>
          <li>Jangan menggunakan link tidak resmi</li>
          <li>Jangan share private key ke siapapun</li>
        </ul>

        <p>
          Untuk pengumuman terbaru, selalu cek:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><a href="https://t.me/teaprotocol" target="_blank" className="text-blue-600 underline">Telegram TEA Protocol</a></li>
          <li><a href="https://discord.gg/teaprotocol" target="_blank" className="text-blue-600 underline">Discord TEA Protocol</a></li>
        </ul>

        <p className="mt-6">Unstake aman, TEA kamu selamat 🍵</p>
      </div>
    </main>
  );
}
