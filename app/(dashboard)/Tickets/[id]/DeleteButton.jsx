"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// icons & UI
import { TiDelete } from 'react-icons/ti'

export default function DeleteIcon({ id }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    setIsLoading(true)
    
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE'
    })
    const json = await res.json()

    if (json.error) {
      console.log(error)
      setIsLoading(false)
    }
    if (!json.error) {
      router.refresh()
      router.push('/Tickets')
    }
  }

  return (
    <button 
      className="bg-rose-500 hover:bg-rose-600 hover:shadow duration-300 text-slate-100 rounded-full" 
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete />
          Delete Request
        </>
      )}
    </button>
  )
}