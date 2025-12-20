"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@nigerianarmycadets.org" &&
      password === "2025/2026regime"
    ) {
      console.log("Access granted to admin");
      router.push("/admin/dashboard"); // Redirect to admin dashboard
    } else {
      alert("Access denied: Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 p-2 rounded text-white font-semibold"
          >
            Sign In
          </button>
        </form>
        <div className="my-4 text-center text-sm">or sign in with</div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 p-2 px-4 rounded text-white">
            Google
          </button>
          <button className="bg-blue-800 p-2 px-4 rounded text-white">
            Facebook
          </button>
        </div>
        <div className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
