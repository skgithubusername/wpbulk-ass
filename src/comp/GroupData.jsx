





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
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-blue-50 rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-700">Select Group to View Data</h2>
        <button
          onClick={() => navigate("/groupManager")}
          className="text-xl font-bold px-3 py-1 border border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition"
        >
          +
        </button>
      </div>

      <div className="flex gap-3 flex-wrap mb-6">
        {groups.map((group, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedGroup(group)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedGroup === group
                ? "bg-blue-600 text-white"
                : "bg-white border border-blue-300 text-blue-700"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {selectedGroup && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm table-auto border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 border-r border-blue-500 text-left">#</th>
                <th className="p-3 border-r border-blue-500 text-left">Contact Address</th>
                <th className="p-3 border-r border-blue-500 text-left">Description</th>
                <th className="p-3 border-r border-blue-500 text-left">Date Added</th>
                <th className="p-3 text-left">Is Valid</th>
              </tr>
            </thead>
            <tbody className="text-blue-800">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-100">
                  <td className="p-3 border-t border-blue-300">{idx + 1}</td>
                  <td className="p-3 border-t border-blue-300">{row.address}</td>
                  <td className="p-3 border-t border-blue-300">{row.desc}</td>
                  <td className="p-3 border-t border-blue-300">{row.date}</td>
                  <td className="p-3 border-t border-blue-300">{row.valid ? "Yes" : "No"}</td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No data found for {selectedGroup}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
