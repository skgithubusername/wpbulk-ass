// import { useLocation } from "react-router-dom";

// export default function JobDetail() {
//   const location = useLocation();
//   const { job } = location.state || {};

//   if (!job) return <div className="p-10 text-center">No job selected.</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 border-4 border-black p-4">
//       {/* Job Title */}
//       <div className="flex justify-between items-center border-2 border-black p-4 mb-4">
//         <span className="font-bold text-lg">Job - {job.title}</span>

//         {/* Controls */}
//         <div className="flex items-center gap-4">
//           <button className="border-2 border-black px-4 py-2 rounded hover:bg-gray-100">⏸️</button>
//           <button className="border-2 border-black px-4 py-2 rounded hover:bg-gray-100">⏹️</button>
//           {job.fileUrl ? (
//   <img
//     src={job.fileUrl}
//     alt="Job"
//     className="w-14 h-14 object-cover border-2 border-black rounded"
//   />
// ) : (
//   <div className="w-14 h-14 border-2 border-black rounded flex items-center justify-center">
//     ❓
//   </div>
// )}

//           {/* Message Preview */}
//           <input
//             type="text"
//             value={job.message || "May this auspicious day bring joy..."}
//             readOnly
//             className="border-2 border-black px-4 py-2 rounded w-[300px]"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="border-2 border-black p-2">
//         {/* Table Header */}
//         <div className="flex font-bold border-2 border-black px-2 py-3">
//           <div className="w-[5%]">#</div>
//           <div className="w-[30%]">Contact Address</div>
//           <div className="w-[30%]">Contact Group(s)</div>
//           <div className="w-[20%]">Send Time</div>
//           <div className="w-[15%]">Send Status</div>
//         </div>

//         {/* Dummy Rows */}
//         <div className="max-h-[400px] overflow-y-auto">
//           {[1, 2, 3].map((num) => (
//             <div key={num} className="flex px-2 py-2 border-t border-black text-sm">
//               <div className="w-[5%]">{num}</div>
//               <div className="w-[30%]">user{num}@example.com</div>
//               <div className="w-[30%]">Group {num}</div>
//               <div className="w-[20%]">2025-05-06 10:{num}0</div>
//               <div className="w-[15%]">Sent</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }










import { useLocation } from "react-router-dom";

export default function JobDetail() {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job)
    return <div className="p-10 text-center text-xl text-gray-600">No job selected.</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-blue-50 shadow-xl rounded-xl border border-blue-200">
  {/* Job Header */}
  <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-300 pb-4 mb-6">
    <h2 className="text-2xl font-bold text-blue-800 mb-4 md:mb-0">
      📋 Job - {job.title}
    </h2>

    <div className="flex items-center gap-4">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded shadow transition">
        ⏸ 
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow transition">
        ⏹ 
      </button>
      {job.fileUrl ? (
        <img
          src={job.fileUrl}
          alt="Job File"
          className="w-14 h-14 object-cover rounded border border-blue-300"
        />
      ) : (
        <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded border border-blue-300 text-blue-500">
          ❓
        </div>
      )}
      <input
        type="text"
        value={job.message || "May this auspicious day bring joy..."}
        readOnly
        className="border border-blue-300 rounded px-4 py-1 w-[280px] text-sm text-blue-700 bg-white"
      />
    </div>
  </div>

  {/* Job Details Table */}
  <div className="overflow-x-auto">
    <div className="min-w-full border border-blue-200 rounded-lg shadow">
      <div className="flex font-semibold bg-blue-100 text-blue-700 border-b border-blue-200 text-sm">
        <div className="w-[5%] px-3 py-2">#</div>
        <div className="w-[30%] px-3 py-2">Contact Address</div>
        <div className="w-[30%] px-3 py-2">Contact Group(s)</div>
        <div className="w-[20%] px-3 py-2">Send Time</div>
        <div className="w-[15%] px-3 py-2">Send Status</div>
      </div>

      <div className="max-h-[400px] overflow-y-auto divide-y divide-blue-100">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="flex text-sm text-blue-800 items-center hover:bg-blue-50 transition"
          >
            <div className="w-[5%] px-3 py-2">{num}</div>
            <div className="w-[30%] px-3 py-2">user{num}@example.com</div>
            <div className="w-[30%] px-3 py-2">Group {num}</div>
            <div className="w-[20%] px-3 py-2">2025-05-06 10:{num}0</div>
            <div className="w-[15%] px-3 py-2 text-emerald-600 font-semibold">
              Sent
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

