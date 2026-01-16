import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({isadmin, children}) => {
    if(!isadmin)
  return 
        <Navigate to="/" replace/>
    return children
  
}

