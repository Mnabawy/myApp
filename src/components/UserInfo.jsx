import React from "react";
import Avatar from "./avatar";

export default function UserInfo(props) {
   console.log(props)
   return (
      <div className="Userinfo">
         <Avatar author={props.user} />
         <div className="Username">
            <h1>
               {props.user.name}
            </h1>
         </div>
      </div>
   )
}