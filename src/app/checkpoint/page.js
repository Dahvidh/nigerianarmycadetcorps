"use client";
import Link from "next/link";

export default function CheckpointPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        <Link
          href="/admin/signin"
          className="bg-purple-700 hover:bg-purple-800 text-white text-center p-10 rounded-2xl shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold mb-2">Admin</h2>
          {/*<p className="text-lg">Manage users, view scan history, and oversee operations</p>*/}
        </Link>

        <Link
          href="/signup"
          className="bg-green-700 hover:bg-green-800 text-white text-center p-10 rounded-2xl shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold mb-2">Officer</h2>
          {/*<p className="text-lg">Verify credentials and view officer profile</p>*/}
        </Link>
      </div>
    </div>
  );
}
