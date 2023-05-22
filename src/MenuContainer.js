import React from 'react'
  import { NavLink} from "react-router-dom";


function MenuContainer(props) {
  return (
<li>
    <NavLink

    to={props.path}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
    >
    {props.icon}
    </NavLink>
    </li>
  )
}

export default MenuContainer;