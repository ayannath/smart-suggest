import React,{useState,useEffect} from "react";
import Dashboard from "../Dashboard/dashboardnew";
import Sidebar from "../Sidebar/sidebar";
import Sidepanel  from "../SidePanel/sidepanel";
import "../../App.css"

const Layout = () => {
  return (
    <>
    <div className="main-div">
    {/* <Sidepanel/> */}
      <Sidebar/>
      <Dashboard />
      <Sidepanel/>
      </div>
      
    </>
  );
};

export default Layout;
