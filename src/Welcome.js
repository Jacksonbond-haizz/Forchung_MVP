import AddOpportunity from "./AddOpportunity";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Dashboard from "./Dashboard";

export default function Welcome({ onLogout }) {
const handleLogout = async () => {
await signOut(auth);
onLogout();
};

const isAdmin =
auth.currentUser?.email === "aungyeemonmyo@gmail.com";

return ( <div className="min-h-screen bg-gray-50">
{/* Navigation */} <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center"> <h1 className="text-2xl font-bold text-indigo-700">
Forschung </h1>

    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  </nav>

  {/* Hero Section */}
  <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
    <h1 className="text-5xl font-bold mb-4">
      Discover Research & Internship Opportunities
    </h1>

    <p className="text-xl opacity-90">
      Connecting students with universities,
      researchers, and industry partners.
    </p>
  </section>

  {/* Admin Form */}
  {isAdmin && <AddOpportunity />}

  {/* Dashboard */}
  <Dashboard />
</div>

);
}
