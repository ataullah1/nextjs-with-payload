'use client'
import { useEffect, useState } from 'react'

interface Blog {
  id: string
  Title: string
  BlogContent: string
}

interface ApiResponse {
  docs: Blog[]
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://nextjs-with-payload-2vqoxofdp-md-ataullahs-projects.vercel.app/api/blogs',
        )
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  console.log('Blogs Data >>>>>>>>>', data?.docs)

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        <p>Loading...</p>
      </div>
    )
  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-3xl">
        <p>Kono Data nay</p>
      </div>
    )

  return (
    <div className="bg-gray-900 text-white">
      <div className="min-h-screen w-full flex items-center justify-center flex-col gap-10  container mx-auto">
        <h1 className="text-4xl font-bold">Hello</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.docs && data.docs.length > 0 ? (
            data.docs.map((blog) => (
              <div key={blog.id}>
                <h1 className="text-2xl font-bold pb-5">{blog.Title}</h1>
                <p>{blog.BlogContent}</p>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  )
}
