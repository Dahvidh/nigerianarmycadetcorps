import React from "react";
import Footer from "./Footer";

const SigninForm = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Sign In Account
          </h2>
          <p className="text-gray-600 text-center mb-4">
            You are to provide valid credentials.
          </p>
          <form>
            <input
              type="email"
              placeholder="name@mail.com"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 px-4 rounded"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Not registered?{" "}
            <a href="/signup" className="text-blue-600">
              Create Account
            </a>
          </p>
          <p className="text-center text-gray-600 mt-2">
            Forgot Password?{" "}
            <a href="/reset" className="text-blue-600">
              Reset
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninForm;
