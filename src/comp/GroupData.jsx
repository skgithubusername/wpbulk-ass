// // Description: This component allows users to select a group and view its associated data in a table format. It uses dummy data for demonstration purposes and provides a button to navigate to a group manager page.


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Predefined dummy data
// const dummyData = {
//   "Patna List 1": [
//     {
//       address: "example@example.com",
//       desc: "Sample description for Patna",
//       date: "2025-05-06",
//       valid: true,
//     },
//   ],
//   "Delhi List 2": [
//     {
//       address: "test@demo.com",
//       desc: "Delhi description",
//       date: "2025-05-05",
//       valid: false,
//     },
//   ],
// };

// // Generates example data for a new group
// const generateExampleData = (group) => [
//   {
//     address: `${group.toLowerCase().replace(/\s+/g, "")}@example.com`,
//     desc: `Auto-generated data for ${group}`,
//     date: new Date().toISOString().split("T")[0],
//     valid: Math.random() < 0.5,
//   },
// ];

// export default function GroupData() {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState("");
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   useEffect(() => {
//     if (selectedGroup) {
//       const defaultData = dummyData[selectedGroup] || generateExampleData(selectedGroup);
//       setData(defaultData);
//     }
//   }, [selectedGroup]);

//   return (
//     <div className="max-w-5xl mx-auto mt-10 p-6 bg-blue-50 rounded shadow">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-bold text-blue-700">Select Group to View Data</h2>
//         <button
//           onClick={() => navigate("/groupManager")}
//           className="text-xl font-bold px-3 py-1 border border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition"
//         >
//           +
//         </button>
//       </div>

//       <div className="flex gap-3 flex-wrap mb-6">
//         {groups.map((group, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSelectedGroup(group)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               selectedGroup === group
//                 ? "bg-blue-600 text-white"
//                 : "bg-white border border-blue-300 text-blue-700"
//             }`}
//           >
//             {group}
//           </button>
//         ))}
//       </div>

//       {selectedGroup && (
//         <div className="bg-white rounded shadow overflow-x-auto">
//           <table className="w-full text-sm table-auto border-collapse">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="p-3 border-r border-blue-500 text-left">#</th>
//                 <th className="p-3 border-r border-blue-500 text-left">Contact Address</th>
//                 <th className="p-3 border-r border-blue-500 text-left">Description</th>
//                 <th className="p-3 border-r border-blue-500 text-left">Date Added</th>
//                 <th className="p-3 text-left">Is Valid</th>
//               </tr>
//             </thead>
//             <tbody className="text-blue-800">
//               {data.map((row, idx) => (
//                 <tr key={idx} className="hover:bg-blue-100">
//                   <td className="p-3 border-t border-blue-300">{idx + 1}</td>
//                   <td className="p-3 border-t border-blue-300">{row.address}</td>
//                   <td className="p-3 border-t border-blue-300">{row.desc}</td>
//                   <td className="p-3 border-t border-blue-300">{row.date}</td>
//                   <td className="p-3 border-t border-blue-300">{row.valid ? "Yes" : "No"}</td>
//                 </tr>
//               ))}
//               {data.length === 0 && (
//                 <tr>
//                   <td colSpan="5" className="p-4 text-center text-gray-500">
//                     No data found for {selectedGroup}
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Predefined dummy data
const dummyData = {
  "Patna List 1": [
    {
      address: "example@example.com",
      desc: "Sample description for Patna",
      date: "2025-05-06",
      valid: true,
    },
  ],
  "Delhi List 2": [
    {
      address: "test@demo.com",
      desc: "Delhi description",
      date: "2025-05-05",
      valid: false,
    },
  ],
};

// Generates example data for a new group
const generateExampleData = (group) => [
  {
    address: `${group.toLowerCase().replace(/\s+/g, "")}@example.com`,
    desc: `Auto-generated data for ${group}`,
    date: new Date().toISOString().split("T")[0],
    valid: Math.random() < 0.5,
  },
];

export default function GroupData() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const defaultData = dummyData[selectedGroup] || generateExampleData(selectedGroup);
      setData(defaultData);
    }
  }, [selectedGroup]);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 flex items-center">
          <span className="bg-indigo-600 text-white p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </span>
          Group Data Manager
        </h2>
        <button
          onClick={() => navigate("/groupManager")}
          className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Group
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Select a Group</h3>
        <div className="flex gap-3 flex-wrap">
          {groups.length > 0 ? (
            groups.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedGroup === group
                    ? "bg-indigo-600 text-white shadow-md transform scale-105"
                    : "bg-white border border-indigo-300 text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                {group}
              </button>
            ))
          ) : (
            <div className="w-full p-4 bg-white rounded-lg border border-dashed border-indigo-300 text-center">
              <p className="text-gray-500">No groups available. Click &quot; Add New Group&quot; to create one.</p>
            </div>
          )}
        </div>
      </div>

      {selectedGroup && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100">
          <div className="p-4 bg-indigo-50 border-b border-indigo-100">
            <h3 className="text-lg font-medium text-indigo-800">{selectedGroup} Data</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="p-4 text-left font-semibold">#</th>
                  <th className="p-4 text-left font-semibold">Contact Address</th>
                  <th className="p-4 text-left font-semibold">Description</th>
                  <th className="p-4 text-left font-semibold">Date Added</th>
                  <th className="p-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50 transition-colors">
                    <td className="p-4 border-t border-indigo-100">{idx + 1}</td>
                    <td className="p-4 border-t border-indigo-100 font-medium text-indigo-700">{row.address}</td>
                    <td className="p-4 border-t border-indigo-100">{row.desc}</td>
                    <td className="p-4 border-t border-indigo-100">{row.date}</td>
                    <td className="p-4 border-t border-indigo-100">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.valid 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {row.valid ? "Valid" : "Invalid"}
                      </span>
                    </td>
                  </tr>
                ))}
                {data.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p>No data found for <span className="font-medium">{selectedGroup}</span></p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {!selectedGroup && groups.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center border border-indigo-100">
          <div className="flex flex-col items-center justify-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">Please select a group to view its data</p>
          </div>
        </div>
      )}
    </div>
  );
}