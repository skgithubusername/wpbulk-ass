// File: src/comp/CreateJob.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJob } from "../JobContext";

export default function CreateJob() {
  const navigate = useNavigate();
  const { addJob } = useJob();

  const [jobName, setJobName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileDataUrl, setFileDataUrl] = useState(null);

  const [groups, setGroups] = useState(() => {
    return JSON.parse(localStorage.getItem("groups")) || ["Patna List 1"];
  });
  const [selectedGroups, setSelectedGroups] = useState(["Patna List 1"]);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const toggleGroup = (group) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };
console.log("Selected Groups:", setGroups);
    // Convert file to base64
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileDataUrl(reader.result); // Save base64 string
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleCreateJob = () => {
    if (!jobName.trim()) return alert("Job name is required");

    const newJob = {
      title: jobName,
      startTime: new Date().toLocaleString(),
      sendStatus: "Pending",
      groups: selectedGroups,
      message: message,
      fileName: file ? file.name : null,
      fileUrl: fileDataUrl, // ✅ Save base64
    };

    addJob(newJob);
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-blue-50 shadow-xl border border-blue-200 p-8 rounded-xl">
  {/* Contact Group */}
  <div className="border border-blue-300 rounded-lg p-5 mb-8 bg-white">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-blue-700">Contact Groups</h2>
      <button
        onClick={() => navigate("/data")}
        className="text-xl font-bold px-3 py-1 border border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition"
      >
        +
      </button>
    </div>

    <div className="flex flex-wrap gap-3">
      {groups.map((group) => (
        <label
          key={group}
          className="flex items-center border border-emerald-400 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-emerald-200 transition"
        >
          <input
            type="checkbox"
            checked={selectedGroups.includes(group)}
            onChange={() => toggleGroup(group)}
            className="mr-2 accent-emerald-600"
          />
          {group}
        </label>
      ))}
    </div>
  </div>

  {/* Job Name */}
  <div className="mb-6">
    <label className="block text-blue-700 font-semibold mb-1">Job Name</label>
    <input
      type="text"
      value={jobName}
      onChange={(e) => setJobName(e.target.value)}
      placeholder="Holi Offer 1 (2025)"
      className="w-full border border-blue-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-blue-800"
    />
  </div>

  {/* File & Message Box */}
  <div className="flex flex-col lg:flex-row gap-6 mb-8">
    {/* File Upload */}
    <div className="flex-1 border border-blue-300 bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm">
      <p className="font-semibold mb-3 text-blue-700">Image / Pdf / Ppt</p>
      <label className="cursor-pointer border border-emerald-600 text-emerald-700 text-sm px-6 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition">
        Upload
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {fileDataUrl && (
        <div className="mt-4 w-full max-h-40 overflow-hidden flex justify-center">
          <img
            src={fileDataUrl}
            alt="Preview"
            className="rounded-lg border border-blue-300 max-h-40 object-contain"
          />
        </div>
      )}
    </div>

    {/* Message Box */}
    <div className="flex-1 border border-blue-300 rounded-lg p-6 bg-white shadow-sm">
      <p className="font-semibold mb-3 text-blue-700">Enter Msg / Caption</p>
      <textarea
        className="w-full h-32 border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-blue-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message or caption..."
      ></textarea>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-end">
    <button
      onClick={handleCreateJob}
      className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
    >
      Create Job
    </button>
  </div>
</div>

  
  );
}
