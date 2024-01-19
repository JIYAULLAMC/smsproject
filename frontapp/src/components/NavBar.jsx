import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../features/navbar/navbarSlice";
import { changeSubtab } from "../features/leftsidebar/leftsidebarSlice";

function NavBar() {
  const { allTabs, activeTab } = useSelector((store) => store.navbars);
  const dispatch = useDispatch();

  const handleChangeTab = (tabName) => {
    dispatch(changeTab(tabName));
    dispatch(changeSubtab(tabName));
  };

  return (
    <nav
      className="navbar navbar-expand-sm bg-body-tertiary rounded p-1"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="navbar-collapse">
          <ul className="navbar-nav ">
            {allTabs.map((tabitem) => {
              return (
                <li
                  className={`nav-item mx-2 ${
                    tabitem === activeTab ? "badge bg-primary" : null
                  }`}
                  key={tabitem}
                  onClick={() => handleChangeTab(tabitem)}
                >
                  <a className="nav-link" aria-current="page" href="#">
                    {tabitem}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
