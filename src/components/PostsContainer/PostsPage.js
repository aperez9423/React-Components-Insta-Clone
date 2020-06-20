//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data.js";


const PostsPage = () => {
  const [data, setData] = useState (dummydata);
  return (
    <div className="posts-container-wrapper">
      {data.map (p => ( 
        <Post key = {p.id} post = {p} />
    ))}    
    </div>
  );
};

export default PostsPage;
