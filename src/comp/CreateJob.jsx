

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useJob } from "../JobContext";

// export default function CreateJob() {
//   const navigate = useNavigate();
//   const { addJob } = useJob();

//   const [jobName, setJobName] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);
//   const [fileDataUrl, setFileDataUrl] = useState(null);

//   const [groups, setGroups] = useState(() => {
//     return JSON.parse(localStorage.getItem("groups")) || ["Patna List 1"];
//   });
//   const [selectedGroups, setSelectedGroups] = useState(["Patna List 1"]);

//   useEffect(() => {
//     localStorage.setItem("groups", JSON.stringify(groups));
//   }, [groups]);

//   const toggleGroup = (group) => {
//     setSelectedGroups((prev) =>
//       prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
//     );
//   };

//   // Convert file to base64
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFileDataUrl(reader.result); // Save base64 string
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleCreateJob = () => {
//     if (!jobName.trim()) return alert("Job name is required");

//     const newJob = {
//       title: jobName,
//       startTime: new Date().toLocaleString(),
//       sendStatus: "Pending",
//       groups: selectedGroups,
//       message: message,
//       fileName: file ? file.name : null,
//       fileUrl: fileDataUrl, // ✅ Save base64
//     };

//     addJob(newJob);
//     navigate("/");
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-10 border border-black p-6 rounded-md">
//       {/* Contact Group */}
//       <div className="border border-black rounded-md p-3 mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="font-semibold">Contact Group</span>
//           <button
//             onClick={() => navigate("/create-group")}
//             className="border border-black px-3 rounded-full text-xl font-bold leading-5"
//           >
//             +
//           </button>
//         </div>

//         {groups.map((group) => (
//           <div
//             key={group}
//             className="inline-flex items-center border border-black px-4 py-1 rounded-full mr-2 mb-2"
//           >
//             <input
//               type="checkbox"
//               checked={selectedGroups.includes(group)}
//               onChange={() => toggleGroup(group)}
//               className="mr-2"
//             />
//             <label className="font-semibold">{group}</label>
//           </div>
//         ))}
//       </div>

//       {/* Job Name */}
//       <div className="mb-4">
//         <label className="font-semibold mr-2">Job Name:</label>
//         <input
//           type="text"
//           value={jobName}
//           onChange={(e) => setJobName(e.target.value)}
//           className="border border-black px-4 py-1 font-bold"
//           placeholder="Holi Offer 1 (2025)"
//         />
//       </div>

//       {/* File & Message Box */}
//       <div className="flex gap-4 mb-6">
//         {/* File Upload */}
//         <div className="flex-1 border border-black rounded-md flex flex-col items-center justify-center p-4">
//           <p className="font-semibold mb-2">Image / Pdf / Ppt</p>
//           <label className="cursor-pointer border border-black px-6 py-2 rounded-md hover:bg-gray-100">
//             Upload
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </label>

//           {/* Preview */}
//           {fileDataUrl && (
//             <div className="mt-4 text-center">
//               <img
//                 src={fileDataUrl}
//                 alt="Preview"
//                 className="max-w-full max-h-40 mx-auto"
//               />
//             </div>
//           )}
//         </div>

//         {/* Message Box */}
//         <div className="flex-1 border border-black rounded-md p-4">
//           <p className="font-semibold mb-2">Enter Msg / Caption</p>
//           <textarea
//             className="w-full h-32 border border-gray-300 p-2"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={handleCreateJob}
//           className="border border-black px-6 py-2 rounded-full hover:bg-gray-200"
//         >
//           Create Job
//         </button>
//       </div>
//     </div>
//   );
// }























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
    <div className="max-w-5xl sm:mx-12 mx-auto mt-10 bg-blue-50 shadow-xl border border-blue-200 p-8 rounded-xl">
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
