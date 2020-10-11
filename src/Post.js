import React from 'react';
import"./Post.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
const Post = () => {
    return (
        <div className="post">
        
        <div className="post__photo"><img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" />
        <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" /><img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        
        </div>
        <div className="post__input">
          <div className="post__up"><Avatar/>
           <input type ="text" placeholder ="what is your in mind " /></div> 
       
           <div className="post__down">
          <div className="post__hover">
            <VideocamIcon className="video" />
            <h3>Live video</h3>
          </div>
          <div className="post__hover">
            <InsertPhotoIcon className="photo" />
            <h3>Photo/Video</h3>
          </div>
          <div className="post__hover">
            <EmojiEmotionsOutlinedIcon className="emoji" />
            <h3>Feeling/Activity</h3>
          </div>
        
            
            
            

        </div>
        </div>
        <div className="post__room">
        <div className="post__roomUp">
          <div className="post__roomLeft">
            <VideoCallIcon />
            <h3 className="room__f">Rooms</h3>
            <h3 className="room__font">.Video chat with friends</h3>
          </div>
          <div className="post__roomRight">
            <h3>Create Room</h3>
          </div>        
        </div>
        <div className="post__roomDown">
            <Avatar/>
            <Avatar/>
            <Avatar/>
            <Avatar/>
            <Avatar/>
        </div>
      </div>
        </div>
    )
}

export default Post;
