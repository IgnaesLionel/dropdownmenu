import React from "react";
import Image from "next/image";

const DropdownItem = (props) => {
  console.log(props);
  return (
    <a href="#" className="menu-item">
      <Image src={props.iconLeft} height={30} width={100} />
      {props.children}
    </a>
  );
};

export default DropdownItem;
/* */
