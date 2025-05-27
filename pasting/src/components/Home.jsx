import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../features/counter/pasteSlice";
import { useEffect, useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchparam, setSearchParam] = useSearchParams();
  const pasteId = searchparam.get("pasteId");
  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allpastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setContent(paste.content);
      }
    } else {
      // Reset form when not editing
      setTitle("");
      setContent("");
    }
  }, [pasteId, allpastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
      toast.success("Paste updated successfully!");
    } else {
      //create
      dispatch(addToPastes(paste));
      toast.success("Paste created successfully!");
    }

    // Reset the form
    setTitle("");
    setContent("");
    setSearchParam({});
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight drop-shadow-lg">
          {pasteId ? "Edit Your Paste" : "Create a New Paste"}
        </h1>
        <input
          className="rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 w-full mb-5 text-lg transition-all duration-200"
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none w-full min-h-[200px] max-h-[400px] p-3 mb-6 text-base resize-y transition-all duration-200 bg-purple-50"
          value={content}
          placeholder="Enter your content here..."
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-pink-600 transition-all duration-200 text-lg"
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <footer className="mt-10 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Paste App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;