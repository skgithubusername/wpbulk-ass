
// import { useNavigate } from "react-router-dom";
// import { useJob } from "../JobContext";

// export default function JobDashboard() {
//   const navigate = useNavigate();
//   const { jobs } = useJob();

//   return (
// <div className="max-w-6xl mx-auto mt-10 p-8 bg-blue-50 shadow-xl rounded-xl border border-blue-200">
//   {/* Header Section */}
//   <div className="flex flex-col justify-end items-end gap-4 mb-6">
//     <h2 className="text-xl text-blue-700 font-semibold">
//       <span className="font-medium text-emerald-600">WP Status:</span> Ready
//     </h2>
//     <button
//       onClick={() => navigate("/create-job")}
//       className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
//     >
//       + Create Job
//     </button>
//   </div>

//   {/* Table Container */}
//   <div className="border border-blue-300 rounded-lg overflow-hidden">
//     {/* Table Header */}
//     <div className="flex bg-blue-100 text-blue-700 font-semibold px-4 py-3 border-b border-blue-300">
//       <div className="w-[5%]">#</div>
//       <div className="w-[35%]">Job Title</div>
//       <div className="w-[35%]">Start Time</div>
//       <div className="w-[25%]">Send Status</div>
//     </div>

//     {/* Job List */}
//     <div className="max-h-[400px] overflow-y-auto">
//       {jobs.length === 0 ? (
//         <div className="p-4 text-blue-500 text-center">No jobs available.</div>
//       ) : (
//         jobs.map((job, index) => (
//           <div
//             key={index}
//             className="flex px-4 py-3 items-center border-b border-blue-200 hover:bg-blue-100 cursor-pointer transition"
//             onClick={() => navigate(`/job/${index}`, { state: { job } })}
//           >
//             <div className="w-[5%] text-blue-800">{index + 1}</div>

//             {/* Job Title + Image */}
//             <div className="w-[35%] flex items-center gap-3">
//               {job.fileUrl ? (
//                 <img
//                   src={job.fileUrl}
//                   alt="Job"
//                   className="w-10 h-10 object-cover border border-blue-300 rounded-md"
//                 />
//               ) : (
//                 <div className="w-10 h-10 border border-blue-300 rounded-md flex items-center justify-center text-blue-400">
//                   ❓
//                 </div>
//               )}
//               <span className="text-blue-800">{job.title}</span>
//             </div>

//             <div className="w-[35%] text-blue-700">{job.startTime}</div>
//             <div className="w-[25%] text-emerald-600 font-medium">{job.sendStatus}</div>
//           </div>
//         ))
//       )}
//     </div>
//   </div>
// </div>

  
  
//   );
// }










// import { useNavigate } from "react-router-dom";
// import { useJob } from "../JobContext";

// export default function JobDashboard() {
//   const navigate = useNavigate();
//   const { jobs } = useJob();

//   return (
//     <div className="max-w-6xl font-serif  mx-auto mt-10 p-8 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-xl border border-blue-200">
//       {/* Header Section */}
//       <div className="flex flex-col justify-end items-end gap-4 mb-6">
//         <h2 className="text-xl text-blue-700 font-semibold">
//           <span className="font-medium text-emerald-600">WP Status:</span>
//           <span className="ml-1 text-emerald-700">Ready</span>
//         </h2>
//         <button
//           onClick={() => navigate("/create-job")}
//           className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-emerald-700 transition shadow-md"
//         >
//           + Create Job
//         </button>
//       </div>

//       {/* Table Container */}
//       <div className="border border-blue-300 rounded-lg overflow-hidden shadow-md">
//         {/* Table Header */}
//         <div className="flex bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 py-3 border-b border-blue-300">
//           <div className="w-[5%]">#</div>
//           <div className="w-[35%]">Job Title</div>
//           <div className="w-[35%]">Start Time</div>
//           <div className="w-[25%]">Send Status</div>
//         </div>

//         {/* Job List */}
//         <div className="max-h-[400px] overflow-y-auto bg-white">
//           {jobs.length === 0 ? (
//             <div className="p-4 text-blue-500 text-center">No jobs available.</div>
//           ) : (
//             jobs.map((job, index) => (
//               <div
//                 key={index}
//                 className="flex px-4 py-3 items-center border-b border-blue-200 hover:bg-blue-50 cursor-pointer transition"
//                 onClick={() => navigate(`/job/${index}`, { state: { job } })}
//               >
//                 <div className="w-[5%] text-blue-800 font-medium">{index + 1}</div>

