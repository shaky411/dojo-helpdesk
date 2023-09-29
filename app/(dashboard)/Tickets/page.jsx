import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: 'Dojo Helpdesk | Tickets'
}

export default function Tickets() {

    return (
      <main className="">
        <nav>
          <div>
            <h2>Feature Requests</h2>
            <p><small>Currently open requests</small></p>
          </div>
          <Link href="/Tickets/create" className="ml-auto">
            <button className="btn-primary">New Request</button>
          </Link>
        </nav>

        <Suspense fallback={<Loading />}>
        <TicketList />
        </Suspense>
      </main>
    )
  }