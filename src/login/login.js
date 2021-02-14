import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Styled from "./login.module.css";
class Login extends Component{
    state={
        email:'',
        password:'',
        errormsg:'',
        redirect:false
    };
    getemail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    getpassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    login=()=>{
      fetch('http://localhost:4000/login',{
          method:'POST',
          body:JSON.stringify({
            email:this.state.email,
            password:this.state.password
          }),
          headers:{
              'Content-Type':'application/json'
          }

      }).then(res=>{
          if(res.status===403){
            this.setState({
                errormsg:"Wrong username"
            })
              throw new Error("Wrong username");
          }
          if(res.status===401){
            this.setState({
                errormsg:'Incorrect Password'
            })
            throw new Error("Incorrect Password");
          }
          return res.json()
      }).then(data=>{
          console.log(this.props);
        if(data.message=="Login Success"){
        localStorage.setItem('userid', data.userid);
        localStorage.setItem('jsonwebtoken', data.token);

           this.setState({
               redirect:true
           })
        }
      }).catch(err=>{
          this.setState({
              errormsg:err.message
          })
          console.log(err.message);
      })
    }
    render(){
        return(
            <div>
                {
                    this.state.redirect ? <Redirect to="/React_CRUD"/>  : ''
                }
                <div className={Styled.container}>
                    <h1 className={Styled.heading}>Login Form</h1>
                    <label className={Styled.label}>Email</label>
                    <input className={Styled.inputbox} type="email" placeholder="Enter email"  name="email" onChange={this.getemail}/>
                    <label className={Styled.label}>Password</label>
                    <input className={Styled.inputbox} type="Password" placeholder="Enter password"  name="password" onChange={this.getpassword}/>
                    <button className={Styled.button} onClick={this.login}>Login</button>
                    <Link to="/signup" className={Styled.newaccount}>Create New Account</Link>
                </div>
                {this.state.errormsg ? <div className={Styled.errormsg}>{this.state.errormsg}</div> :''}
            </div>
                          
        )
    }
}
export default Login;