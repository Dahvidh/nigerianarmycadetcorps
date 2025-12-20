import React from "react";
import Footer from "./Footer";

const SignupForm = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 text-center mb-4">
            You are to provide valid and verifiable information.
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
            <input
              type="password"
              placeholder="Retype password"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Create your account
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already registered?{" "}
            <a href="/signin" className="text-blue-600">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
