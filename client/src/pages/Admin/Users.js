import React from "react";
import AdminMenu from "../../components/LayOut/AdminMenu";
import LayOut from "./../../components/LayOut/LayOut";

const Users = () => {
  return (
    <LayOut title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Users;