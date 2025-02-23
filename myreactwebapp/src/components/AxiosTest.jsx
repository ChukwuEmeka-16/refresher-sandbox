import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const source = axios.CancelToken.source()

const AxiosTest = () => {


  const navigate = useNavigate()
  const [data,setData] = useState([])
  
  const getData = async () =>{
    await axios.get('posts').then((res)=>{
        setData(val=>[...val,...res.data])

    })
  }

  const postData = async () =>{
    await axios.post('posts',{title:'test',completed:true},{headers:{
        chest:'nuts'
    }})
    .then(res=>console.log(res))
  }

  const getAll = async () =>{
    await axios.all([
        axios.get('posts',{headers:{chester:'piyatt'}}),
       // axios.get('todos')
    ]).then(res=>console.log(res))
  }
  
  useEffect(()=>{

  
   const getStuff = async () => {
    await axios.get('posts',{cancelToken:source.token})
    .then(res=>console.log(res))
    .catch(err=>{
        if (axios.isCancel(err)) {
          console.log('error caused by canceling request due to unmount');
        }
        else{
            console.log('regular error');
            
        }
    })
   }
   getStuff()
   return ()=>{
     source.cancel()
   }
  },[])


  return (
    <div>
        {data.length?<div>hii</div>:<h1>no</h1>}

         <button onClick={()=>navigate('../advanced')}>go</button>
          
    </div>
  )
}

export default AxiosTest