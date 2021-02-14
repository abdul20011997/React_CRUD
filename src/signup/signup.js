import React,{Component, useState} from "react";
import { useHistory, withRouter } from "react-router";
import Styled from "./signup.module.css";

const Signup=()=>{
    const [username,storeusername]=useState('');
    const [email,storeemail]=useState('');
    const [password,storepassword]=useState('');
    const [confirmpassword,storeconfirmpassword]=useState('');
    const [passworderrormsg,storeerrorpassword]=useState('');
    const [confirmpassworderrormsg,storeerrorconfirmpassword]=useState('');
    const [emailerrormsg,storeerroremail]=useState('');
    const [usernameerrormsg,storeerrorusername]=useState('');
    const [pcerrormsg,storeerrorpc]=useState('');
    const [errormsg,storeerrormsg]=useState('');



    let history = useHistory();

    const signup=(props)=>{
        if(username==''){
            storeerrorusername(true);
        }
        if(password==''){
            storeerrorpassword(true);
        }
        if(confirmpassword==''){
            storeerrorconfirmpassword(true);
        }
        if(email==''){
            storeerroremail(true);
        }
        if(password !== confirmpassword){
            return storeerrorpc(true);
        }
        else{
            storeerrorpc(false);
        }
        if(username!='' && email!='' && password!='' && confirmpassword!='' && !usernameerrormsg && !passworderrormsg && !confirmpassworderrormsg && !emailerrormsg && !pcerrormsg){
            fetch('http://localhost:4000/signup',{
                method:'POST',
                body:JSON.stringify({
                    username:username,
                    email:email,
                    password:password,
                    confirmpassword:confirmpassword
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>{
                if(res.status===401){
                    storeerrormsg('User Already Exist')
                    throw new Error('User Already Exist');
                }
                return res.json();
            }).then(data=>{
                console.log(data.message);
                storeerrormsg(data.message);
                history.push('/login')
            }).catch(err=>{
                storeerrormsg(err.message);
                console.log(err);
            })
        }
        
    }
    const getusername=(event)=>{
        console.log(event.target.value);
        if(event.target.value!=''){
            storeusername(event.target.value);
            storeerrorusername(false);
        }
        else{
            storeerrorusername(true);
        }
    }
    const getemail=(event)=>{
        var email=event.target.value;
        var reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
       var test = reg.test(email);
       if (test) {
        storeerroremail(false);
        storeemail(event.target.value);
       }else{
         storeerroremail(true);
    } 
        console.log(event.target.value);
        
    }
    const getpassword=(event)=>{
        var pass = event.target.value;
       var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
       var test = reg.test(pass);
       if (test) {
        storeerrorpassword(false);
        storepassword(event.target.value);
       }else{
         storeerrorpassword(true);
    } 
        console.log(event.target.value);
       
    }
    const getconfirmpassword=(event)=>{
        console.log(event.target.value);
        var pass = event.target.value;
       var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
       var test = reg.test(pass);
       if (test) {
        storeerrorconfirmpassword(false);
        storeconfirmpassword(event.target.value);
       }else{
         storeerrorconfirmpassword(true);
    } 
       
    }
    return(
        <div>
             <div className={Styled.container}>
                        <h1 className={Styled.heading}>Signup Form</h1>
                        <label className={Styled.label}>Username</label>
                        <input className={Styled.inputbox} type="text" placeholder="Enter username" name="username" onChange={getusername}/>
                        {usernameerrormsg ? <div>Kindly enter user name</div> : ''}
                        <label className={Styled.label}>Email</label>
                        <input className={Styled.inputbox} type="email" placeholder="Enter email"  name="email" onChange={getemail}/>
                        {emailerrormsg ? <div>kindly enter valid email</div>:''}
                        <label className={Styled.label}>Password</label>
                        <input className={Styled.inputbox} type="Password" placeholder="Enter password"  name="password" onChange={getpassword}/>
                        {passworderrormsg ? <div>kindly enter password</div>:''}
                        <label className={Styled.label}>Confirm Password</label>
                        <input className={Styled.inputbox} type="Password" placeholder="Enter password"  name="confirmpassword" onChange={getconfirmpassword}/>
                        {confirmpassworderrormsg ? <div>kindly enter confirm password</div>:''}
                        {pcerrormsg ? <div>confirmpassword does not match</div>:''}
                        <button className={Styled.button} onClick={signup}>Signup</button>
              </div>
              {errormsg ? <div className={Styled.errormsg}>{errormsg}</div> :''}  
        </div>
       
    )

}
export default withRouter(Signup);