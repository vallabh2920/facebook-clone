import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar ,IconButton} from '@material-ui/core';
import "./Header.css";

const Header = () => {
    return (
        <div className="header"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
           <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="search Facebook" />
                       </div>
      <div className="header__center">
          <div className = "header__centerOption">  <label > </label><HomeIcon /> </div>
          <div className = "header__centerOption"> <FlagIcon /> </div>
          <div className = "header__centerOption"> <SubscriptionsIcon/> </div>
          <div className = "header__centerOption"> <StorefrontRoundedIcon /> </div>
          <div className = "header__centerOption"> <SupervisedUserCircleSharpIcon /> </div>

   
          
      </div>
      <div className="header__right">
        <div className="header__rightPhoto"><Avatar src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.0-9/69595693_697908483970282_665390717341794304_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=QP7rsys2ykgAX-Dk9xz&_nc_ht=scontent.fbom2-1.fna&oh=987363aa6ec1e63f6643afd16452f879&oe=5F83E23D" />
          <h3> vallabh</h3></div>
          
          <IconButton>
          <QuestionAnswerIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
           
        </div>
    )
}

export default Header
