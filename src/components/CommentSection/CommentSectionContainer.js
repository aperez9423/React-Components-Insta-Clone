// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [data, setData] = useState(props.comments);

  return (
    <div> 
      {data.map (p => ( 
        <Comment key = {p.id} comment = {p} />
      ))}   
    <CommentInput />
    </div>
  )
};


export default CommentSection;
