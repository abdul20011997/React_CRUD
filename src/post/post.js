import React,{Component} from "react";
import Styled from "./post.module.css";
import Loader from "../loader/loader";
import { Redirect } from "react-router";
class Post extends Component{
    state={
        post:[],
        loading:false,
        redirect:false,
        errormsg:'',
        searchterm:''
    }
    componentDidMount(){
        if(!localStorage.getItem("userid") || !localStorage.getItem("jsonwebtoken")){
            this.setState({
                redirect:true
             })
           }
        this.setState({
            loading:true
        })
        fetch('http://localhost:4000/feed/post',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            this.setState({
                loading:false 
            })
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
            console.log(data.post);
            this.setState({
                post:data.post,  
            })
        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false,
                errormsg:err.message
            })
        })

    }
    viewPost=(id)=>{
        // console.log(id);
        this.props.history.push('/singlepost/'+id);
    }
    editPost=(id)=>{
        // console.log(id);
        this.props.history.push('/createpost/'+id+'?edit=true');
    }
    deletePost=(id)=>{
        this.setState({
            loading:true
        })
        fetch('http://localhost:4000/feed/post/'+id,{
            method:"DELETE",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            this.setState({
                loading:false 
            })
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
            const newpost=this.state.post;
            const updatedpost=newpost.filter(el=>el._id!=id);
            console.log(updatedpost);
            this.setState({
                post:updatedpost 
            })

        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false,
                errormsg:err.message
            })
        })
    }
    loadpost=()=>{
        this.setState({
            loading:true
        })
        fetch('http://localhost:4000/feed/post',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken")
            }
        }).then(res=>{
            this.setState({
                loading:false 
            })
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
            console.log(data.post);
            this.setState({
                post:data.post,  
            })
        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false,
                errormsg:err.message
            })
        })
    }
    search=(event)=>{
        this.setState({
            searchterm:event.target.value
        })
        console.log(this.state.searchterm);
        if(event.target.value.length > 0){
        this.setState({
            loading:true
        })
        fetch('http://localhost:4000/feed/search',{
            method:"POST",
            body:JSON.stringify({
                searchterm:event.target.value
            }),
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jsonwebtoken"),
                'Content-Type':'application/json'
            }
        }).then(res=>{
            this.setState({
                loading:false 
            })
            if(res.status===404){
                this.setState({
                    errormsg:"Search Results Not Found"
                })
                throw new Error("Search Results Not Found")
            }
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
                post:data.post,  
            })

        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false,
                errormsg:err.message
            })
        })
    }
    else{
        this.loadpost();
    }
    }

    render(){
        const dataedit=[Styled.btn,Styled.edit];
        let loader=<Loader/>
        if(this.state.redirect){
            loader=<Redirect to="/login"/>
        }
        if(!this.state.loading){
            if(this.state.post.length<=0){
                loader=<div style={{textAlign:"center"}}><h1>No Posts Found</h1></div>
            }
            else{
                loader= this.state.post.map(el=>{
                    return (
                        <div className={Styled.container} key={el._id}>
                            <div className={Styled.name}>{el.user.username} posted on {new Date(el.createdAt).toLocaleDateString('en-US')}</div>
                            <div className={Styled.title}>{el.title}</div>
                            <div className={Styled.title}>{el.content}</div>
                            <button className={dataedit.join(' ')} onClick={()=>this.viewPost(el._id)}>View</button>
                            <button className={dataedit.join(' ')} onClick={()=>this.editPost(el._id)}>edit</button>
                            <button className={dataedit.join(' ')} onClick={()=>this.deletePost(el._id)}>Delete</button>
                        </div>
                    )
                }
            )
            }
            
        }

        return(
            <div>
                <input type="text" style={{width:'43%',margin:'20px auto'}} onKeyUp={this.search} placeholder="Search by title"/>
               <div>{loader}</div>
               {this.state.errormsg ? <div className={Styled.errormsg}>{this.state.errormsg}</div> :  ''}
            </div>    
        )
    }
}
export default Post;
