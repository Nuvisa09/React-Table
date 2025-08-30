"use client";

import { useEffect, useState } from "react";
import { columns } from "@/components/columns";
import { User } from "@/types/user";
import { DataTable } from "@/components/data-table";
// import { userMockup } from "@/lib/data";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 ">
          Belajar Data Table
        </h1>
        <p className="mt-2 text-gray-600 ">
          Contoh Penerapan{" "}
          <code className="px-1 py-0.5 rounded bg-gray-200 text-gray-800 text-[13px] font-mono">
            Tanstack Table
          </code>{" "}
          dengan <span className="font-semibold text-slate-700">Next.js </span>
          dan pengambilan data dari
          <a
            href="https://jsonplaceholder.typicode.com"
            target="_blank"
            className="ml-1 text-blue-600 hover:underline"
          >
            jsonplaceholder.typicode.com
          </a>
        </p>
      </div>
      <div className="rounded-2xl border bg-white  shadow-lg p-4">
        <DataTable columns={columns} data={users} pageSize={12} />
      </div>
    </main>
  );
}
