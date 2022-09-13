import React from "react";
import Job from "./Job";

const Jobs = ({ JobsInfo }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-200">
          {JobsInfo.length > 0 && JobsInfo.map((item) => <Job item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
