import React from "react";
import FilterSlice from "./FilterSlice";
import headerImg from "../public/images/bg-header-desktop.svg";

function Header() {
  return (
    <div className="bg-desaturated-dark-cyan w-screen mb-20 relative">
      <img src={headerImg} alt="" className="w-screen" />
      <FilterSlice></FilterSlice>
    </div>
  );
}

export default Header;
