import React from "react";

// plueprint for a author component
export default function Avatar(props) {
   return (
      <img
         className="Avatar"
         src={props.author.avatarUrl}
         alt={props.author.name}
      />
   )
}