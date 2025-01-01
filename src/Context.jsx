import React, { createContext, useEffect, useState } from "react";
import initdata from "../data.json";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState(initdata);
  const [state, setState] = useState([]);

  function includes(x) {
    return state.includes(x);
  }

  function clearState() {
    setData(initdata); // Reset to original data
    setState([]); // Clear all filters
  }

  function applyFilters() {
    if (!state.length) {
      setData(initdata); // Show all data if no filters are applied
      return;
    }

    setData(
      initdata.filter((job) =>
        state.every((filter) =>
          [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
        )
      )
    );
  }

  useEffect(() => {
    applyFilters();
  }, [state]);

  function filterState(x) {
    setState((prevState) => prevState.filter((item) => item !== x));
  }

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        includes,
        clearState,
        filterState,
        data,
        setData,
        applyFilters,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
