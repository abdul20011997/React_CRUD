import React,{Component} from "react";
import './App.css';
import Post from "./post/post";
import CreatePost from "./createpost/createpost";
import SinglePost from "./singlepost/singlepost";

import {Route, NavLink} from "react-router-dom";

class App extends Component{
 
  render(){
  return (
    <div>
      <nav className="navbar">
        <ul>
            <li><NavLink to="/React_CRUD" exact>Home</NavLink></li>
            <li><NavLink to="/createpost">Add Post</NavLink></li>
        </ul>
      </nav>
      <Route path="/createpost" exact component={CreatePost}/>
      <Route path="/createpost/:id" component={CreatePost}/>
      <Route path="/singlepost/:id" component={SinglePost}/>
      <Route path='/React_CRUD' exact component={Post} />
      
    </div>
  );
  }
}

export default App;
