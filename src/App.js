import React,{Component} from "react";
import Post from "./post/post";
import Navigation from "./Navigation/Navigation";
import CreatePost from "./createpost/createpost";
import SinglePost from "./singlepost/singlepost";
import Signup from "./signup/signup";
import Login from "./login/login";
import {Route} from "react-router-dom";

class App extends Component{
  render(){
  return (
    <div>
      <Navigation/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/createpost" exact component={CreatePost}/>
      <Route path="/createpost/:id" component={CreatePost}/>
      <Route path="/singlepost/:id" component={SinglePost}/>
      <Route path='/React_CRUD' exact component={Post} />
      
    </div>
  );
  }
}

export default App;
