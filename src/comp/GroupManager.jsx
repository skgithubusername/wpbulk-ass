// GroupManager.jsx
import { useState, useEffect } from "react";

export default function GroupManager() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);

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
    const updated = groups.filter((group) => group !== groupToDelete);
    setGroups(updated);
    localStorage.setItem("groups", JSON.stringify(updated));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Manage Groups</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
          className="flex-1 px-3 py-2 border rounded-l-md"
        />
        <button
          onClick={handleAddGroup}
          className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {groups.map((group, idx) => (
          <li key={idx} className="flex justify-between items-center bg-white p-2 rounded shadow">
            <span className="text-blue-700">{group}</span>
            <button
              onClick={() => handleDeleteGroup(group)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
