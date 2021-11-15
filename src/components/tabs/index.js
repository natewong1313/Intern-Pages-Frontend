import classNames from 'utils/classNames'

const Tabs = ({ tabs, currentTabIdx, setCurrentTabIdx }) => {
  return (
    <div className="px-4 sm:px-0">
      <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200 dark:divide-gray-700">
        {tabs.map((tab, tabIdx) => (
          <button
            key={tab}
            onClick={() => setCurrentTabIdx(tabIdx)}
            className={classNames(
              tabIdx === currentTabIdx
                ? 'text-gray-900 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-white dark:bg-dark-2 py-4 px-6 text-sm ' +
                'font-medium text-center flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-3 focus:z-10' +
                ' transition duration-100 ease-in-out',
            )}
          >
            <h1>{tab}</h1>
            <span
              className={classNames(
                tabIdx === currentTabIdx ? 'bg-blue-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5',
              )}
            />
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Tabs
