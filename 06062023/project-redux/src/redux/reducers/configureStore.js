import {createStore} from 'redux'
import reducers from "./index"

export default function configureStore(){
    return createStore(reducers)
}

/*
1.actionTypes->
2.counterActions->
3.counterReducer
4.reducers/Index.js
5.ConfigureStore
6.index.js
7.Counter
8.App.js
*/