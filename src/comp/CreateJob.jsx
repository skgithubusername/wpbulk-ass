// // // File: src/comp/CreateJob.jsx
// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useJob } from "../JobContext";

// // export default function CreateJob() {
// //   const navigate = useNavigate();
// //   const { addJob } = useJob();

// //   const [jobName, setJobName] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [fileDataUrl, setFileDataUrl] = useState(null);

// //   const [groups, setGroups] = useState(() => {
// //     return JSON.parse(localStorage.getItem("groups")) || ["Patna List 1"];
// //   });
// //   const [selectedGroups, setSelectedGroups] = useState(["Patna List 1"]);

// //   useEffect(() => {
// //     localStorage.setItem("groups", JSON.stringify(groups));
// //   }, [groups]);

// //   const toggleGroup = (group) => {
// //     setSelectedGroups((prev) =>
// //       prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
// //     );
// //   };
// // console.log("Selected Groups:", setGroups);
// //     // Convert file to base64
// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files[0];
// //     setFile(selectedFile);

// //     if (selectedFile) {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         setFileDataUrl(reader.result); // Save base64 string
// //       };
// //       reader.readAsDataURL(selectedFile);
// //     }
// //   };

// //   const handleCreateJob = () => {
// //     if (!jobName.trim()) return alert("Job name is required");

// //     const newJob = {
// //       title: jobName,
// //       startTime: new Date().toLocaleString(),
// //       sendStatus: "Pending",
// //       groups: selectedGroups,
// //       message: message,
// //       fileName: file ? file.name : null,
// //       fileUrl: fileDataUrl, // ✅ Save base64
// //     };

// //     addJob(newJob);
// //     navigate("/");
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto mt-10 bg-blue-50 shadow-xl border border-blue-200 p-8 rounded-xl">
// //   {/* Contact Group */}
// //   <div className="border border-blue-300 rounded-lg p-5 mb-8 bg-white">
// //     <div className="flex justify-between items-center mb-4">
// //       <h2 className="text-lg font-bold text-blue-700">Contact Groups</h2>
// //       <button
// //         onClick={() => navigate("/data")}
// //         className="text-xl font-bold px-3 py-1 border border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition"
// //       >
// //         +
// //       </button>
// //     </div>

// //     <div className="flex flex-wrap gap-3">
// //       {groups.map((group) => (
// //         <label
// //           key={group}
// //           className="flex items-center border border-emerald-400 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-emerald-200 transition"
// //         >
// //           <input
// //             type="checkbox"
// //             checked={selectedGroups.includes(group)}
// //             onChange={() => toggleGroup(group)}
// //             className="mr-2 accent-emerald-600"
// //           />
// //           {group}
// //         </label>
// //       ))}
// //     </div>
// //   </div>

// //   {/* Job Name */}
// //   <div className="mb-6">
// //     <label className="block text-blue-700 font-semibold mb-1">Job Name</label>
// //     <input
// //       type="text"
// //       value={jobName}
// //       onChange={(e) => setJobName(e.target.value)}
// //       placeholder="Holi Offer 1 (2025)"
// //       className="w-full border border-blue-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-blue-800"
// //     />
// //   </div>

// //   {/* File & Message Box */}
// //   <div className="flex flex-col lg:flex-row gap-6 mb-8">
// //     {/* File Upload */}
// //     <div className="flex-1 border border-blue-300 bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm">
// //       <p className="font-semibold mb-3 text-blue-700">Image / Pdf / Ppt</p>
// //       <label className="cursor-pointer border border-emerald-600 text-emerald-700 text-sm px-6 py-2 rounded-full hover:bg-emerald-600 hover:text-white transition">
// //         Upload
// //         <input
// //           type="file"
// //           className="hidden"
// //           onChange={handleFileChange}
// //         />
// //       </label>

// //       {fileDataUrl && (
// //         <div className="mt-4 w-full max-h-40 overflow-hidden flex justify-center">
// //           <img
// //             src={fileDataUrl}
// //             alt="Preview"
// //             className="rounded-lg border border-blue-300 max-h-40 object-contain"
// //           />
// //         </div>
// //       )}
// //     </div>

// //     {/* Message Box */}
// //     <div className="flex-1 border border-blue-300 rounded-lg p-6 bg-white shadow-sm">
// //       <p className="font-semibold mb-3 text-blue-700">Enter Msg / Caption</p>
// //       <textarea
// //         className="w-full h-32 border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-blue-800"
// //         value={message}
// //         onChange={(e) => setMessage(e.target.value)}
// //         placeholder="Type your message or caption..."
// //       ></textarea>
// //     </div>
// //   </div>

// //   {/* Submit Button */}
// //   <div className="flex justify-end">
// //     <button
// //       onClick={handleCreateJob}
// //       className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
// //     >
// //       Create Job
// //     </button>
// //   </div>
// // </div>

  
// //   );
// // }





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
//  console.log("Selected Groups:", setGroups);
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
//       fileUrl: fileDataUrl, // Save base64
//     };

//     addJob(newJob);
//     navigate("/");
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-violet-50 to-blue-50 shadow-2xl border border-blue-200 p-8 rounded-xl">
//       <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Create New Campaign</h1>
      
