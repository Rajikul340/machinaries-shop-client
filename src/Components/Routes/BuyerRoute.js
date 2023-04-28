import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../AuthProvider/AuthProvider'
import { getRole } from '../Auth/Auth'


const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext)
  const [role, setRole] = useState(null)
  const [roleLoading, setRoleLoading] = useState(true)
  useEffect(() => {
    setRoleLoading(true)
    getRole(user?.email)
    .then(data => {
      setRole(data)
      setRoleLoading(false)
    })
  }, [user])

  if (loading || roleLoading) {
    return <p>Loading.......</p>
  }

  if (user && user.uid && role === 'buyer') {
    return children
  }
  return <Navigate to='/dashboard' />
}

export default BuyerRoute
