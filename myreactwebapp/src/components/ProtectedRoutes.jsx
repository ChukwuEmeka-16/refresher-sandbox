import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    let user = null

  return user?<Outlet/>:<Navigate to='./login'/>
}

export default ProtectedRoutes