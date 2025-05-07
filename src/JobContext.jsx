

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // ✅ Add this

const JobContext = createContext();

export const useJob = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

// ✅ Add PropTypes validation
JobProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
