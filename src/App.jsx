import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDashboard from "./comp/JobDashboard";
import CreateJob from "./comp/CreateJob";
import JobDetail from "./comp/JobDetail";
import { useEffect, useState } from "react";
// import AddGroup from "./comp/AddGroup";
import GroupManager from "./comp/GroupManager";
import GroupData from "./comp/GroupData";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobDashboard jobs={jobs} />} />
        <Route path="/create-job" element={<CreateJob />} />
        {/* <Route path="/create-group" element={<AddGroup />} /> */}
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/groupManager" element={<GroupManager />} />
        <Route path="/data" element={<GroupData />} />
      </Routes>
    </Router>
  );
}

export default App;
