import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Dashboard() {
const [opportunities, setOpportunities] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
const q = query(
collection(db, "opportunities"),
orderBy("createdAt", "desc")
);

const unsubscribe = onSnapshot(q, (snapshot) => {
  const ops = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setOpportunities(ops);
});

return () => unsubscribe();


}, []);

const filteredOpportunities = opportunities.filter((op) =>
op.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
op.description?.toLowerCase().includes(searchTerm.toLowerCase())
);

return ( <div className="bg-gray-50 p-8"> <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
Available Opportunities </h1>


  <p className="text-center text-gray-500 mb-8">
    Explore research and internship opportunities posted by administrators.
  </p>

  <div className="max-w-xl mx-auto mb-10">
    <input
      type="text"
      placeholder="🔍 Search opportunities..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-4 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {filteredOpportunities.length === 0 ? (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold text-gray-600">
        No opportunities found
      </h2>

      <p className="text-gray-500 mt-2">
        Try a different search or check back later.
      </p>
    </div>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredOpportunities.map((op) => (
        <div
          key={op.id}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {op.title}
            </h2>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                op.type === "Research"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {op.type}
            </span>
          </div>

          <p className="text-gray-600 mb-4">
            {op.description}
          </p>

          <div className="border-t pt-3">
            <p className="text-sm text-gray-500">
              📅 Deadline: {op.deadline}
            </p>
          </div>

          <div className="mt-4">
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


);
}
