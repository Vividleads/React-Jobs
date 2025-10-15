import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import jobsData from '../jobs.json'; // ✅ Import local JSON (adjust path if needed)

const JobsListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Replace API fetch with local JSON data
    setJobs(isHome ? jobsData.slice(0, 3) : jobsData);
    setLoading(false);
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;
