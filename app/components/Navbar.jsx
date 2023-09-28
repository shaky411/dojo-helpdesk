import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
    return (
        <nav>
            <Image
            src={Logo}
            alt='Dojo Helpdesk Logo'
            width={70}
            quality={100}
             />
          <Link href="/"><h1>Dojo Helpdesk</h1></Link>
          <Link href="/">Dashboard</Link>
          <Link href="/Tickets" className='mr-auto'>Tickets</Link>

          {user && <span className='text-indigo-500'>Hello: {user.email}</span>}
          <LogoutButton />
        </nav>
    )
};