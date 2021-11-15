import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Posts = ({ posts, updatePosts }) => {
  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])

  useEffect(() => {
    if ('likes' in localStorage) {
      setLikes(JSON.parse(localStorage.likes))
    } else {
      localStorage.likes = '[]'
    }
    if ('dislikes' in localStorage) {
      setDislikes(JSON.parse(localStorage.dislikes))
    } else {
      localStorage.dislikes = '[]'
    }
  }, [])

  return (
    <div className="px-4 sm:px-0 mt-4">
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white dark:bg-dark-2 px-4 py-6 shadow sm:p-6 sm:rounded-lg"
          >
            <div>
              <Header post={post} />
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-4 whitespace-pre-wrap">
                {post.content}
              </p>
              <Footer
                post={post}
                updatePosts={updatePosts}
                likes={likes}
                setLikes={setLikes}
                dislikes={dislikes}
                setDislikes={setDislikes}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
