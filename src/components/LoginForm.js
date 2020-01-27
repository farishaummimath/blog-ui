import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class LoginForm extends React.Component{
    constructor() {
        super()
        console.log(this.props)
        this.state = {
            email : '',
            error: '',
            userId: '',
            isLoggedIn :false
            //password : ''
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleEmailChange =  this.handleEmailChange.bind(this)
    }
    
    
    handleSubmit(e){
        e.preventDefault()
        const user = this.props.users.find(u => u.email === this.state.email)
        if(user){
            console.log('sss')
            this.setState({isLoggedIn:true,userId:user.id,error: ''})    
        } else {
            this.setState({error:'Invalid user'})  
        }
        const formData = {
            email : this.state.email,
            //password : this.state.password
        }
        console.log(formData)

    }
    handleEmailChange(e){
        const email = e.target.value
        this.setState({email})
    }
    render(){
        if(this.state.isLoggedIn === true){
            return (<Redirect to ={`/users/${this.state.userId}`} />)
        }else{
            return (
            
            <div style ={{textAlign: 'center'}}>
                <h2>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        EMAIL : 
                        <input type ='text' value = {this.state.email} onChange = {this.handleEmailChange}/>
                    </label>
                    <br/>
                </form>
                <div>
                    <p>{this.state.error}</p>
                </div>
            </div>
            )
            }
    }
}
const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}
export default connect(mapStateToProps)(LoginForm)