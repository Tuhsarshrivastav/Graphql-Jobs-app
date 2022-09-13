import React from "react";

const Job = ({ item }) => {
  return (
    <div
      className="py-8 flex flex-wrap md:flex-nowrap 
    "
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">
          {item.company.name}
        </span>
        <span className="mt-1 text-gray-500 text-sm">
          {item.remotes.map((remote) => remote.name)}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {item.title}
        </h2>

        <span className="text-gray-500 inline-flex items-center mt-4 flex-wrap">
          {item.tags.map((tag) => (
            <p className="mr-2 mb-2 cursor-pointer border p-1 rounded-sm bg-slate-50">
              {tag.name}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Job;
