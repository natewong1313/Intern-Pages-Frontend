import { useState } from 'react'
import axios from 'axios'
import getApiUrl from 'utils/getApiUrl'

const Create = ({ updatePosts }) => {
  const [nameInput, setNameInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const buttonDisabled =
    nameInput === '' || titleInput === '' || textInput === ''

  const onCreateClick = () => {
    axios
      .post(getApiUrl() + '/posts', {
        username: nameInput,
        title: titleInput,
        content: textInput,
        datetime: new Date().toISOString(),
      })
      .then((response) => {
        setNameInput('')
        setTitleInput('')
        setTextInput('')
        updatePosts()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="sticky top-4 px-4 sm:px-0">
      <div className="bg-white dark:bg-dark-2 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
            Create A New Post
          </h2>
          <div className="mt-3 flow-root">
            <div className="border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:ring-blue-500 focus-within:ring-blue-200 focus-within:border-blue-200">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900 dark:text-gray-100"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                spellCheck={false}
                className="block w-full border-0 bg-white dark:bg-dark-2 p-0 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:ring-0 text-sm"
                placeholder="Identify yourself"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
            <div className="mt-2 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:ring-blue-500 focus-within:ring-blue-200 focus-within:border-blue-200">
              <label
                htmlFor="title"
                className="block text-xs font-medium text-gray-900 dark:text-gray-100"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                spellCheck={false}
                className="block w-full border-0 bg-white dark:bg-dark-2 p-0 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:ring-0 text-sm"
                placeholder="Give your post a title"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </div>
            <div className="mt-2 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:ring-blue-500 focus-within:ring-blue-200 focus-within:border-blue-200">
              <label
                htmlFor="text"
                className="block text-xs font-medium text-gray-900 dark:text-gray-100"
              >
                Text
              </label>
              <textarea
                rows={6}
                name="text"
                id="text"
                spellCheck={false}
                placeholder="Say some stuff..."
                className="border-0 bg-white dark:bg-dark-2 block w-full text-sm rounded-md dark:text-gray-200 focus:ring-0 p-0 resize-none"
                defaultValue={''}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              disabled={buttonDisabled}
              className="w-full disabled:cursor-default block text-center px-4 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white disabled:text-gray-400 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-dark-3 transition duration-150 ease-in-out"
              onClick={onCreateClick}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
