(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"login_container__abEAN",heading:"login_heading__2_hU1",label:"login_label__kHlJg",inputbox:"login_inputbox__3_gP5",button:"login_button__2pkpV",newaccount:"login_newaccount__HNcem",errormsg:"login_errormsg__3U3YB"}},15:function(t,e,n){t.exports={container:"post_container__2KOKf",name:"post_name__2kNUn",title:"post_title__1HDKB",btn:"post_btn__1ZAmW",edit:"post_edit__2Tn9x",errormsg:"post_errormsg__17Ky3"}},29:function(t,e,n){},30:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(23),s=n.n(a),r=(n(29),n(9)),c=n(10),i=n(13),l=n(12),d=n(15),u=n.n(d),h=(n(30),n(0)),g=function(){return Object(h.jsx)("div",{className:"loader",children:"Loading..."})},j=n(2),b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={post:[],loading:!1,redirect:!1,errormsg:"",searchterm:""},t.viewPost=function(e){t.props.history.push("/singlepost/"+e)},t.editPost=function(e){t.props.history.push("/createpost/"+e+"?edit=true")},t.deletePost=function(e){t.setState({loading:!0}),fetch("http://localhost:4000/feed/post/"+e,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(t.setState({loading:!1}),404===e.status)throw t.setState({errormsg:"Post Not Found"}),new Error("Post Not Found");if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(n){var o=t.state.post.filter((function(t){return t._id!=e}));console.log(o),t.setState({post:o})})).catch((function(e){console.log(e),t.setState({loading:!1,errormsg:e.message})}))},t.loadpost=function(){t.setState({loading:!0}),fetch("http://localhost:4000/feed/post",{headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(t.setState({loading:!1}),404===e.status)throw t.setState({errormsg:"Post Not Found"}),new Error("Post Not Found");if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e.post),t.setState({post:e.post})})).catch((function(e){console.log(e),t.setState({loading:!1,errormsg:e.message})}))},t.search=function(e){t.setState({searchterm:e.target.value}),console.log(t.state.searchterm),e.target.value.length>0?(t.setState({loading:!0}),fetch("http://localhost:4000/feed/search",{method:"POST",body:JSON.stringify({searchterm:e.target.value}),headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken"),"Content-Type":"application/json"}}).then((function(e){if(t.setState({loading:!1}),404===e.status)throw t.setState({errormsg:"Search Results Not Found"}),new Error("Search Results Not Found");if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e),t.setState({post:e.post})})).catch((function(e){console.log(e),t.setState({loading:!1,errormsg:e.message})}))):t.loadpost()},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;localStorage.getItem("userid")&&localStorage.getItem("jsonwebtoken")||this.setState({redirect:!0}),this.setState({loading:!0}),fetch("http://localhost:4000/feed/post",{headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(t.setState({loading:!1}),404===e.status)throw t.setState({errormsg:"Post Not Found"}),new Error("Post Not Found");if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e.post),t.setState({post:e.post})})).catch((function(e){console.log(e),t.setState({loading:!1,errormsg:e.message})}))}},{key:"render",value:function(){var t=this,e=[u.a.btn,u.a.edit],n=Object(h.jsx)(g,{});return this.state.redirect&&(n=Object(h.jsx)(j.a,{to:"/login"})),this.state.loading||(n=this.state.post.length<=0?Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)("h1",{children:"No Posts Found"})}):this.state.post.map((function(n){return Object(h.jsxs)("div",{className:u.a.container,children:[Object(h.jsxs)("div",{className:u.a.name,children:[n.user.username," posted on ",new Date(n.createdAt).toLocaleDateString("en-US")]}),Object(h.jsx)("div",{className:u.a.title,children:n.title}),Object(h.jsx)("div",{className:u.a.title,children:n.content}),Object(h.jsx)("button",{className:e.join(" "),onClick:function(){return t.viewPost(n._id)},children:"View"}),Object(h.jsx)("button",{className:e.join(" "),onClick:function(){return t.editPost(n._id)},children:"edit"}),Object(h.jsx)("button",{className:e.join(" "),onClick:function(){return t.deletePost(n._id)},children:"Delete"})]},n._id)}))),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",style:{width:"43%",margin:"20px auto"},onKeyUp:this.search,placeholder:"Search by title"}),Object(h.jsx)("div",{children:n}),this.state.errormsg?Object(h.jsx)("div",{className:u.a.errormsg,children:this.state.errormsg}):""]})}}]),n}(o.Component),m=(n(37),n(11)),p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={redirect:!1},t.logout=function(){localStorage.removeItem("userid"),localStorage.removeItem("jsonwebtoken"),t.setState({redirect:!0})},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){console.log("app js render"),localStorage.getItem("userid")||localStorage.getItem("jsonwebtoken")||this.setState({redirect:!0})}},{key:"render",value:function(){var t;return t=localStorage.getItem("userid")||localStorage.getItem("jsonwebtoken")?Object(h.jsx)("li",{style:{float:"right"},onClick:this.logout,children:Object(h.jsx)("a",{children:"Logout"})}):Object(h.jsx)("li",{style:{float:"right"},children:Object(h.jsx)(m.c,{to:"/login",exact:!0,children:"Login"})}),Object(h.jsxs)("div",{children:[this.state.redirect?Object(h.jsx)(j.a,{to:"/login"}):"",Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(m.c,{to:"/React_CRUD",exact:!0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.c,{to:"/createpost",exact:!0,children:"Add Post"})}),t]})})]})}}]),n}(o.Component),O=(n(38),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={title:"",content:"",imageUrl:"",image:"",redirect:!1,editmode:!1,auth:!1,errormsg:""},t.getimage=function(e){t.setState({imageUrl:URL.createObjectURL(e.target.files[0]),image:e.target.files[0]})},t.createPost=function(){console.log(t.state.content);var e=new FormData;e.append("title",t.state.title),e.append("content",t.state.content),e.append("imageUrl",t.state.image),console.log(t.state.image),fetch("http://localhost:4000/feed/post",{method:"POST",body:e,headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e),t.setState({redirect:!0})})).catch((function(e){t.setState({errormsg:e.message}),console.log(e)}))},t.updatePost=function(){console.log(t.state.content);var e=t.props.match.params.id,n=new FormData;n.append("title",t.state.title),n.append("content",t.state.content),n.append("imageUrl",t.state.image),fetch("http://localhost:4000/feed/post/"+e,{method:"PUT",body:n,headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(405===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e.message),t.setState({redirect:!0})})).catch((function(e){t.setState({errormsg:e.message}),console.log(e)}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),localStorage.getItem("userid")&&localStorage.getItem("jsonwebtoken")||this.setState({auth:!0});var e=this.props.match.params.id,n=this.props.location.search.split("=")[1];e&&n&&(this.setState({editmode:!0}),fetch("http://localhost:4000/feed/singlepost/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(e){if(404===e.status)throw t.setState({errormsg:"Post Not Found"}),new Error("Post Not Found");if(401===e.status)throw t.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return e.json()})).then((function(e){console.log(e.singlepost),t.setState({title:e.singlepost.title,content:e.singlepost.content,imageUrl:"http://localhost:4000/"+e.singlepost.imageUrl})})))}},{key:"render",value:function(){var t=this,e=Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"heading",children:"Post Form"}),Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter title",name:"title",value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(h.jsx)("label",{children:"Content"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter content",value:this.state.content,name:"content",onChange:function(e){return t.setState({content:e.target.value})}}),Object(h.jsx)("label",{children:"ImageUrl"}),Object(h.jsx)("input",{type:"file",name:"imageUrl",onChange:this.getimage}),Object(h.jsx)("img",{src:this.state.imageUrl,style:{width:"300px",display:"block",margin:"10px auto"}}),this.state.editmode?Object(h.jsx)("button",{className:"button",onClick:this.updatePost,children:"Update"}):Object(h.jsx)("button",{className:"button",onClick:this.createPost,children:"Create"})]});return this.state.redirect&&(e=Object(h.jsx)(j.a,{to:"/React_CRUD"})),this.state.auth&&(e=Object(h.jsx)(j.a,{to:"/login"})),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:e}),this.state.errormsg?Object(h.jsx)("div",{className:"errormsg",children:this.state.errormsg}):""]})}}]),n}(o.Component)),f=n(4),x=(n(39),void 0),v=Object(j.g)((function(t){var e=Object(o.useState)(""),n=Object(f.a)(e,2),a=n[0],s=n[1],r=Object(o.useState)(""),c=Object(f.a)(r,2),i=c[0],l=c[1],d=Object(o.useState)(""),u=Object(f.a)(d,2),b=u[0],m=u[1],p=Object(o.useState)(!1),O=Object(f.a)(p,2),v=O[0],S=O[1],w=Object(o.useState)(!1),_=Object(f.a)(w,2),y=_[0],k=_[1];Object(o.useEffect)((function(){console.log("single post render"),localStorage.getItem("userid")&&localStorage.getItem("jsonwebtoken")||k(!0),S(!0);var e=t.match.params.id;fetch("http://localhost:4000/feed/singlepost/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("jsonwebtoken")}}).then((function(t){if(S(!1),404===t.status)throw m("Post Not Found"),console.log(t.status),new Error("Post Not Found");if(401===t.status)throw x.setState({errormsg:"Invalid Token"}),new Error("Invalid Token");return t.json()})).then((function(t){console.log(t.singlepost),s(t.singlepost),l(t.singlepost.user.username)})).catch((function(t){m(t.message)}))}),[]);var N=Object(h.jsx)(g,{});return y&&(N=Object(h.jsx)(j.a,{to:"/login"})),v||(N=Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsxs)("h1",{children:[i," Posted on ",new Date(a.createdAt).toLocaleDateString("en-US")]}),Object(h.jsx)("h2",{style:{color:"darkgrey"},children:a.title}),Object(h.jsx)("h3",{style:{color:"#c5c526"},children:a.content}),Object(h.jsx)("img",{src:"http://localhost:4000/"+a.imageUrl,style:{width:"300px"}})]})),Object(h.jsxs)("div",{children:[N,b?Object(h.jsx)("div",{className:"errormsg",children:b}):" "]})})),S=n(7),w=n.n(S),_=Object(j.g)((function(){var t=Object(o.useState)(""),e=Object(f.a)(t,2),n=e[0],a=e[1],s=Object(o.useState)(""),r=Object(f.a)(s,2),c=r[0],i=r[1],l=Object(o.useState)(""),d=Object(f.a)(l,2),u=d[0],g=d[1],b=Object(o.useState)(""),m=Object(f.a)(b,2),p=m[0],O=m[1],x=Object(o.useState)(""),v=Object(f.a)(x,2),S=v[0],_=v[1],y=Object(o.useState)(""),k=Object(f.a)(y,2),N=k[0],I=k[1],P=Object(o.useState)(""),C=Object(f.a)(P,2),E=C[0],T=C[1],U=Object(o.useState)(""),A=Object(f.a)(U,2),F=A[0],D=A[1],z=Object(o.useState)(""),L=Object(f.a)(z,2),R=L[0],B=L[1],J=Object(o.useState)(""),K=Object(f.a)(J,2),Z=K[0],H=K[1],M=Object(j.f)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:w.a.container,children:[Object(h.jsx)("h1",{className:w.a.heading,children:"Signup Form"}),Object(h.jsx)("label",{className:w.a.label,children:"Username"}),Object(h.jsx)("input",{className:w.a.inputbox,type:"text",placeholder:"Enter username",name:"username",onChange:function(t){console.log(t.target.value),""!=t.target.value?(a(t.target.value),D(!1)):D(!0)}}),F?Object(h.jsx)("div",{children:"Kindly enter user name"}):"",Object(h.jsx)("label",{className:w.a.label,children:"Email"}),Object(h.jsx)("input",{className:w.a.inputbox,type:"email",placeholder:"Enter email",name:"email",onChange:function(t){var e=t.target.value;/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(e)?(T(!1),i(t.target.value)):T(!0),console.log(t.target.value)}}),E?Object(h.jsx)("div",{children:"kindly enter valid email"}):"",Object(h.jsx)("label",{className:w.a.label,children:"Password"}),Object(h.jsx)("input",{className:w.a.inputbox,type:"Password",placeholder:"Enter password",name:"password",onChange:function(t){var e=t.target.value;/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)?(_(!1),g(t.target.value)):_(!0),console.log(t.target.value)}}),S?Object(h.jsx)("div",{children:"kindly enter password"}):"",Object(h.jsx)("label",{className:w.a.label,children:"Confirm Password"}),Object(h.jsx)("input",{className:w.a.inputbox,type:"Password",placeholder:"Enter password",name:"confirmpassword",onChange:function(t){console.log(t.target.value);var e=t.target.value;/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)?(I(!1),O(t.target.value)):I(!0)}}),N?Object(h.jsx)("div",{children:"kindly enter confirm password"}):"",R?Object(h.jsx)("div",{children:"confirmpassword does not match"}):"",Object(h.jsx)("button",{className:w.a.button,onClick:function(t){if(""==n&&D(!0),""==u&&_(!0),""==p&&I(!0),""==c&&T(!0),u!==p)return B(!0);B(!1),""==n||""==c||""==u||""==p||F||S||N||E||R||fetch("http://localhost:4000/signup",{method:"POST",body:JSON.stringify({username:n,email:c,password:u,confirmpassword:p}),headers:{"Content-Type":"application/json"}}).then((function(t){if(401===t.status)throw H("User Already Exist"),new Error("User Already Exist");return t.json()})).then((function(t){console.log(t.message),H(t.message),M.push("/login")})).catch((function(t){H(t.message),console.log(t)}))},children:"Signup"})]}),Z?Object(h.jsx)("div",{className:w.a.errormsg,children:Z}):""]})})),y=n(14),k=n.n(y),N=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={email:"",password:"",errormsg:"",redirect:!1},t.getemail=function(e){t.setState({email:e.target.value})},t.getpassword=function(e){t.setState({password:e.target.value})},t.login=function(){fetch("http://localhost:4000/login",{method:"POST",body:JSON.stringify({email:t.state.email,password:t.state.password}),headers:{"Content-Type":"application/json"}}).then((function(e){if(403===e.status)throw t.setState({errormsg:"Wrong username"}),new Error("Wrong username");if(401===e.status)throw t.setState({errormsg:"Incorrect Password"}),new Error("Incorrect Password");return e.json()})).then((function(e){console.log(t.props),"Login Success"==e.message&&(localStorage.setItem("userid",e.userid),localStorage.setItem("jsonwebtoken",e.token),t.setState({redirect:!0}))})).catch((function(e){t.setState({errormsg:e.message}),console.log(e.message)}))},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[this.state.redirect?Object(h.jsx)(j.a,{to:"/React_CRUD"}):"",Object(h.jsxs)("div",{className:k.a.container,children:[Object(h.jsx)("h1",{className:k.a.heading,children:"Login Form"}),Object(h.jsx)("label",{className:k.a.label,children:"Email"}),Object(h.jsx)("input",{className:k.a.inputbox,type:"email",placeholder:"Enter email",name:"email",onChange:this.getemail}),Object(h.jsx)("label",{className:k.a.label,children:"Password"}),Object(h.jsx)("input",{className:k.a.inputbox,type:"Password",placeholder:"Enter password",name:"password",onChange:this.getpassword}),Object(h.jsx)("button",{className:k.a.button,onClick:this.login,children:"Login"}),Object(h.jsx)(m.b,{to:"/signup",className:k.a.newaccount,children:"Create New Account"})]}),this.state.errormsg?Object(h.jsx)("div",{className:k.a.errormsg,children:this.state.errormsg}):""]})}}]),n}(o.Component),I=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(j.b,{path:"/login",exact:!0,component:N}),Object(h.jsx)(j.b,{path:"/signup",exact:!0,component:_}),Object(h.jsx)(j.b,{path:"/createpost",exact:!0,component:O}),Object(h.jsx)(j.b,{path:"/createpost/:id",component:O}),Object(h.jsx)(j.b,{path:"/singlepost/:id",component:v}),Object(h.jsx)(j.b,{path:"/React_CRUD",exact:!0,component:b})]})}}]),n}(o.Component),P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),o(t),a(t),s(t),r(t)}))};s.a.render(Object(h.jsx)(m.a,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),P()},7:function(t,e,n){t.exports={container:"signup_container__1rb94",heading:"signup_heading__2TaUm",label:"signup_label__1T4V-",inputbox:"signup_inputbox__38lP5",button:"signup_button__1Rvb6",errormsg:"signup_errormsg__2cyPJ"}}},[[40,1,2]]]);
//# sourceMappingURL=main.a52b3980.chunk.js.map