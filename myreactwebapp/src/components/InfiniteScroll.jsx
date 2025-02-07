import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,gloFun} from '../states/testSlice'
import { testAsyncFunc } from '../states/testSlice'
const PostTile = ({postText}) =>{
    return(
      <div style={{backgroundColor:'steelblue',margin:'auto',marginBottom:35,height:90,width:'80%'}}>
         <small>{postText}</small>
      </div>
    )
}




const InfiniteScroll = () => {

 // console.log('child render');
  
  const [page,setPage] = React.useState(0)
  const [postData,setData] = React.useState([])
  const scrollableRef = React.useRef();

  const getData = async ()=>{
    
    await axios.get('posts',{params:{_limit:5,_page:page}})
    .then((res)=>{
      setData((prev)=>[...prev,...res?.data])
      console.log(res);
      
    })
    .catch(err=>console.log(err))
  }
  
  React.useEffect(()=>{

    
    
   getData()
  },[page])



  React.useEffect(()=>{

    const handleScroll = () =>{
       if (scrollableRef.current) {
        const {scrollTop, scrollHeight, clientHeight} = scrollableRef.current
        if (scrollTop+clientHeight >=scrollHeight) {
            setPage((prev)=>prev+1)
            // console.log(scrollHeight); // total height of the page if overflow was shown (in pizels)
            // console.log(scrollTop); // total number of pixels that has been scrolled through
            // console.log(clientHeight); // The pixel height of the element excluding borders and margin (just the element and its padding)
            
        }
       }
    }
    
    const scrollElement = scrollableRef.current;
    if (scrollElement) {
        scrollElement.addEventListener('scroll',handleScroll)
    }
    return ()=>{
        if (scrollElement) {
            scrollElement.removeEventListener('scroll',handleScroll)
        }
    }
  },[])

  const dispatch = useDispatch()
  const selector = useSelector((state)=>state?.testCounter.value)
   
  console.log('rerender');
  


  return (
    
    <>
      <div>InfiniteScroll</div>


      <button onClick={()=>dispatch(testAsyncFunc())}> run global function</button>

      <div  className='yoyo'  ref={scrollableRef} style={{width:'100%',paddingTop:10,paddingBottom:10,height:398,backgroundColor:'grey',overflow:'scroll'}}>
        {postData.map((post,index)=><PostTile postText={post.title} key={index}/>)}
      </div>



      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>count: {selector} </h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default InfiniteScroll