import CreateForm from "./CreateForm"
import Link from "next/link"

export default function CreateTicket() {
    return (
        <main>
            <h2 className="text-center">Add a New Request</h2>
            <CreateForm />
        </main>
    )
}