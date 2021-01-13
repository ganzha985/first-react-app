import React from 'react';
import m from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={m.nav}>
        <div className={m.item}>
          <a>Profile</a>
        </div>
        <div className={m.item}>
          <a>Messages</a>
        </div>
        <div className={m.item}>
          <a>News</a>
        </div>
        <div className={m.item}>
          <a>Music</a>
        </div>
      </nav>
    )
}

export default Navbar;