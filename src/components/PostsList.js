import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
function PostsList(props){
  
    return (
        <div>
            <h3> TOTAL Posts : {props.posts.length}</h3>
            {
                props.posts.map((post)=><li key ={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
            }
        </div>
    )
    

}
const mapStateToProps= (state) =>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps)(PostsList)