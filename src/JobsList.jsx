import React, { useContext } from "react";
import Job from "./Job";
import { MyContext } from "./Context";

function JobsList() {
  const { data } = useContext(MyContext);
  return (
    <div>
      {data?.map((job) => (
        <Job
          key={job.id}
          logo={job.logo}
          company={job.company}
          isnew={job.new}
          featured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </div>
  );
}

export default JobsList;
