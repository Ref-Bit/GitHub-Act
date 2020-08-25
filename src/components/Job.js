import React, { useState } from "react";
import ReactMarkDown from "react-markdown";

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white py-8 px-4 my-4 lg:w-1/2 shadow hover:shadow-xl border-b-4 border-white hover:border-gray-900 transition duration-300">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-300">
            Jul
          </span>
          <span className="font-medium text-xl text-gray-800 title-font">
            18
          </span>
        </div>
        <div className="flex-grow pl-6">
          <span className="tracking-widest text-xs title-font bg-blue-500 text-white font-semibold p-1 rounded-full">
            {job.location}
          </span>
          &nbsp;&nbsp;
          <span className="tracking-widest text-xs title-font bg-blue-500 text-white font-semibold p-1 rounded-full">
            {job.type}
          </span>
          <h1 className="title-font text-xl font-medium text-gray-900 my-3">
            {job.title}
          </h1>
          <div className="leading-relaxed mb-5 break-all">
            <h3 className="text-lg text-blue-500 font-semibold">
              How to apply:
            </h3>
            <ReactMarkDown source={job.how_to_apply} />
          </div>
          <button
            onClick={() => {
              document.getElementById("details").style.display = setOpen(!open);
            }}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {!open ? "View Details" : "Hide Details"}
          </button>
          <div
            id="details"
            className="mt-4"
            style={open ? { display: "block" } : { display: "none" }}
          >
            <ReactMarkDown source={job.description} />
          </div>
        </div>
        <div
          className="flex flex-col text-center leading-none"
          style={{ textAlign: "-webkit-center" }}
        >
          <img
            alt="company logo"
            src={
              job.company_logo
                ? job.company_logo
                : `https://dummyimage.com/250x250&text=${job.company}`
            }
            className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
          />
          <a href={job.company_url}>
            <span className="flex-grow flex flex-col">
              <span className="title-font font-medium text-gray-900 w-32 mt-2">
                {job.company}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
