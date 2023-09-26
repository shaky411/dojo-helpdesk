import Link from "next/link"

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">Ticket not found!</h2>
            <p>We could not find the ticket you were looking for.</p>
            <p>Go back to the <Link href="/Tickets">Tickets</Link></p>
        </main>
    )
}