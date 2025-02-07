import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import HooksTestChild from './HooksTestChild';





const HooksTest = () => {
  document.title = 'hooks page'
    const[counterOne,setCounterOne] = useState(0)
//   console.log('parent component');

   const agechk = useCallback(() =>{
     console.log('hii');
     
   },[])
   //agechk()
  return (
    <>

    <div style={{display:'flex',justifyContent:'space-around',marginTop:200}}>
        
        <button onClick={()=>setCounterOne(counterOne+1)} style={{padding:10}}>+</button>
        <h1>{counterOne}</h1>
        <button onClick={()=>setCounterOne(counterOne-1)} style={{padding:10}}>-</button>


    </div>

    <HooksTestChild fnu={agechk}/>
    </>
  )
}

export default HooksTest