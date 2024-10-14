export function getPosts() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: 'Post 1: lorem ipsum',
          },
          {
            id: 2,
            title: 'Post 2: lorem ipsum',
          },
        ]),
      1000
    )
  );
}
