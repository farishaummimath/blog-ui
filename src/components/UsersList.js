import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function UsersList(props){
    return (
        <div>
            <h3>USERS LIST : {props.users.length}</h3>
            {
                props.users.map((user)=><li key ={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)
            }
        </div>
    )
    
}
const mapStateToProps = (state) =>{
    return {
        users : state.users
    }
} 
export default connect(mapStateToProps)(UsersList)