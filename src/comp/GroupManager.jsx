// // GroupManager.jsx
// import { useState, useEffect } from "react";

// export default function GroupManager() {
//   const [groupName, setGroupName] = useState("");
//   const [groups, setGroups] = useState([]);

//   useEffect(() => {
//     const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
//     setGroups(storedGroups);
//   }, []);

//   const handleAddGroup = () => {
//     const trimmed = groupName.trim();
//     if (!trimmed) return alert("Group name is required");
//     if (groups.includes(trimmed)) return alert("Group already exists");

//     const updated = [...groups, trimmed];
//     setGroups(updated);
//     localStorage.setItem("groups", JSON.stringify(updated));
//     setGroupName("");
//   };

//   const handleDeleteGroup = (groupToDelete) => {
//     const updated = groups.filter((group) => group !== groupToDelete);
//     setGroups(updated);
//     localStorage.setItem("groups", JSON.stringify(updated));
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-blue-50 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Manage Groups</h2>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           placeholder="Enter group name"
//           className="flex-1 px-3 py-2 border rounded-l-md"
//         />
//         <button
//           onClick={handleAddGroup}
//           className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="space-y-2">
//         {groups.map((group, idx) => (
//           <li key={idx} className="flex justify-between items-center bg-white p-2 rounded shadow">
//             <span className="text-blue-700">{group}</span>
//             <button
//               onClick={() => handleDeleteGroup(group)}
//               className="text-red-600 hover:underline"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }











import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GroupManager() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  const handleAddGroup = () => {
    const trimmed = groupName.trim();
    if (!trimmed) return alert("Group name is required");
    if (groups.includes(trimmed)) return alert("Group already exists");

    const updated = [...groups, trimmed];
    setGroups(updated);
    localStorage.setItem("groups", JSON.stringify(updated));
    setGroupName("");
  };

  const handleDeleteGroup = (groupToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${groupToDelete}"?`)) {
      const updated = groups.filter((group) => group !== groupToDelete);
      setGroups(updated);
      localStorage.setItem("groups", JSON.stringify(updated));
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <span className="bg-indigo-600 text-white p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
          </span>
          <h2 className="text-2xl font-bold text-indigo-800">Group Manager</h2>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Groups
        </button>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
          <h3 className="text-sm font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Add New Group</h3>
          <div className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
                className="w-full px-4 py-3 border border-indigo-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleAddGroup()}
              />
              {groupName && (
                <button
                  onClick={() => setGroupName('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={handleAddGroup}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-r-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium transition-all flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-indigo-600 mb-3 uppercase tracking-wider">Existing Groups</h3>
        {groups.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100">
            <ul className="divide-y divide-indigo-100">
              {groups.map((group, idx) => (
                <li key={idx} className="p-4 hover:bg-indigo-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3 font-medium">
                        {group.charAt(0).toUpperCase()}
                      </span>
                      <span className="text-gray-700 font-medium">{group}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteGroup(group)}
                      className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                      title="Delete group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-indigo-100 border-dashed">
            <div className="flex flex-col items-center justify-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <p className="text-lg">No groups created yet</p>
              <p className="text-sm text-gray-400 mt-1">Add a new group using the form above</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}