import { useQuery } from '@tanstack/react-query';
import { getPostById, getPosts, getUserById } from './api/posts';

export default function Post({ id }) {
  const postsQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
  });

  const usersQuery = useQuery({
    queryKey: ['users', postsQuery?.data?.userId],
    enabled: postsQuery?.data?.userId != null,
    queryFn: () => getUserById(postsQuery.data.userId),
  });

  if (postsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <div>
      <h1>
        Post {postsQuery.data.id} <br />
        <small>
          User:
          {usersQuery.isLoading
            ? 'Loading user...'
            : usersQuery.isError
            ? 'Error loading User'
            : usersQuery.data.name}
        </small>
      </h1>
      {postsQuery.data.title}
    </div>
  );
}
