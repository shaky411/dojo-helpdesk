import Link from 'next/link'

export default function Home() {
  return (
    <main className="">

      <div className='bg-slate-400 p-10 rounded text-slate-100 shadow'>
      <h2 className='mb-2 text-slate-100 text-xl'>Welcome</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam natus provident. Atque corrupti aut ea ipsam quae voluptas, molestias ad libero consectetur in minus reprehenderit sit eveniet cumque, laboriosam non tempora rem architecto soluta dolorem est sunt voluptatem minima. Explicabo aut asperiores repudiandae hic minima illum enim cum tenetur?</p>
      </div>
      <div className='flex justify-center my-8'>
        <Link href="/Tickets">
          <button className='bg-indigo-500 text-slate-100 rounded-full transition duration-300'>View Requests</button>
        </Link>
      </div>

      <h2>Recent Updates</h2>

      <div className='card'>
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem amet beatae dolor deleniti, officiis magnam quis temporibus, saepe minus debitis neque atque est hic ab nostrum. Eligendi eum soluta fugit!</p>
      </div>
      <div className='card'>
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus, assumenda, dicta esse in distinctio aliquid suscipit labore, laborum eos quisquam! Sint magni ea at labore veritatis soluta. Placeat earum nihil est illo repellat sequi doloribus numquam fugit maxime minima quae odio, soluta facere, deleniti doloremque dolorem delectus dolorum voluptas!</p>
      </div>
    </main>
  )
}