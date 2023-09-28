"use client"

import { useState } from "react"

export default function Reset() {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            
            const {error} = await supabase.auth.api.resetPasswordForEmail(email)

            if(!error) {
                Toast('hi')
            } else if (error) {
                Toast('error')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2 className="text-center mb-5">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <span className="text-[13px] text-gray-400">Enter email address to reset password</span>
                <input 
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                 />

                 <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-slate-600 duration-300 rounded-full">Submit</button>
            </form>
        </div>
    )
}