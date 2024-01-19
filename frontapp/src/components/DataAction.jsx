import React from "react";

function DataAction() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Create
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Update
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DataAction;
