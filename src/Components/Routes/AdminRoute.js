import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getRole } from '../Auth/Auth'
import { UserContext } from '../AuthProvider/AuthProvider'


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext)
  const [role, setRole] = useState(null)
  const [roleLoading, setRoleLoading] = useState(true)
  useEffect(() => {
    setRoleLoading(true)
    getRole(user?.email).then(data => {
      setRole(data)
      setRoleLoading(false)
    })
  }, [user])

  if (loading || roleLoading) {
    return <p>loading...</p>
  }

  if (user && user.uid && role === 'admin') {
    return children
  }
  return <Navigate to='/dashboard' />
}

export default AdminRoute
