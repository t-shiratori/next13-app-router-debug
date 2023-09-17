import { PhotoFeed } from './photoFeed'

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>

      <PhotoFeed />
    </div>
  )
}
