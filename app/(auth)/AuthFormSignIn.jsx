"use client"

import { useState } from "react"
import Logo from '../components/dojo-logo.png'
import Image from 'next/image'
import Link from "next/link"

export default function AuthForm({ handleSubmit }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={(e) => handleSubmit(e, email, password)} className="flex flex-col items-center shadow w-1/2">
            <Image
            src={Logo}
            alt='Dojo Helpdesk Logo'
            width={70}
            quality={100}
            className="my-5"
             />
            <label>
                <span>Email Address:</span>
                <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required 
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required 
                 />
                 <Link href="/account/reset" className="text-sm text-slate-400">Forgotten Password</Link>
            </label>
            <button className="bg-indigo-500 hover:bg-indigo-600 shadow-md duration-300 text-slate-200 mt-5 w-full rounded-full">Log In</button>
            <Link href="/signup" className="w-full"><button className="mt-5 w-full rounded-full bg-green-400 hover:bg-green-500 shadow-md duration-300 text-gray-700">Sign Up</button></Link>
        </form>
    )
}