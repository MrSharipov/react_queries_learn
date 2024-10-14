const Posts = [
  {
    id: 1,
    title: 'Post 1: lorem ipsum',
    userId: 12,
  },
  {
    id: 2,
    title: 'Post 2: lorem ipsum',
    userId: 21,
  },
  {
    id: 3,
    title: 'My First post',
    userId: 21,
  },
]

const Users = [
  {
    id: 12,
    name: 'Umid Sharipov',
  },
  {
    id: 21,
    name: 'John Deep',
  },
]

export function getPosts() {
  return new Promise((resolve) => setTimeout(() => resolve(Posts), 1000))
}

export function getPostById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Posts.find((p) => p.id == id)), 1000)
  )
}

export function getUserById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Users.find((p) => p.id == id)), 1000)
  )
}

export function createPost(data) {
  const id = crypto.randomUUID()
  return new Promise((resolve) =>
    setTimeout(() => {
      Posts.push({ id, title: data.title, userId: 12 })
      resolve(getPostById(id))
    }, 1000)
  )
}