//       {/* Contact Group */}
//       <div className="border border-blue-300 rounded-lg p-5 mb-8 bg-white shadow-md hover:shadow-lg transition-shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold text-blue-700 flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//             </svg>
//             Contact Groups
//           </h2>
//           <button
//             onClick={() => navigate("/data")}
//             className="text-xl font-bold px-3 py-1 border-2 border-indigo-600 text-indigo-700 rounded-full hover:bg-indigo-600 hover:text-white transition flex items-center justify-center w-8 h-8"
//             title="Add new contact group"
//           >
//             +
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-3">
//           {groups.map((group) => (
//             <label
//               key={group}
//               className={`flex items-center border-2 px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
//                 selectedGroups.includes(group)
//                   ? "border-indigo-400 bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
//                   : "border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <input
//                 type="checkbox"
//                 checked={selectedGroups.includes(group)}
//                 onChange={() => toggleGroup(group)}
//                 className="mr-2 accent-indigo-600 h-4 w-4"
//               />
//               {group}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Job Name */}
//       <div className="mb-6">
//         <label className="block text-blue-700 font-semibold mb-2 flex items-center">
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//           </svg>
//           Campaign Name
//         </label>
//         <input
//           type="text"
//           value={jobName}
//           onChange={(e) => setJobName(e.target.value)}
//           placeholder="Holi Offer 1 (2025)"
//           className="w-full border-2 border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-blue-800 bg-white shadow-sm"
//         />
//       </div>

//       {/* File & Message Box */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* File Upload */}
//         <div className="border-2 border-blue-300 bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center text-blue-700 font-semibold mb-4">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//             </svg>
//             Upload Media
//           </div>
//           <label className="cursor-pointer border-2 border-indigo-600 text-indigo-700 text-sm px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition-all flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
//             </svg>
//             Select File
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </label>

//           {fileDataUrl && (
//             <div className="mt-6 w-full max-h-48 overflow-hidden flex justify-center bg-gray-50 p-2 rounded-lg">
//               <img
//                 src={fileDataUrl}
//                 alt="Preview"
//                 className="rounded-lg border border-blue-200 max-h-44 object-contain"
//               />
//             </div>
//           )}
          
//           {file && (
//             <div className="mt-2 text-sm text-indigo-700 font-medium">
//               {file.name}
//             </div>
//           )}
//         </div>

//         {/* Message Box */}
//         <div className="border-2 border-blue-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center text-blue-700 font-semibold mb-4">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
//             </svg>
//             Message / Caption
//           </div>
//           <textarea
//             className="w-full h-40 border-2 border-blue-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-blue-800 bg-gray-50"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type your message or caption here..."
//           ></textarea>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={handleCreateJob}
//           className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-blue-700 transition shadow-lg hover:shadow-xl flex items-center font-medium"
//         >
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//           </svg>
//           Create Campaign
//         </button>
//       </div>
//     </div>
//   );
// }




































// CreateJob.jsx
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


  console.log("Selected Groups:", setGroups);
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const toggleGroup = (group) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileDataUrl(reader.result);
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
      fileUrl: fileDataUrl,
    };

    addJob(newJob);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto mb-32 rounded-2xl bg-white shadow-xl border border-blue-100 overflow-hidden">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 py-6 px-8 text-white">
          <h1 className="text-3xl font-bold tracking-tight">Create New Campaign</h1>
          <p className="mt-1 text-indigo-100">Design your perfect messaging campaign</p>
        </div>

        <div className="p-8">
          {/* Contact Group */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-indigo-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Contact Groups
              </h2>
              <button
                onClick={() => navigate("/data")}
                className="text-xl font-bold w-10 h-10 flex items-center justify-center border-2 border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md"
                title="Add new contact group"
              >
                +
              </button>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 shadow-inner">
              <div className="flex flex-wrap gap-3">
                {groups.map((group) => (
                  <label
                    key={group}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                      selectedGroups.includes(group)
                        ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-indigo-300 hover:shadow-sm"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedGroups.includes(group)}
                      onChange={() => toggleGroup(group)}
                      className={`mr-2 h-4 w-4 ${
                        selectedGroups.includes(group) ? "accent-white" : "accent-indigo-500"
                      }`}
                    />
                    {group}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Name */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-indigo-800 mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Campaign Name
            </label>
            <input
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              placeholder="Holi Offer 1 (2025)"
              className="w-full border-2 border-indigo-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-medium text-indigo-900 bg-indigo-50 shadow-sm placeholder-indigo-300"
            />
          </div>

          {/* File Upload and Message Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* File Upload */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Upload Media
                </div>
              </div>
              <div className="bg-white p-6 flex flex-col items-center justify-center min-h-[200px]">
                {!fileDataUrl ? (
                  <div className="flex flex-col items-center">
                    <div className="mb-4 p-10 border-2 border-dashed border-indigo-300 rounded-lg bg-indigo-50 text-indigo-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <label className="cursor-pointer bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-medium px-6 py-3 rounded-full transition-all flex items-center shadow-md hover:shadow-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Select File
                      <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full max-h-48 overflow-hidden flex justify-center bg-indigo-50 p-3 rounded-lg mb-4">
                      <img
                        src={fileDataUrl}
                        alt="Preview"
                        className="rounded-lg border border-indigo-200 max-h-44 object-contain"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-indigo-700 font-medium truncate max-w-[150px]">
                        {file.name}
                      </div>
                      <button 
                        onClick={() => {
                          setFile(null);
                          setFileDataUrl(null);
                        }}
                        className="p-1 rounded-full bg-indigo-100 text-indigo-500 hover:bg-indigo-200 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Message Box */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Message / Caption
                </div>
              </div>
              <div className="bg-white p-4">
                <textarea
                  className="w-full h-48 border-2 border-blue-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-blue-900 bg-blue-50 resize-none shadow-inner"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or caption here..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleCreateJob}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 hover:from-indigo-700 hover:via-blue-700 hover:to-blue-600 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Create Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}