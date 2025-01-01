import React from "react";
import FilterSlice from "./FilterSlice";

function Header() {
  return (
    <div className="bg-desaturated-dark-cyan w-screen h-32 mb-20 relative">
      <FilterSlice></FilterSlice>
    </div>
  );
}

export default Header;
