import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ul>
        <li className="m-4">
          <Link href="/counter">Counter</Link>
        </li>
        <li className="m-4">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </main>
  )
}
