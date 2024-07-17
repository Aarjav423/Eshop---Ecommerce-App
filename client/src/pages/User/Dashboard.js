import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import UserMenu from "../../components/LayOut/UserMenu";
import { useAuth } from "../../context/auth";
export const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <LayOut title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

// export default Dashboard;