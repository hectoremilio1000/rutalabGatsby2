import React, { useState } from "react";
import { Link } from "gatsby";

const MenuNav = ({ item, index, setView_container }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <li
        key={index}
        className="links-menu-dashboard"
        role="presentation"
        onClick={item.subNav && showSubnav}
      >
        <div className={`link-block ${subnav ? "link-active" : ""}`}>
          <div className="left-link">
            <div
              className="toggle-drop"
              role="presentation"
              onClick={() => {
                setView_container(`${item.path}`);
              }}
            >
              {item.icon} <p>{item.title}</p>
            </div>
          </div>
          {item.subNav && subnav ? (
            <div className="right-link">{item.iconOpened}</div>
          ) : item.subNav ? (
            <div className="right-link">{item.iconClosed}</div>
          ) : null}
        </div>
        {item.subNav ? (
          <ul className={`submenu-nav ${subnav ? "show-menu" : ""}`}>
            {item.subNav &&
              item.subNav.map((item, index) => {
                return (
                  <li className="link-submenu">
                    <Link to={item.path} className="dropdown-items" key={index}>
                      {item.icon} {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </li>
    </>
  );
};

export default MenuNav;
