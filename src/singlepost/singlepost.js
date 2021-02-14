import React, { useEffect,useState } from "react";
import { Redirect, withRouter } from "react-router";
import Loader from "../loader/loader";
import "./singlepost.css";
const Singlepost=(props)=>{
    const title1={color: "darkgrey"};
    const title2={color: "#c5c526"};
    const[getPost,changePost]=useState('');
    const[getName,changeName]=useState('');
    const[errormsg,storeerrormsg]=useState('');


    const[getLoading,changeLoading]=useState(false);
    const[getRedirect,changeRedirect]=useState(false);


    useEffect(()=>{
        console.log("single post render");
        if(!localStorage.getItem("userid") || !localStorage.getItem("jsonwebtoken")){
            changeRedirect(true);
           }
        changeLoading(true);
        const id=props.match.params.id;
        fetch('http://localhost:4000/feed/singlepost/'+id,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }
        ).then(res=>{
            changeLoading(false);
            if(res.status===404){
                storeerrormsg('Post Not Found');
                console.log(res.status);
                throw new Error('Post Not Found');
            }
            if(res.status===401){
                this.setState({
                    errormsg:"Invalid Token"
                })
                throw new Error("Invalid Token")
            }
            return res.json();
        }).then(data=>{
            console.log(data.singlepost);
            changePost(data.singlepost)
            changeName(data.singlepost.user.username)
            // console.log(getPost.user.username);
        }).catch(err=>{
            storeerrormsg(err.message);
        })
    },[]);
    let loader=<Loader/>
    if(getRedirect){
        loader=<Redirect to="/login"/>
    }
    if(!getLoading){
        loader=(
            <div style={{textAlign: "center"}}>
                <h1>{getName} Posted on {new Date(getPost.createdAt).toLocaleDateString('en-US')}</h1>
                <h2 style={title1}>{getPost.title}</h2>
                <h3 style={title2}>{getPost.content}</h3>
                <img src={"http://localhost:4000/"+getPost.imageUrl} style={{    width: "300px"}}/>
            </div>
        )
    }
    return (
            <div>
            {loader}
            {errormsg ? <div className="errormsg">{errormsg}</div> : ' ' }
           </div>
    )
}
export default withRouter(Singlepost);