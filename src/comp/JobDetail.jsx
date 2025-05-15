// // File: src/comp/JobDetail.jsx



// import { useLocation } from "react-router-dom";

// export default function JobDetail() {
//   const location = useLocation();
//   const { job } = location.state || {};

//   if (!job)
//     return <div className="p-10 text-center text-xl text-gray-600">No job selected.</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6 bg-blue-50 shadow-xl rounded-xl border border-blue-200">
//   {/* Job Header */}
//   <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-300 pb-4 mb-6">
//     <h2 className="text-2xl font-bold text-blue-800 mb-4 md:mb-0">
//       📋 Job - {job.title}
//     </h2>

//     <div className="flex items-center gap-4">
//       <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded shadow transition">
//         ⏸ 
//       </button>
//       <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow transition">
//         ⏹ 
//       </button>
//       {job.fileUrl ? (
//         <img
//           src={job.fileUrl}
//           alt="Job File"
//           className="w-14 h-14 object-cover rounded border border-blue-300"
//         />
//       ) : (
//         <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded border border-blue-300 text-blue-500">
//           ❓
//         </div>
//       )}
//       <input
//         type="text"
//         value={job.message || "May this auspicious day bring joy..."}
//         readOnly
//         className="border border-blue-300 rounded px-4 py-1 w-[280px] text-sm text-blue-700 bg-white"
//       />
//     </div>
//   </div>

//   {/* Job Details Table */}
//   <div className="overflow-x-auto">
//     <div className="min-w-full border border-blue-200 rounded-lg shadow">
//       <div className="flex font-semibold bg-blue-100 text-blue-700 border-b border-blue-200 text-sm">
//         <div className="w-[5%] px-3 py-2">#</div>
//         <div className="w-[30%] px-3 py-2">Contact Address</div>
//         <div className="w-[30%] px-3 py-2">Contact Group(s)</div>
//         <div className="w-[20%] px-3 py-2">Send Time</div>
//         <div className="w-[15%] px-3 py-2">Send Status</div>
//       </div>

//       <div className="max-h-[400px] overflow-y-auto divide-y divide-blue-100">
//         {[1, 2, 3].map((num) => (
//           <div
//             key={num}
//             className="flex text-sm text-blue-800 items-center hover:bg-blue-50 transition"
//           >
//             <div className="w-[5%] px-3 py-2">{num}</div>
//             <div className="w-[30%] px-3 py-2">user{num}@example.com</div>
//             <div className="w-[30%] px-3 py-2">Group {num}</div>
//             <div className="w-[20%] px-3 py-2">2025-05-06 10:{num}0</div>
//             <div className="w-[15%] px-3 py-2 text-emerald-600 font-semibold">
//               Sent
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

//   );
// }



import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state || {};
  const [expanded, setExpanded] = useState(false);

  // Sample status data for demonstration
  const statusCounts = {
    sent: 15,
    pending: 3,
    failed: 1
  };

  if (!job)
    return (
      <div className="max-w-6xl mx-auto mt-10 p-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-indigo-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">No Job Selected</h2>
        <p className="text-gray-600 mb-6">Please select a job from the jobs list to view its details</p>
        <button 
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          Back to Dashboard
        </button>
      </div>
    );

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'sent': return 'text-emerald-600 bg-emerald-50';
      case 'pending': return 'text-amber-600 bg-amber-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg">
      {/* Job Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-indigo-200 pb-6 mb-8">
        <div className="flex items-center mb-4 lg:mb-0">
          <button 
            onClick={() => navigate("/")}
            className="mr-4 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors"
            title="Back to Dashboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-center">
            <div className="bg-indigo-600 text-white p-3 rounded-xl mr-4 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-800">
                {job.title}
              </h2>
              <p className="text-indigo-600 text-sm">Job ID: {job.id || 'JB-' + Math.floor(Math.random() * 10000)}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-2">
            <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 px-4 py-2 rounded-lg shadow transition-colors flex items-center" title="Pause Job">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Pause
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition-colors flex items-center" title="Stop Job">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
              Stop
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {job.fileUrl ? (
              <div className="relative group">
                <img
                  src={job.fileUrl}
                  alt="Job File"
                  className="w-16 h-16 object-cover rounded-lg border border-indigo-200 shadow-md transition-transform transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-indigo-900 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center rounded-lg border border-indigo-200 shadow-md text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            )}
            <div className="relative">
              <input
                type="text"
                value={job.message || "May this auspicious day bring joy..."}
                readOnly
                className="border border-indigo-200 rounded-lg px-4 py-2 w-64 md:w-80 text-indigo-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <button className="text-indigo-400 hover:text-indigo-600" title="Copy message">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Job Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sent</p>
              <p className="text-xl font-bold text-emerald-600">{statusCounts.sent}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-xl font-bold text-amber-600">{statusCounts.pending}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Failed</p>
              <p className="text-xl font-bold text-red-600">{statusCounts.failed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100">
        <div className="p-4 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
          <h3 className="text-lg font-medium text-indigo-800">Recipients Detail</h3>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            {expanded ? 'Show Less' : 'Show All'}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform transition-transform ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-indigo-100">
            <thead>
              <tr className="bg-indigo-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Contact Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Contact Group(s)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Send Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-indigo-100">
              {[
                { id: 1, email: 'user1@example.com', group: 'Marketing Team', time: '2025-05-06 10:10', status: 'Sent' },
                { id: 2, email: 'user2@example.com', group: 'Sales Group', time: '2025-05-06 10:20', status: 'Sent' },
                { id: 3, email: 'user3@example.com', group: 'Engineering', time: '2025-05-06 10:30', status: 'Sent' },
                { id: 4, email: 'user4@example.com', group: 'Product Team', time: '2025-05-06 10:40', status: 'Pending' },
                { id: 5, email: 'user5@example.com', group: 'Executive Team', time: '2025-05-06 10:50', status: 'Failed' },
                { id: 6, email: 'user6@example.com', group: 'Customer Support', time: '2025-05-06 11:00', status: 'Pending' },
              ].slice(0, expanded ? 6 : 3).map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-700">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.group}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-indigo-100">
          <div className="flex items-center text-sm text-gray-500">
            <p>Showing <span className="font-medium">{expanded ? '6' : '3'}</span> of <span className="font-medium">6</span> recipients</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-indigo-300 text-indigo-700 rounded-md text-sm hover:bg-indigo-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}