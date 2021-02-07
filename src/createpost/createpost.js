import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import "./createpost.css";
class createPost extends Component{
    state={
        title:'',
        content:'',
        redirect:false,
        editmode:false
    }
    componentDidMount(){
        console.log(this.props);
        const id=this.props.match.params.id;
        const edit=this.props.location.search.split("=").[1];
        if(id && edit){
            this.setState({
                editmode:true
            })
        // const id=this.props.location.search;
        fetch('http://localhost:4000/feed/singlepost/'+id).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data.singlepost);
            this.setState({
                title:data.singlepost.title,
                content:data.singlepost.content
            })
        })
        }
    }
    createPost=()=>{
        console.log(this.state.content);
        fetch('http://localhost:4000/feed/post',{
            method:"POST",
            body:JSON.stringify({
                title:this.state.title,
                content:this.state.content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
            this.setState({
                redirect:true
            })

        }).catch(err=>{
            console.log(err)
        })
    }

    updatePost=()=>{
        console.log(this.state.content);
        const id=this.props.match.params.id;
        fetch('http://localhost:4000/feed/post/'+id,{
            method:"PUT",
            body:JSON.stringify({
                title:this.state.title,
                content:this.state.content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data.message);
            this.setState({
                redirect:true
            })

        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        let redirect=
                    (<div className="container">
                        <label>Title</label>
                        <input type="text" placeholder="Enter title" name="title" value={this.state.title} onChange={(event)=>{return this.setState({title:event.target.value})}}/>
                        <label>Content</label>
                        <input type="text" placeholder="Enter content" value={this.state.content} name="content" onChange={(event)=>{return this.setState({content:event.target.value})}}/>
                        {
                            this.state.editmode ? <button className="button" onClick={this.updatePost}>Update</button> : <button className="button" onClick={this.createPost}>Create</button>}
                    </div>)
        if(this.state.redirect){
            redirect=<Redirect to="/React_CRUD"/>
        }
    return redirect;
    }
}
export default createPost;