import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserShow(props){
    console.log(props)
        return (
            <>
               { 
                    props.user&& (
                        <>
                        <h2> USERNAME - {props.user.username}</h2>
                        <h3>Posts written by  user </h3>
                        <ul>
                        {  
                            props.userposts.map((userpost)=>{
                                return <li key ={userpost.id}><Link to={`/posts/${userpost.id}`}>{userpost.title}</Link></li>
                            })   
                        }
                        </ul>
                        </>
                    )
                }
            </>
        )
    
}
const mapStateToProps = (state,props)=>{
    console.log(state)
    return {
        user : state.users.find(user=>user.id == props.match.params.id),
        userposts : state.posts.filter(post=>post.userId== props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)