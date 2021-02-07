import React, { useEffect,useState } from "react";
import { withRouter } from "react-router";
import Loader from "../loader/loader";
const Singlepost=(props)=>{
    const title1={color: "darkgrey"};
    const title2={color: "#c5c526"};
    const[getPost,changePost]=useState('');
    const[getLoading,changeLoading]=useState(false);

    useEffect(()=>{
        changeLoading(true);
        const id=props.match.params.id;
        fetch('http://localhost:4000/feed/singlepost/'+id).then(res=>{
            changeLoading(false);
            return res.json();
        }).then(data=>{
            console.log(data.singlepost);
            changePost(data.singlepost)
        })
    },[]);
    let loader=<Loader/>
    if(!getLoading){
        loader=(
            <div style={{textAlign: "center"}}>
                <h1>Abdul Posted on {new Date(getPost.createdAt).toLocaleDateString('en-US')}</h1>
                <h2 style={title1}>{getPost.title}</h2>
                <h3 style={title2}>{getPost.content}</h3>
            </div>
        )
    }
    return loader;
}
export default withRouter(Singlepost);