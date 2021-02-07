import React,{Component} from "react";
import Styled from "./post.module.css";
import Loader from "../loader/loader";
class Post extends Component{
    state={
        post:[],
        loading:false
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        fetch('http://localhost:4000/feed/post').then(res=>{
            this.setState({
                loading:false 
            })
                return res.json();
        }).then(data=>{
            this.setState({
                post:data.post,  
            })
        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false 
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
        }).then(res=>{
            this.setState({
                loading:false 
            })
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
                loading:false 
            })
        })
    }

    render(){
        const dataedit=[Styled.btn,Styled.edit];
        let loader=<Loader/>
        if(!this.state.loading){
            if(this.state.post.length<=0){
                loader=<div style={{textAlign:"center"}}><h1>No Posts Found</h1></div>
            }
            else{
                loader= this.state.post.map(el=>{
                    return (
                        <div className={Styled.container} key={el._id}>
                            <div className={Styled.name}>Abdul posted on {new Date(el.createdAt).toLocaleDateString('en-US')}</div>
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
               <div>{loader}</div>
            </div>    
        )
    }
}
export default Post;
