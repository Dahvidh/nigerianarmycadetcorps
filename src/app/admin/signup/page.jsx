"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { registerOfficer } from "../../config/firebase";

export default function SignUpToast() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setError("");
    try {
      const officerData = { email };
      await registerOfficer(email, password, officerData);
      toast.success("Signup successful!");
      router.push("/signin");
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred during signup. Please try again.");
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Toaster />
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">NACC Sign Up</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 p-2 rounded text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className="my-4 text-center text-sm">or sign up with</div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 p-2 px-4 rounded text-white">
            Google
          </button>
          <button className="bg-blue-800 p-2 px-4 rounded text-white">
            Facebook
          </button>
        </div>
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
