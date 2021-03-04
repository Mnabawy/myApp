import React, { Component } from 'react';
import Moment from 'react-moment';
import UserInfo from './UserInfo';

export default function Comment(props) {
   console.log(props)
   return (
      <>
         <UserInfo
            user={props.user}
         />
         <div className="Comment-text">
            <h3>
               {props.text}
            </h3>
         </div>
         <div className="Comment-date">
            <Moment></Moment>
         </div>
      </>
   )
}