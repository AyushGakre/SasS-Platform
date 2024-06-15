"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Welcome = () => {
  const{user,isLoaded} = useUser()
  return (
    <>
    <p className='text-2xl text-white font-semibold'>Welcome back, {user?.fullName} 👋</p>
    <p className='text-sm font-normal text-slate-200'>This is your finance Report</p>
    </>
  )
}

export default Welcome