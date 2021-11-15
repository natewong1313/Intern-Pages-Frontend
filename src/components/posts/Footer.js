import axios from 'axios'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid'
import getApiUrl from 'utils/getApiUrl'
import classNames from 'utils/classNames'

const Footer = ({
  post,
  updatePosts,
  likes,
  setLikes,
  dislikes,
  setDislikes,
}) => {
  const onLike = async () => {
    await updatePost('likes')
    setLikes([...likes, post.id])
    localStorage.likes = JSON.stringify([...likes, post.id])
  }
  const onDislike = async () => {
    await updatePost('dislikes')
    setDislikes([...dislikes, post.id])
    localStorage.dislikes = JSON.stringify([...dislikes, post.id])
  }

  const updatePost = async (field) => {
    return new Promise((resolve, reject) => {
      axios
        .post(getApiUrl() + '/posts/update', {
          id: post.id,
          field,
        })
        .then((response) => {
          updatePosts()
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  return (
    <div className="mt-6 flex justify-between space-x-8">
      <div className="flex space-x-6">
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            disabled={likes.includes(post.id)}
            className={classNames(
              'inline-flex space-x-2',
              likes.includes(post.id)
                ? 'text-blue-500 cursor-default'
                : 'text-gray-400 hover:text-gray-500',
            )}
            onClick={onLike}
          >
            <ThumbUpIcon className="h-5 w-5" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              {post.likes}
            </span>
          </button>
        </span>
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            disabled={dislikes.includes(post.id)}
            className={classNames(
              'inline-flex space-x-2',
              dislikes.includes(post.id)
                ? 'text-blue-500 cursor-default'
                : 'text-gray-400 hover:text-gray-500',
            )}
            onClick={onDislike}
          >
            <ThumbDownIcon className="h-5 w-5" />
            <span className="font-medium text-gray-900 dark:text-gray-300">
              {post.dislikes}
            </span>
          </button>
        </span>
      </div>
      {/*<div className="flex text-sm">*/}
      {/*  <span className="inline-flex items-center text-sm">*/}
      {/*    <button*/}
      {/*      type="button"*/}
      {/*      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"*/}
      {/*    >*/}
      {/*      <ShareIcon className="h-5 w-5" />*/}
      {/*      <span className="font-medium text-gray-900 dark:text-gray-300">*/}
      {/*        Share*/}
      {/*      </span>*/}
      {/*    </button>*/}
      {/*  </span>*/}
      {/*</div>*/}
    </div>
  )
}

export default Footer
