import axios from 'axios'
// storing users within store

export const setComments = (comments) =>{
    return { type:'SET_COMMENTS', payload : comments}
}


//redux thunk ensures that the below action creator wiill return function as its value,                 
//the function takes dispatch 

export const startGetComments = () => {
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            const comments = response.data
            dispatch(setComments(comments))
        })
        .catch(err=>alert(err))
    }
}