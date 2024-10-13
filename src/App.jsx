import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css';

const Posts = [
  {
    id: 1,
    title: 'Post 1',
  },
  {
    id: 2,
    title: 'Post 2',
  },
];

function App() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...Posts]),
    // queryFn: ()=> Promise.reject('Error occured!!!!')
  });

  const newPostQuery = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        Posts.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  if (postsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <div>
      <h1 className='app'>TanStack Query</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostQuery.isLoading}
        onClick={() => newPostQuery.mutate('New Post')}>
        Add new post
      </button>
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
