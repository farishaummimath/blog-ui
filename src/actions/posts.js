import axios from 'axios'
// storing users within store

export const setPosts = (posts) =>{
    return { type:'SET_POSTS', payload : posts}
}


//redux thunk ensures that the below action creator wiill return function as its value,                 
//the function takes dispatch 

export const startGetPosts = () => {
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts = response.data
            dispatch(setPosts(posts))
        })
        .catch(err=>alert(err))
    }
}