import React from "react";
import Sidebar from "./Sidebar";
import Post from "./Post";
import "./SidebarM.css";
import Feed from "./Feed";

const Sidebarn = () => {
  return (
    <div className="sidebarM">
     <div className="sidebar__l"><Sidebar /></div> 
      <div className="sidebar__c"><Post /></div>
      <div className="sidebar__r"><Feed /></div>

    </div>
  );
};

export default Sidebarn;