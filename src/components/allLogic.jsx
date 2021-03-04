import React, { Component } from 'react';
import Moment from 'react-moment';



function CommentN(props) {

   
   return (
      <>
         <div className="Comment">
            <div className="UserInfo">
               <AvatarN user={props.author} />
               <div className="UserInfo-name">
                  {props.author.name}
               </div>
               <div className="Comment-text">
                  {props.text}
               </div>
               <div className="Comment-data">
                  <Moment>{Date.now()}</Moment>
               </div>
            </div>
         </div>
      </>
   );
}

// user info component
function UserInfoN(props) {
   return (
      <div className="UserInfo">
         <AvatarN user={props.user} />
         <div className="UserInfo-name">
            {props.user.name}
         </div>
      </div>
   )
}


// avatar component
function AvatarN(props) {
   return (
      <img
         className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
      />
   )
}



export default CommentN;