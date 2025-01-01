import React, { useContext } from "react";
import { MyContext } from "./Context";
import removeIcon from "../images/icon-remove.svg";

function FilterSlice() {
  const { state, clearState, filterState } = useContext(MyContext);
  {
    return state.length ? (
      <div className="absolute top-24 mx-[135px] max-w-[82%] p-4 shadow-lg bg-white rounded-md flex gap-5 justify-between w-full lg:mx-[135px] lg:flex-row xs2:top-8 xs2:mx-10 xs2:p-3">
        <div className="flex gap-5 flex-wrap  transition-transform transform duration-300 ease-in-out">
          {state.map((item) => (
            <span
              key={item}
              className="relative bg-light-grayish-cyan-bg py-1 pl-4 pr-6 rounded-md text-desaturated-dark-cyan flex gap-2 items-center"
            >
              {item}
              <button
                className={`absolute right-0 hover:bg-very-dark-grayish-cyan h-full p-1 rounded-md bg-desaturated-dark-cyan`}
                onClick={() => filterState(item)}
              >
                <img src={removeIcon} alt="" />
              </button>
            </span>
          ))}
        </div>
        <button
          className="text-desaturated-dark-cyan underline justify-self-end"
          onClick={() => clearState()}
        >
          Clear
        </button>
      </div>
    ) : (
      ""
    );
  }
}

export default FilterSlice;
