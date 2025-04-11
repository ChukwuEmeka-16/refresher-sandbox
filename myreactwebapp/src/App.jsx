
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
import AxiosTest from './components/AxiosTest'
import ScssTest from './components/ScssTest'
import CssTest from './components/CssTest'
import ApiTest from './components/ApiTest'
//import LazyLoadTest from './components/LazyLoadTest'
const LazyDyImp = lazy(()=>import('./components/LazyLoadTest'))


//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


// applies changes to response by default
axios.defaults.transformResponse.concat(data=>{
  data.title = data.title.toUpperCase()
  return data 
})

// does this whenever a request is made
axios.interceptors.request.use(
  
  (config)=>{
    //alert(`${config.method.toUpperCase()} sent to ${config.url}`);
    console.log(config.headers);

    return config // you must do this or the request wont send
  },
  (err)=>{
    console.log(err);
    
  }
)


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
      <Route path='/apitest' element={<ApiTest/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/todos/:id' element={<Todos/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/hooks' element={<HooksTest/>}/>
        <Route path='/lazy' element={<LazyDyImp/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/infinite' element={<InfiniteScroll/>}/>
      <Route path='/advanced' element={<AdvTest/>}/>
      <Route path='/axios' element={<AxiosTest/>}/>
      <Route path='/scss' element={<ScssTest/>}/>
      <Route path='/css' element={<CssTest/>}/>
    </Routes>
   </Suspense>
   
  )
}

export default App
