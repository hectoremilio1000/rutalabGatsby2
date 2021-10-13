import React from "react";
import NavDashboard from "./navDashboard";
import "../styles/sidebarDashboard.css";
import SubMenu from "./SubMenu";
import { SidebarData } from "./sideBarData";

const SidebarDashboard = props => {
  const { navSidebar, show_sidebar } = props;
  const avatar_user =
    "https://image.freepik.com/foto-gratis/hombre-joven-sonriente-playa_23-2147645587.jpg";
  const logo =
    "https://imagenesrutalab.s3.amazonaws.com/rutalab/logo_rutalab_final.png";
  const logo_name =
    "https://imagenesrutalab.s3.amazonaws.com/rutalab/nombre_rutalab_final+copy.png";

  return (
    <>
      <div
        className={`overlay-sidebar ${
          !navSidebar ? "overlay-sidebar-show" : ""
        }`}
        onClick={show_sidebar}
        onKeyDown={show_sidebar}
      ></div>
      <NavDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />
      <aside
        className={`aside-dashboard ${!navSidebar ? "closed_sidebar" : ""}`}
      >
        <div className="header-aside">
          <div className="logo">
            <img src={logo} alt="logo-img" className="logo-icon" />
            <img src={logo_name} alt="logo-img" className="logo-name" />
          </div>
        </div>
        <div className="main">
          <div className="perfil-user">
            <img src={avatar_user} alt="img_avatar_user" />
            <p>Jampier Smith Vasquez Mija</p>
          </div>

          <ul className="nav-links">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarDashboard;
