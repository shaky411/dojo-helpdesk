"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// components
import AuthFormSignIn from '../AuthFormSignIn' 

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      // setError(error.message)
      alert("Incorrect details")
    }
    if (!error) {
      router.push('/')
    } 

  }

  
  return (
    <main>
      <h2 className="text-center">Log In</h2>

      <AuthFormSignIn handleSubmit={handleSubmit} />

      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}