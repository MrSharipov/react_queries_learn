import { useQuery } from '@tanstack/react-query';
import './App.css'

function App() {

  const Posts = [
    {
      id: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      title: 'Post 2'
    }
  ];

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: ()=> wait(1000).then(()=> [...Posts])
    // queryFn: ()=> Promise.reject('Error occured!!!!')
  })

  if(postsQuery.isLoading) {
    return <p>Loading...</p>
  }

  if(postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>
  }

  return <div>
    <h1 className="app">TanStack Query</h1>
    {postsQuery.data.map(post => (
      <div key={post.id}>{post.title}</div>
    ))}
  </div>
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App
