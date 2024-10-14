import './App.css';
import { useState } from 'react';
import PostList1 from './PostListOne';
import PostList2 from './PostListTwo';
import Post from './Post';

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

// /posts => ['posts']
// /posts/1 => ['posts', post.id]
// /posts?authorId=1 => ['posts', {authorId: 1}]
// /posts/2/comments => ['posts', post.id, 'comments']
function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  return (
    <div>
      <h1 className='app'>TanStack Query</h1>
      <button onClick={() => setCurrentPage(<PostList1 />)}> Post 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}> Post 2</button>
      <button onClick={() => setCurrentPage(<Post id='1' />)}> Post</button>
      <br />
      {currentPage}
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