//                 {/* Job Title + Image */}
//                 <div className="w-[35%] flex items-center gap-3">
//                   {job.fileUrl ? (
//                     <img
//                       src={job.fileUrl}
//                       alt="Job"
//                       className="w-10 h-10 object-cover border border-blue-300 rounded-md shadow-sm"
//                     />
//                   ) : (
//                     <div className="w-10 h-10 border border-blue-300 bg-blue-50 rounded-md flex items-center justify-center text-blue-400">
//                       ❓
//                     </div>
//                   )}
//                   <span className="text-blue-800 font-medium">{job.title}</span>
//                 </div>

//                 <div className="w-[35%] text-blue-700">{job.startTime}</div>

//                 <div className="w-[25%]">
//                   <span
//                     className={`px-3 py-1 rounded-full font-medium ${
//                       job.sendStatus === "Completed"
//                         ? "bg-emerald-100 text-emerald-700"
//                         : job.sendStatus === "Pending"
//                         ? "bg-blue-100 text-blue-700"
//                         : "bg-amber-100 text-amber-700"
//                     }`}
//                   >
//                     {job.sendStatus}
//                   </span>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


















import { useNavigate } from "react-router-dom";
import { useJob } from "../JobContext";
import { PlusCircle, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function JobDashboard() {
  const navigate = useNavigate();
  const { jobs } = useJob();

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            <CheckCircle size={16} />
            <span>{status}</span>
          </div>
        );
      case "In Progress":
        return (
          <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            <Clock size={16} />
            <span>{status}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            <AlertCircle size={16} />
            <span>{status}</span>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl font-sans mx-auto mt-10 p-8 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-xl border border-blue-200">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-800">Job Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
            <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-medium text-emerald-700">System Ready</span>
          </div>
          <button
            onClick={() => navigate("/create-job")}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center gap-2 shadow-md"
          >
            <PlusCircle size={18} />
            Create Job
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <h3 className="text-gray-500 mb-2 text-sm font-medium">Total Jobs</h3>
          <p className="text-3xl font-bold text-blue-800">{jobs.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <h3 className="text-gray-500 mb-2 text-sm font-medium">Completed</h3>
          <p className="text-3xl font-bold text-emerald-600">
            {jobs.filter((job) => job.sendStatus === "Completed").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
          <h3 className="text-gray-500 mb-2 text-sm font-medium">Pending/Active</h3>
          <p className="text-3xl font-bold text-amber-500">
            {jobs.filter((job) => job.sendStatus !== "Completed").length}
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="border border-blue-200 rounded-lg overflow-hidden bg-white shadow-md">
        {/* Table Header */}
        <div className="flex bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-6 py-4">
          <div className="w-[5%]">#</div>
          <div className="w-[40%]">Job Title</div>
          <div className="w-[30%]">Start Time</div>
          <div className="w-[25%]">Status</div>
        </div>

        {/* Job List */}
        <div className="max-h-[400px] overflow-y-auto">
          {jobs.length === 0 ? (
            <div className="p-12 text-blue-500 text-center flex flex-col items-center gap-3">
              <AlertCircle size={48} />
              <p>No jobs available. Create your first job to get started.</p>
            </div>
          ) : (
            jobs.map((job, index) => (
              <div
                key={index}
                className="flex px-6 py-4 items-center border-b border-blue-100 hover:bg-blue-50 cursor-pointer transition"
                onClick={() => navigate(`/job/${index}`, { state: { job } })}
              >
                <div className="w-[5%] text-gray-500 font-medium">{index + 1}</div>

                {/* Job Title + Image */}
                <div className="w-[40%] flex items-center gap-3">
                  {job.fileUrl ? (
                    <img
                      src={job.fileUrl}
                      alt="Job"
                      className="w-12 h-12 object-cover rounded-lg shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400">
                      <Calendar size={24} />
                    </div>
                  )}
                  <div>
                    <p className="text-blue-800 font-medium">{job.title}</p>
                    <p className="text-xs text-gray-500">Job ID: JOB-{1000 + index}</p>
                  </div>
                </div>

                <div className="w-[30%] text-gray-600 flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" />
                  {job.startTime}
                </div>

                <div className="w-[25%]">{getStatusBadge(job.sendStatus)}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
