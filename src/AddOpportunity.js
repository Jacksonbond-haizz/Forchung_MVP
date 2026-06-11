import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddOpportunity() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Internship");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !deadline) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "opportunities"), {
        title,
        description,
        type,
        deadline,
        createdAt: serverTimestamp(),
      });
      // Clear form
      setTitle("");
      setDescription("");
      setType("Internship");
      setDeadline("");
      alert("Opportunity added!");
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Failed to add. See console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto my-8 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Add New Opportunity</h2>

      <input
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
/>

      <textarea
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Internship</option>
        <option>Research</option>
      </select>

      <input
        type="date"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Add Opportunity
      </button>
    </form>
  );
}