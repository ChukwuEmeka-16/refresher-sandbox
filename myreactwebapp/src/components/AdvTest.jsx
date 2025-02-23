import React from 'react'

const Child = ({message='yo'}) =>{
    console.log('Child');
    const [count,setCount] = React.useState(0)
  //  alert('rerender')
    return(
     <div>
        {count}
        <button onClick={()=>setCount(prev=>prev+1)}>inc child</button>
        hi from Child
        <h1>{message}</h1>
     </div>
    )
}

// this method stops the components passed in from being rerendered on every rerender
const Parent = ({content}) =>{
    console.log('parent');
    
    const [count,setCount] = React.useState(0)
    return (
     
     <div>{count}
         <button onClick={()=>setCount(prev=>prev+1)}>inc</button>
       from parent
       {content}
         {/* {React.cloneElement(content,{message:'hiii'})} */}
     </div>
     
    )
}



const AdvTest = () => {
    console.log('highest parent')
    
    return <Parent content={<Child/>}/>
}

export default AdvTest