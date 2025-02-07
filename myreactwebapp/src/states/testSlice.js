import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const testSlice = createSlice({
    name:'testSlice',
    initialState:{
        value:[],
        age:16,
        asyncData:[]
    },
    reducers:{
        increment: (state)=>{
            state.value =[...state.value,state.value.length]
        },
        decrement:(state)=>{
            state.value =state.value =[...state.value,-state.value.length]
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        },
        gloFun:(state,action)=>{
           console.log(state.age)
        },
        
    },
    // for housing async functions
    extraReducers:(builder)=>{
       builder.addCase(testAsyncFunc.pending,(state)=>{
          console.log('request almost complete');
          
       }),// adding a pending and even a rejected case is optional
       builder.addCase(testAsyncFunc.fulfilled,(state,action)=>{
           state.asyncData = [...action.payload]
           console.log(state.asyncData);
       })
    }
})


export const testAsyncFunc = createAsyncThunk(
    "test/fetchdata", // name this whatever you like this way is just conventional
    async()=>{
       let response =  await axios.get('https://jsonplaceholder.typicode.com/comments')
        .catch(err=>console.log(err.message))
        
      return response.data // this is auto passed in to the reducer above (via the action parameter)
      // if you return the response from a .then() an error will occur
    }

)

export const {increment,decrement,incrementByAmount,gloFun} = testSlice.actions
export default testSlice.reducer

