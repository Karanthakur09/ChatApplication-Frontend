import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute({ children, user, redirect = "/login" }) {

    if (!user) return <Navigate to={redirect} />

    return children ? children : <Outlet />;//basically it is a placeholder
}

export default ProtectRoute