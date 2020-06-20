/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer.js";
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  return (
    <div className="App">
      <PostsPage />
      <SearchBarContainer/>
    </div>
  );
};

export default App;
