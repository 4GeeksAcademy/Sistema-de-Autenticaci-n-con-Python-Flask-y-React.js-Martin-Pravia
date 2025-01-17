import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const ProtectedRoute = ({ children, isLogged }) => {

    const {store, actions} = useContext(Context)

    if (!isLogged) {
        return <Navigate to="/login" replace />;
      }
    
        return children;
    };

export default ProtectedRoute