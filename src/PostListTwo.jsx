import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/posts';

export default function PostList2() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (postsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <div>
      <h1>Post 2</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
