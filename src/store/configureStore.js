import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducer/users'
import postsReducer from '../reducer/posts'
import commentsReducer from '../reducer/comments'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer
    }),applyMiddleware(thunk)
    )
    return store
}

export default configureStore