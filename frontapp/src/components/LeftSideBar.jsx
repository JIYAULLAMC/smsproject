import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSubtab } from "../features/leftsidebar/leftsidebarSlice";

function LeftSideBar() {
  const { activeTab } = useSelector((store) => store.navbars);
  const { allSubtabs, activeSubTab } = useSelector((store) => store.subtabbar);
  const subTabs = allSubtabs[activeTab];
  const dispatch = useDispatch();

  const onChangeSubtab = (subTabname) => {
    dispatch(changeSubtab(subTabname));
  };

  return (
    <div>
      <div className="p-2">
        <ul className="list-unstyled">
          {subTabs.map((subtab) => {
            return (
              <li className="mb-1 d-grid" key={subtab}>
                <button
                  className={`btn d-block ${
                    subtab === activeSubTab ? "active btn-primary" : null
                  }`}
                  onClick={() => onChangeSubtab(subtab)}
                >
                  {subtab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftSideBar;
