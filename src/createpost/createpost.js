import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import "./createpost.css";
class createPost extends Component{
    state={
        title:'',
        content:'',
        imageUrl:'',
        image:'',
        redirect:false,
        editmode:false,
        auth:false,
        errormsg:''
    }
    getimage=(event)=>{
        this.setState(
            {imageUrl:URL.createObjectURL(event.target.files[0]),
            image:event.target.files[0]}
        )
    }
    componentDidMount(){
        
        console.log(this.props);
        if(!localStorage.getItem("userid") || !localStorage.getItem("jsonwebtoken")){
            this.setState({
              auth:true
             })
           }
        const id=this.props.match.params.id;
        const edit=this.props.location.search.split("=")[1];
        if(id && edit){
            this.setState({
                editmode:true
            })
        // const id=this.props.location.search;
        
        fetch('http://localhost:4000/feed/singlepost/'+id,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            if(res.status===404){
                this.setState({
                    errormsg:"Post Not Found"
                })
                throw new Error("Post Not Found")
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
            this.setState({
                title:data.singlepost.title,
                content:data.singlepost.content,
                imageUrl:"http://localhost:4000/"+data.singlepost.imageUrl
            })
        })
        }
    }
    createPost=()=>{
        console.log(this.state.content);
        const formData = new FormData()
         formData.append('title', this.state.title);
         formData.append('content', this.state.content);
         formData.append('imageUrl', this.state.image);
        console.log(this.state.image);

        fetch('http://localhost:4000/feed/post',{
            method:"POST",
            body:formData,
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            if(res.status===401){
                this.setState({
                    errormsg:"Invalid Token"
                })
                throw new Error("Invalid Token")
            }
            return res.json();
        }).then(data=>{
            console.log(data);
            this.setState({
                redirect:true
            })

        }).catch(err=>{
            this.setState({
        errormsg:err.message
            })
            console.log(err)
        })
    }

    updatePost=()=>{
        console.log(this.state.content);
        const id=this.props.match.params.id;
        const formData = new FormData()
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('imageUrl', this.state.image);
        fetch('http://localhost:4000/feed/post/'+id,{
            method:"PUT",
            body:formData,
            headers: {
                'Authorization':"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            if(res.status===405){
                this.setState({
                    errormsg:"Invalid Token"
                })
                throw new Error("Invalid Token")
            }
            return res.json();
        }).then(data=>{
            console.log(data.message);
            this.setState({
                redirect:true
            })

        }).catch(err=>{
            this.setState({
                errormsg:err.message
            })
            console.log(err)
        })
    }
    render(){
        let redirect=
                    (<div className="container">
                        <h1 className="heading">Post Form</h1>
                        <label>Title</label>
                        <input type="text" placeholder="Enter title" name="title" value={this.state.title} onChange={(event)=>{return this.setState({title:event.target.value})}}/>
                        <label>Content</label>
                        <input type="text" placeholder="Enter content" value={this.state.content} name="content" onChange={(event)=>{return this.setState({content:event.target.value})}}/>
                        <label>ImageUrl</label>
                        <input type="file" name="imageUrl" onChange={this.getimage}/>
                        <img src={this.state.imageUrl} style={{width: "300px",
    display: "block",
    margin: "10px auto"}}/>
                        {
                            this.state.editmode ? <button className="button" onClick={this.updatePost}>Update</button> : <button className="button" onClick={this.createPost}>Create</button>}
                    </div>)
        if(this.state.redirect){
            redirect=<Redirect to="/React_CRUD"/>
        }
        if(this.state.auth){
            redirect=<Redirect to="/login"/>
        }

    return (
        <div>
            <div>{redirect}</div>
            {this.state.errormsg ? <div className="errormsg">{this.state.errormsg}</div> :  ''}
        </div>
    )
    }
}
export default createPost;