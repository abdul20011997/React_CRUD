import React,{Component} from "react";
import './Navigation.css';
import {Redirect,NavLink} from "react-router-dom";

class Navigation extends Component{
   state={
  redirect:false
 }
 componentDidMount(){
   console.log("app js render");
   if(!localStorage.getItem("userid") && !localStorage.getItem("jsonwebtoken")){
    this.setState({
      redirect:true
     })
   }
 }
  logout=()=>{
    localStorage.removeItem("userid");
    localStorage.removeItem("jsonwebtoken");

    this.setState({
      redirect:true
    })
  }
  render(){
     let navAuth;
    if(!localStorage.getItem("userid") && !localStorage.getItem("jsonwebtoken")){
        navAuth=<li style={{float:"right"}}><NavLink to="/login" exact>Login</NavLink></li>
    }
    else{
        navAuth=<li style={{float:"right"}} onClick={this.logout}><a>Logout</a></li>
    }
    return(
      <div>
          {this.state.redirect ? <Redirect to="/login"/> : ''} 

           <nav className="navbar">
              <ul>
                  <li><NavLink to="/React_CRUD" exact>Home</NavLink></li>
                  <li><NavLink to="/createpost" exact>Add Post</NavLink></li>
                  {
                    navAuth
                  }
                  
              </ul>
            </nav>
      </div>

    )
                }
              }
export default Navigation;
