import React, { useState } from "react";
import Image from "next/image";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <Image src={props.icon} height={100} width={100} />
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
