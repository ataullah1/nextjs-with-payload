type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function getAllMedia(): Promise<Post[]> {
  const result = await fetch('http://localhost:3000/api/media')

  if (!result.ok) {
    throw new Error(`Failed to fetch posts: ${result.statusText}`)
  }

  return result.json()
}
