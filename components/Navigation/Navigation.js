import React from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const Navigation = () => {
  return (
    <NavBar>
      <NavItem icon="/icons/plus.svg" />
      <NavItem icon="/icons/bell.svg" />
      <NavItem icon="/icons/messenger.svg" />
      <NavItem icon="/icons/caret.svg">
        <DropdownMenu />
      </NavItem>
    </NavBar>
  );
};

export default Navigation;
