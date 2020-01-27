import axios from 'axios'
// storing users within store

export const setUsers = (users) =>{
    return { type:'SET_USERS', payload : users}
}


//redux thunk ensures that the below action creator wiill return function as its value,                 
//the function takes dispatch 

export const startGetUsers = () => {
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data
            dispatch(setUsers(users))
        })
        .catch(err=>alert(err))
    }
}