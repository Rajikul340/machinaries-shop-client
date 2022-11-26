import React, { useContext, useEffect, useState } from 'react'
import { getRole } from '../../Auth/Auth'
import { UserContext } from '../../AuthProvider/AuthProvider'


const DashBoard = () => {
  const { user } = useContext(UserContext)

  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getRole(user?.email)
    .then(data => {
      setRole(data)
      setLoading(false)
    })
  }, [user])
  console.log(role)
  return (
    <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center'>
       <h1 className='lg:text-6xl capitalize font-serif font-bold text-orange-400'>welcome to</h1>
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
      {role && role !== "requested" ? (
                <>{role === "admin" ?   <>
                <h2 className="font-bold font-serif lg:text-2xl">Admin Dashboard</h2>
                <hr />
               </> :    <>
                 <h2 className="font-bold font-serif lg:text-2xl">Buyer Dashboard</h2>
                 <hr />
                </>}</>
              ) : (
                <>
                <h2 className="font-bold font-serif lg:text-2xl">Seller Dashboard</h2>
                <hr />
               </>
              )}
      </div>
    </div>
  )
}

export default DashBoard
