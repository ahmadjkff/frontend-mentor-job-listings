import React, { useContext } from "react";
import { MyContext } from "./Context";

function Job({
  logo,
  company,
  isnew,
  featured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) {
  const { includes, setState, filterState } = useContext(MyContext);

  function handler(x) {
    if (includes(x)) {
      filterState(x);
      return;
    }
    setState((prev) => [...prev, x]);
  }

  return (
    <div
      className={`flex gap-5 relative shadow-md p-6 rounded-md lg:mx-[135px] lg:flex-row lg:items-center lg:my-10 lg:pt-6 xs2:my-16 xs2:items-start xs2:mx-10 xs2:flex-col xs2:p-3 xs2:pt-16 ${isnew && featured ? "border-l-4 border-desaturated-dark-cyan" : ""}`}
    >
      <img
        className="lg:static xs2:absolute xs2:-top-10 xs2:w-auto"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col justify-center gap-1 lg:border-none xs2:border-b-2 xs2:border-light-grayish-cyan xs2:pb-3 xs2:w-full">
        <div className="flex items-center gap-3">
          <h5 className="text-desaturated-dark-cyan font-bold">{company}</h5>
          <div
            className={`bg-desaturated-dark-cyan px-2 py-1 rounded-xl text-white text-xs font-bold ${isnew ? "" : "hidden"}`}
          >
            <span className="">NEW!</span>
          </div>
          <div
            className={`bg-very-dark-grayish-cyan text-white rounded-full py-1 px-2 text-xs font-bold ${featured ? "" : "hidden"}`}
          >
            FEATURED
          </div>
        </div>
        <h4 className="font-bold text-lg">{position}</h4>
        <div className="flex text-dark-grayish-cyan">
          <span>{postedAt}</span>
          <span className="mx-3">•</span>
          <span>{contract}</span>
          <span className="mx-3">•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="flex gap-4 lg:ml-auto lg:flex-nowrap xs2:items-center xs2:flex-wrap">
        <button
          className={`p-1 rounded-md text-desaturated-dark-cyan ${includes(role) ? "bg-desaturated-dark-cyan text-white" : "bg-light-grayish-cyan-bg"}`}
          onClick={() => handler(role)}
        >
          {role}
        </button>
        <button
          className={`p-1 rounded-md text-desaturated-dark-cyan ${includes(level) ? "bg-desaturated-dark-cyan text-white" : "bg-light-grayish-cyan-bg"}`}
          onClick={() => handler(level)}
        >
          {level}
        </button>
        {languages.map((language) => {
          return (
            <button
              key={language}
              className={`p-1 rounded-md text-desaturated-dark-cyan ${includes(language) ? "bg-desaturated-dark-cyan text-white" : "bg-light-grayish-cyan-bg"}`}
              onClick={() => handler(language)}
            >
              {language}
            </button>
          );
        })}
        {tools.map((tool) => {
          return (
            <button
              key={tool}
              className={`p-1 rounded-md text-desaturated-dark-cyan ${includes(tool) ? "bg-desaturated-dark-cyan text-white" : "bg-light-grayish-cyan-bg"}`}
              onClick={() => handler(tool)}
            >
              {tool}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Job;
