import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Apa itu TEA Protocol? 🍵
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Edutea adalah proyek open-source untuk mengenalkan TEA Protocol secara
          sederhana dan menyenangkan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card title="🔍 Tentang TEA" href="/tentang" />
          <Card title="📚 Panduan Reward OSS" href="/panduan" />
          <Card title="⚖️ Perbandingan Protokol" href="/perbandingan" />
          <Card title="🛡️ Tips Unstake Aman" href="/unstake" />
        </div>
      </div>
    </main>
  );
}

function Card({ title, href }) {
  return (
    <Link href={href}>
      <div className="rounded-2xl shadow-md bg-white p-6 hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-semibold text-green-800">{title}</h2>
      </div>
    </Link>
  );
}
