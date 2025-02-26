import axios from 'axios'
import { useState,useRef,useEffect } from 'react'

const SearchWithDebounce = () => {
  
  const [dish,setDish]= useState(['apple','avocados','melons','pineapples','cucumbers','carrots','oranges','guavas','beets','banana','apricot','grape','berries','blueberries','strawberries','stockfish','salmonfish','canoa','tilapiafish','crayfish','beef','chicken','plantain','pork','potatoes','salad','eggs','eggplant'])
  const[searchTerm,setSearchTerm] = useState('')
  const [results,setResults] = useState([])
  

  useEffect(()=>{
    const filtered = dish.filter((item)=>item.includes(searchTerm))
    setResults(filtered)
  },[])
  
  //debounce
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      searchTerm.length >0 && console.log(searchTerm);
      
    },2000)
    return ()=>{
      clearTimeout(timeout)
    }
  },[searchTerm])

// useEffect(()=>{

//   let throttle = setInterval(()=>{
//     console.log(searchTerm);
    
//   },2000)
//   return()=>{
//     clearInterval(throttle)
//   }
// },[searchTerm])

  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <input  type="search" onChange={(e)=>setSearchTerm(e.target.value)} style={{height:30,padding:5,width:400,borderWidth:3,borderStyle:'solid',borderColor:'steelblue'}}/>
        </div>

        <ul style={{}}>
         {
            results.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
         }
        </ul>
    </div>
  )
}

export default SearchWithDebounce