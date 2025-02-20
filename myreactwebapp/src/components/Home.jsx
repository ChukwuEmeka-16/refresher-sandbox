import React from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  let [age,setAge] = React.useState(false)
  document.title = 'homepage'
  return (
    <>
    <div className='box-container'>
        <div>box</div>
        <div>box</div>
        <div>box</div>
    </div>
    {age &&<Navigate to='./lazy'/>}
    <button onClick={()=>setAge(prev=>true)}>chang</button>

    {/* <button style={{marginLeft:'500px',padding:10}} onClick={()=>navigate('./infinite')}>move</button> */}

    
    </>
  )
}

export default Home