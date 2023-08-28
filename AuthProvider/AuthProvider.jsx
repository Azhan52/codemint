"use client"

import React from 'react'
import { SessionProvider } from "next-auth/react"

const AuthProvider = ({ childern }) => {
  return (
    <SessionProvider>
{childern}
    </SessionProvider>
  )
}

export default AuthProvider
