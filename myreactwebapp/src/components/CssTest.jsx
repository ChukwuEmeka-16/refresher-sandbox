import React from 'react'
import axios from 'axios'
const PositionTest = () =>{
    return(
        <div className='position-parent'>

        <div style={{backgroundColor:'pink'}}>hi</div>

        <div className='absolute-container'>
            <strong className='absolute-item'>item</strong>
        </div>

        <div className='fixed'>hi</div>
        
        </div>
    )
}


const GridLayout = () =>{
    return(
        <div className='gridLayout'>
            grid
        </div>
    )
}

const FlexLayout = () => {
  return (
    <div className='flexLayout'>
        <nav className='navbar'>navbar</nav>
        <div className='body'>
            <section>section</section>
            <section>section</section>
            <section>section</section>
        </div>
        <footer className='footer'>
            footer
        </footer>
    </div>
  )
}


const apiTest = async () => {
    await axios.get('http://localhost:3000/test',{headers:{
        apiKey:'123.5kg'
    }})
    .then((res)=>console.log(res))
}

const Tutorial = ()=>{
    return(
    <div className='parent'>
        <button onClick={()=>apiTest()}>request</button>
      <div className='flexbox'>
        
         <div tabIndex={0}>item 1</div>
         <div tabIndex={0}>item 2</div>
         <div tabIndex={0}>item 3</div>

      </div>
       
     <button>hi</button>
       <div className='background-styles'>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
        <strong>hi</strong>
          <nav>hii</nav>
          <section>hii</section>
          <div>hii</div>
       </div>
       
       <div className='transform-styles'>
            <div className='rotate'> rotate</div>
            <div className='trans'> rotate</div>
            <div className='rotate'> rotate</div>
       </div>
    </div>
    )
}


const CssTest = () => {
  const RenderChoice = {
    flex:<FlexLayout/>,
    grid:<GridLayout/>,
    tutorial:<Tutorial/>,
    positions:<PositionTest/>
  }
  

  return (
    RenderChoice.tutorial
  )
}

export default CssTest