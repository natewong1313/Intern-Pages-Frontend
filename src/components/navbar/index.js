import { useState, useEffect } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'
import classNames from 'utils/classNames'

const NavBar = ({ searchBarInput, setSearchBarInput }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const onModeChange = (enabled) => {
    if (enabled) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
    setDarkMode(enabled)
  }

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-dark-2 shadow mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div className="relative h-16 flex justify-between">
        <div className="relative z-10 px-2 flex lg:px-0">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-semibold dark:text-gray-100">Social Media</h1>
          </div>
        </div>
        <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
          <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-2xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-white dark:bg-dark-3 border border-gray-200 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-200 focus:border-blue-200 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Search"
                type="search"
                value={searchBarInput}
                onChange={(e) => setSearchBarInput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <Switch
            checked={isDarkMode}
            onChange={onModeChange}
            className={classNames(
              isDarkMode ? 'bg-black' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300 focus:outline-none',
            )}
          >
            <span
              className={classNames(
                isDarkMode ? 'translate-x-7' : 'translate-x-0',
                'pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-300',
              )}
            >
              <span
                className={classNames(
                  isDarkMode
                    ? 'opacity-0 ease-out duration-100'
                    : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 text-yellow-300 h-full w-full flex items-center justify-center transition-opacity',
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span
                className={classNames(
                  isDarkMode
                    ? 'opacity-100 ease-in duration-200'
                    : 'opacity-0 ease-out duration-100',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </span>
            </span>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default NavBar
