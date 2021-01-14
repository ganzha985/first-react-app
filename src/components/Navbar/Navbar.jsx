import React from 'react';
import { NavLink } from 'react-router-dom';
import m from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={m.nav}>
      <div className={m.item}>
        <NavLink to="/profile" activeClassName={m.active}>Profile</NavLink>
      </div>
      <div className={m.item}>
        <NavLink to="/dialogs" activeClassName={m.active}>Messages</NavLink>
      </div>
      <div className={m.item}>
        <NavLink to="/news" activeClassName={m.active}>News</NavLink>
      </div>
      <div className={m.item}>
        <NavLink to="/music" activeClassName={m.active}>Music</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;