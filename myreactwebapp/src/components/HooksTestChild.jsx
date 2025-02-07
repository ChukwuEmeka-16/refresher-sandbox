import React, { useEffect, useMemo,useState } from 'react'

const HooksTestChild = ({counter,fnu}) => {
 //  console.log('from child');
      
    const name = {
        name:'eli'
    }
      const[counterTwo,setCounterTwo] = useState(0)
      
      const [memoizedArr,setMa] = useState([1,2,3])
    
 
  
     
      
      
    //   useEffect(()=>{
    //       const inVid = setInterval(()=>{
    //           console.log(counterTwo);
              
    //         },2000)
    //         console.log('hey from useeffect');
            
    //         return ()=>{
    //           clearInterval(inVid)

    //         }
          
    //   },[counterTwo])
  
    return (
      <>
      {counter}
      child component counter
      <div style={{display:'flex',justifyContent:'space-around',marginTop:200}}>
          
          <button onClick={()=>setCounterTwo(counterTwo+1)} style={{padding:10}}>+</button>
          <h1>{counterTwo}</h1>
          <button onClick={()=>setCounterTwo(counterTwo-1)} style={{padding:10}}>-</button>
  
          
      </div>
       <h1>{memoizedArr}</h1>

      
      <button onClick={()=>setMa([...memoizedArr,1])}>add</button>
      </>
    )
}

export default React.memo( HooksTestChild)