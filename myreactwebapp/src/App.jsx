
import { useState,lazy, Suspense } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Home from './components/Home'
import Todos from './components/Todos'
import HooksTest from './components/HooksTest'
import NotFound from './components/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'
import Login from './components/Login'
import InfiniteScroll from './components/InfiniteScroll'
import axios from 'axios'
import SearchWithDebounce from './components/SearchWithDebounce'
import AdvTest from './components/AdvTest'
//import LazyLoadTest from './components/LazyLoadTest'
const LazyDyImp = lazy(()=>import('./components/LazyLoadTest'))

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


function App() {
  const [count, setCount] = useState(0)
  const {id} = useParams()
  const location = useLocation()
// console.log(location.pathname);

 window.greet = ()=>{
  console.log('heyyy im implemented');
  
 }
  return (

    <Suspense fallback={<h1>fallback</h1>}>
    <Routes>
      <Route path='/search' element={<SearchWithDebounce/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/todos/:id' element={<Todos/>}/>
        <Route path='/hooks' element={<HooksTest/>}/>
        <Route path='/lazy' element={<LazyDyImp/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/infinite' element={<InfiniteScroll/>}/>
      <Route path='/advanced' element={<AdvTest/>}/>
    </Routes>
   </Suspense>
   
  )
}

export default App
