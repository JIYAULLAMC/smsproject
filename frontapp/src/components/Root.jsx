import React from "react";
import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import BodyArea from "./BodyArea";

function Root() {
  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>
        <div className="col-10">
          <BodyArea />
        </div>
      </div>
    </div>
  );
}

export default Root;
