export default function Perbandingan() {
  return (
    <main className="min-h-screen bg-white p-6 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          ⚖️ Perbandingan TEA Protocol vs Protokol Lain
        </h1>

        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-green-100">
            <tr>
              <th className="border px-4 py-2 text-left">Fitur</th>
              <th className="border px-4 py-2 text-left">TEA Protocol</th>
              <th className="border px-4 py-2 text-left">Ethereum</th>
              <th className="border px-4 py-2 text-left">Polygon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Reward untuk kontribusi open-source</td>
              <td className="border px-4 py-2">✅ Ya</td>
              <td className="border px-4 py-2">❌ Tidak</td>
              <td className="border px-4 py-2">❌ Tidak</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-4 py-2">Staking untuk akses reward</td>
              <td className="border px-4 py-2">✅ Ya</td>
              <td className="border px-4 py-2">✅ Ya</td>
              <td className="border px-4 py-2">✅ Ya</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fokus ke edukasi & komunitas</td>
              <td className="border px-4 py-2">✅ Fokus utama</td>
              <td className="border px-4 py-2">❌ Tidak</td>
              <td className="border px-4 py-2">❌ Tidak</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-4
