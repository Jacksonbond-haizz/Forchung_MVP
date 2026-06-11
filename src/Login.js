import React, { useState } from "react";
import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import logo from "./assets/forschung-logo.png";

export default function Login({ onLogin }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isRegister, setIsRegister] = useState(false);
const [error, setError] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
setError("");


try {
  if (isRegister) {
    await createUserWithEmailAndPassword(auth, email, password);
  } else {
    await signInWithEmailAndPassword(auth, email, password);
  }

  onLogin();
} catch (err) {
  setError(err.message);
}


};

return ( <div className="min-h-screen flex bg-gray-50">

  {/* LEFT PANEL */}
  <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white items-center justify-center p-12">

    <div className="text-center max-w-lg">

      <img
        src={logo}
        alt="Forschung Logo"
        className="w-64 mx-auto mb-8 drop-shadow-lg"
      />

      <p className="mt-8 text-lg text-purple-100 leading-relaxed">
        Discover research projects, internships,
        and academic opportunities from universities
        and researchers in one centralized platform.
      </p>

    </div>

  </div>

  {/* RIGHT PANEL */}
  <div className="w-full md:w-1/2 flex items-center justify-center p-8">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">

      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold text-gray-800">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <p className="text-gray-500 mt-2">
          {isRegister
            ? "Join Forschung today"
            : "Sign in to continue"}
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          {isRegister ? "Create Account" : "Login"}
        </button>

      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm text-center">
            {error}
          </p>
        </div>
      )}

      <div className="mt-8 text-center">

        <p className="text-gray-600">
          {isRegister
            ? "Already have an account?"
            : "Need an account?"}
        </p>

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
        >
          {isRegister ? "Login" : "Create Account"}
        </button>

      </div>

    </div>

  </div>

</div>

);
}
