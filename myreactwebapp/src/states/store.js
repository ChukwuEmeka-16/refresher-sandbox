import {configureStore} from '@reduxjs/toolkit'
import testReducer from './testSlice'
const store = configureStore({
    
    reducer:{
       testCounter:testReducer
    }
})

export default store