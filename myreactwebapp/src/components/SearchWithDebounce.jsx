import axios from 'axios'
import React, { useState } from 'react'

const SearchWithDebounce = () => {
  
  const [dish,setDish]= React.useState(['apple','avocados','melons','pineapples','cucumbers','carrots','oranges','guavas','beets','banana','apricot','grape','berries','blueberries','strawberries','stockfish','salmonfish','canoa','tilapiafish','crayfish','beef','chicken','plantain','pork','potatoes','salad','eggs','eggplant'])
  const[searchTerm,setSearchTerm] = React.useState('')
  const [results,setResults] = useState([])

  React.useEffect(()=>{
    const filtered = dish.filter((item)=>item.includes(searchTerm))
    setResults(filtered)
  },[])
  

  const debounce = (cb,delay) =>{
    
  }
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <input type="search" style={{height:30,padding:5,width:400,borderWidth:3,borderStyle:'solid',borderColor:'steelblue'}}/>
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