import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Viewpaste = () => {
  const { id } = useParams();
  const allpastes = useSelector((state) => state.paste.pastes);
  const paste = allpastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight drop-shadow-lg">
            Paste not found
          </h1>
          <Link to="/" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight drop-shadow-lg">
          {paste.title}
        </h1>
        <div className="w-full mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <pre className="whitespace-pre-wrap font-sans">{paste.content}</pre>
        </div>
        <div className="flex gap-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              toast.success("Copied to clipboard!");
            }}
          >
            Copy Content
          </button>
          <Link 
            to="/" 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Back to Home
          </Link>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Created: {new Date(paste.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Viewpaste;