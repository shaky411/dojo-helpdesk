import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AuthLayout({ children }) {

    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/')
    }

    return (
        <>
        <nav>
            <Link href="/welcome" className="mr-auto"><h1>Dojo Helpdesk</h1></Link>
            {/* <Link href="/welcome" className="mr-auto">Home</Link> */}
            <Link href="/login">Log in</Link>
        </nav>
        {children}
        </>
    )
}