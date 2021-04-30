import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <DropdownItem iconLeft="/icons/cog.svg" rightIcon="/icons/cog.svg">
        My profile
      </DropdownItem>
      <DropdownItem iconLeft="/icons/cog.svg" rightIcon="/icons/cog.svg">
        Edition
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
