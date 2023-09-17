import { Suspense } from 'react'
import { Photos } from './photos'

export const PhotoFeed = () => {
  return (
    <section className="mt-4">
      <h1 className="mb-2">Photo Feed</h1>

      <Suspense fallback={<p>Loading feed...</p>}>
        <Photos />
      </Suspense>
    </section>
  )
}
