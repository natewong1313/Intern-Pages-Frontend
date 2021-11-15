const filterPosts = (currentTabIdx, searchBarInput, posts) => {
  let newPosts
  switch (currentTabIdx) {
    case 1:
      newPosts = JSON.parse(JSON.stringify(posts)).sort((a, b) =>
        a.likes < b.likes ? 1 : b.likes < a.likes ? -1 : 0,
      )
      break
    case 2:
      newPosts = JSON.parse(JSON.stringify(posts)).sort((a, b) =>
        a.dislikes < b.dislikes ? 1 : b.dislikes < a.dislikes ? -1 : 0,
      )
      break
    default:
      newPosts = JSON.parse(JSON.stringify(posts))
      break
  }

  if (searchBarInput !== '') {
    newPosts = JSON.parse(JSON.stringify(newPosts)).filter(
      (post) =>
        post.content.toLowerCase().includes(searchBarInput.toLowerCase()) ||
        post.title.toLowerCase().includes(searchBarInput.toLowerCase()),
    )
  }
  return newPosts
}

export default filterPosts
