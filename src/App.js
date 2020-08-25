import React, { useState } from "react";
import useFetchJobs from "./hooks/useFetchJobs";
import Job from "./components/Job";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const handleParamsChange = (e) => {
    const param = e.target.name;
    const val = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: val };
    });
  };

  return (
    <section className="text-gray-700 body-font bg-gray-100 py-3">
      <div className="container mx-auto">
        <h1 className="text-6xl text-center">Github Jobs</h1>
        <Search params={params} onParamsChange={handleParamsChange} />
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <div className="loading mt-5 mx-auto"></div>}
        {error && <h1>Error, something went wrong...</h1>}
        <div className="flex flex-wrap -mx-4 my-8 overflow-hidden">
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </div>
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>
      <Footer />
    </section>
  );
}

export default App;
