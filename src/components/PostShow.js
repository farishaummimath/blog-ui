import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function PostShow(props) {
        
    return (
        <>
        {
            props.post && (<div>
                <h2> PostShow - POST ID- {props.match.params.id}</h2>
                {props.postuser && <h2>USERNAME :{props.postuser.name} </h2>}
                <h3>TITLE : {props.post.title}</h3>
                <h3>BODY:{props.post.body}</h3>
                <hr/>
                <h3> COMMENTS </h3>
                {
                    
                    props.postComments.map((comment)=>{
                        return <li key ={comment.id}>{comment.body}</li>
                    })
                    
                }
                <Link to={`/users/${props.post.userId}`}>More posts of author {props.postuser.name}</Link>
                
                
            </div>)
        }
        </>   
    )
    
    
}
const mapStateToProps = (state,props) => {
        const post = state.posts.find(post=>post.id == props.match.params.id)
        let postuser
        if(post){
            postuser = state.users.find(user=>user.id==post.userId)
        }
        const postComments = state.comments.filter(comment=>comment.postId == props.match.params.id)
    return {
        post,
        postuser,
        postComments

    }
}
export default connect(mapStateToProps)(PostShow)