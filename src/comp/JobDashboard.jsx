
import { useNavigate } from "react-router-dom";
import { useJob } from "../JobContext";

export default function JobDashboard() {
  const navigate = useNavigate();
  const { jobs } = useJob();

  return (
<div className="max-w-6xl mx-auto mt-10 p-8 bg-blue-50 shadow-xl rounded-xl border border-blue-200">
  {/* Header Section */}
  <div className="flex flex-col justify-end items-end gap-4 mb-6">
    <h2 className="text-xl text-blue-700 font-semibold">
      <span className="font-medium text-emerald-600">WP Status:</span> Ready
    </h2>
    <button
      onClick={() => navigate("/create-job")}
      className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
    >
      + Create Job
    </button>
  </div>

  {/* Table Container */}
  <div className="border border-blue-300 rounded-lg overflow-hidden">
    {/* Table Header */}
    <div className="flex bg-blue-100 text-blue-700 font-semibold px-4 py-3 border-b border-blue-300">
      <div className="w-[5%]">#</div>
      <div className="w-[35%]">Job Title</div>
      <div className="w-[35%]">Start Time</div>
      <div className="w-[25%]">Send Status</div>
    </div>

    {/* Job List */}
    <div className="max-h-[400px] overflow-y-auto">
      {jobs.length === 0 ? (
        <div className="p-4 text-blue-500 text-center">No jobs available.</div>
      ) : (
        jobs.map((job, index) => (
          <div
            key={index}
            className="flex px-4 py-3 items-center border-b border-blue-200 hover:bg-blue-100 cursor-pointer transition"
            onClick={() => navigate(`/job/${index}`, { state: { job } })}
          >
            <div className="w-[5%] text-blue-800">{index + 1}</div>

            {/* Job Title + Image */}
            <div className="w-[35%] flex items-center gap-3">
              {job.fileUrl ? (
                <img
                  src={job.fileUrl}
                  alt="Job"
                  className="w-10 h-10 object-cover border border-blue-300 rounded-md"
                />
              ) : (
                <div className="w-10 h-10 border border-blue-300 rounded-md flex items-center justify-center text-blue-400">
                  ❓
                </div>
              )}
              <span className="text-blue-800">{job.title}</span>
            </div>

            <div className="w-[35%] text-blue-700">{job.startTime}</div>
            <div className="w-[25%] text-emerald-600 font-medium">{job.sendStatus}</div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

  
  
  );
}
