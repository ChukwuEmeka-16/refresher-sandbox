import React from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true
const ApiTest = () => {
  
  const getTest = async () =>{

    // using query parameters and route parameters

    // query parameter must be at the end of the url, if you try to add a route behind it it willl be made part of the parameter string instead
    let resp = await axios.get('http://localhost:3000/test/8/k/trust?height=5.11ft&weight=120',{headers:{
        age:19,
        name:'eli'
    }})
    .then(res=>{
        console.log(res.data)
    })
    
    
    
  }

  const postTest = async () =>{
    let resp = await axios.post('http://localhost:3000/test',{age:19, name:'eli'})
    .then(res=>{
        console.log(res.data)
    })
  }

  const cookieTest = async () =>{
    let resp = await axios.get('http://localhost:3000/cookie')
    .then(res=>{
        console.log(res)
        console.log(res.data.token)
        console.log(document.cookie);
        
    })
  }
  const setCookieTest = async () =>{
    let resp = await axios.get('http://localhost:3000/cookie/daun/2550')
    .then(res=>{
        console.log(res)
        
    })
  }


  return (
    <div className='api'>
        {/* <input type="text"  maxLength={15} placeholder='email' /> */}
        
        <button onClick={getTest}> get req</button>
        <button onClick={postTest}> post req</button>
        <button onClick={cookieTest}> get cookie</button>
        <button onClick={setCookieTest}> set cookie</button>

       
    </div>
  )
}

export default ApiTest