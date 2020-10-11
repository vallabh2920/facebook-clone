import React from 'react'
import "./Sidebar.css";
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import EmojiFlagsRoundedIcon from '@material-ui/icons/EmojiFlagsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import EventIcon from '@material-ui/icons/Event';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { Avatar } from "@material-ui/core";

const sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__right"><Avatar src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.0-9/69595693_697908483970282_665390717341794304_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=QP7rsys2ykgAX-Dk9xz&_nc_ht=scontent.fbom2-1.fna&oh=987363aa6ec1e63f6643afd16452f879&oe=5F83E23D" />
             <h3>Vallabh ingle</h3>
             </div>
             <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png" />
        <h3>Cvoid-19</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
        <h3>Friends</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
        <h3>Groups</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" />
        <h3>Market</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" />
        <h3>Videos</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" />
        <h3>Events</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png" />
        <h3>Memories</h3>
      </div>
      <div className="sidebar__right">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" />
        <h3>Saved</h3>
      </div>
            
        </div>
    )
}

export default sidebar
