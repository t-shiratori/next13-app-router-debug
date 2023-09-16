import Link from 'next/link'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="mb-4">
        <Link href="/">Home</Link>
      </nav>

      <hr className="mb-4" />

      {children}
    </section>
  )
}
