const getDate = (datetime) => {
  const date = new Date(datetime)
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.toLocaleString('default', { day: 'numeric' })
  const time = date.toLocaleString('default', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${month} ${day} at ${time}`
}

const Header = ({ post }) => {
  return (
    <div>
      <div className="flex space-x-2">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {post.username}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>{getDate(post.datetime)}</p>
        </div>
      </div>
      <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">
        {post.title}
      </h2>
    </div>
  )
}

export default Header
