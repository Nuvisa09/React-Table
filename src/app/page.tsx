"use client";

import { columns } from "@/components/columns";
import { User } from "@/types/user";
import { DataTable } from "@/components/data-table";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    },
  });

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
      {/* <div className="rounded-2xl border bg-white  shadow-lg p-4">
        <DataTable columns={columns} data={users} pageSize={12} />
      </div> */}
      <div className="rounded-2xl border bg-white shadow-lg p-4">
        {isLoading && <p className="text-gray-500">Loading...</p>}
        {error && (
          <p className="text-red-500">Error: {(error as Error).message}</p>
        )}
        {!isLoading && !error && (
          <DataTable columns={columns} data={users} pageSize={12} />
        )}
      </div>
    </main>
  );
}
