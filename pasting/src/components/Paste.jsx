// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeAllPastes } from "../features/counter/pasteSlice";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = React.useState("");
  
//   // Filter pastes based on search term
//   const filterData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDelete = (pasteId) => {
//     if (window.confirm("Are you sure you want to delete this note?")) {
//       dispatch(removeAllPastes(pasteId));
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <input
//           type="text"
//           placeholder="Search pastes by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 w-full mb-5 text-lg transition-all duration-200"
//         />
//       </div>

//       {filterData.length === 0 ? (
//         <div className="text-center py-12">
//           <h3 className="text-xl text-gray-600">
//             {pastes.length === 0 
//               ? "No pastes available. Create your first paste!" 
//               : "No pastes match your search."}
//           </h3>
//           {pastes.length === 0 && (
//             <Link 
//               to="/" 
//               className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               Create New Paste
//             </Link>
//           )}
//         </div>
//       ) : (
//         <div className="grid gap-6">
//           {filterData.map((paste) => (
//             <div
//               key={paste._id}
//               className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
//             >
//               <div className="mb-4">
//                 <h2 className="text-2xl font-bold mb-2 text-blue-700">
//                   {paste.title}
//                 </h2>
//                 <p className="text-gray-700 break-words whitespace-pre-wrap">
//                   {paste.content.length > 200
//                     ? `${paste.content.substring(0, 200)}...`
//                     : paste.content}
//                 </p>
//               </div>
              
//               <div className="flex flex-wrap gap-3 mt-4">
//                 <Link
//                   to={`/?pasteId=${paste._id}`}
//                   className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
//                 >
//                   Edit
//                 </Link>
//                 <Link
//                   to={`/pastes/${paste._id}`}
//                   className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
//                 >
//                   View
//                 </Link>
//                 <button
//                   className="px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition"
//                   onClick={() => handleDelete(paste._id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200 transition"
//                   onClick={() => {
//                     navigator.clipboard.writeText(paste.content);
//                     toast.success("Content copied to clipboard!");
//                   }}
//                 >
//                   Copy
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition"
//                   onClick={() => {
//                     navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste._id}`);
//                     toast.success("Link copied to clipboard!");
//                   }}
//                 >
//                   Share
//                 </button>
//               </div>
              
//               <div className="mt-4 text-sm text-gray-500">
//                 Created: {formatDate(paste.createdAt)}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Paste;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllPastes } from "../features/counter/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// Import icons
import { FiEdit, FiEye, FiTrash2, FiCopy, FiShare2 } from "react-icons/fi";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch(removeAllPastes(pasteId));
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search pastes by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 w-full mb-5 text-lg transition-all duration-200"
        />
      </div>

      {filterData.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">
            {pastes.length === 0 
              ? "No pastes available. Create your first paste!" 
              : "No pastes match your search."}
          </h3>
          {pastes.length === 0 && (
            <Link 
              to="/" 
              className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Create New Paste
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-6">
          {filterData.map((paste) => (
            <div
              key={paste._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2 text-blue-700">
                  {paste.title}
                </h2>
                <p className="text-gray-700 break-words whitespace-pre-wrap">
                  {paste.content.length > 200
                    ? `${paste.content.substring(0, 200)}...`
                    : paste.content}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to={`/?pasteId=${paste._id}`}
                  className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition flex items-center justify-center"
                  aria-label="Edit"
                >
                  <FiEdit size={20} />
                </Link>
                <Link
                  to={`/pastes/${paste._id}`}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition flex items-center justify-center"
                  aria-label="View"
                >
                  <FiEye size={20} />
                </Link>
                <button
                  className="px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition flex items-center justify-center"
                  onClick={() => handleDelete(paste._id)}
                  aria-label="Delete"
                >
                  <FiTrash2 size={20} />
                </button>
                <button
                  className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200 transition flex items-center justify-center"
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success("Content copied to clipboard!");
                  }}
                  aria-label="Copy"
                >
                  <FiCopy size={20} />
                </button>
                <button
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition flex items-center justify-center"
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste._id}`);
                    toast.success("Link copied to clipboard!");
                  }}
                  aria-label="Share"
                >
                  <FiShare2 size={20} />
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Created: {formatDate(paste.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Paste;