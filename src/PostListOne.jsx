import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/posts';

export default function PostList1() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    refetchInterval: 1000,
  });

  console.log(postsQuery.fetchStatus);
  console.log(postsQuery.status);

  if (postsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <div>
      <h1>Post 1</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
