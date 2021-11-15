import { useEffect, useState } from 'react'

import NavBar from 'components/navbar'
import Create from 'components/create'
import Tabs from 'components/tabs'
import Posts from 'components/posts'
import filterPosts from 'utils/filterPosts'
import fetchPosts from './utils/fetchPosts'

const tabs = ['Most Recent', 'Most Liked', 'Most Disliked']

export default function App() {
  const [searchBarInput, setSearchBarInput] = useState('')
  const [currentTabIdx, setCurrentTabIdx] = useState(0)
  const [posts, setPosts] = useState([])

  const updatePosts = async () => {
    const newPosts = await fetchPosts()
    setPosts(newPosts)
  }

  useEffect(() => {
    updatePosts()
    setInterval(() => updatePosts(), 10000)
  }, [])

  const filteredPosts = filterPosts(currentTabIdx, searchBarInput, posts)
  return (
    <>
      <NavBar
        searchBarInput={searchBarInput}
        setSearchBarInput={setSearchBarInput}
      />
      <div className="py-4 sm:py-10 max-w-3xl mx-auto sm:px-6 lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8 ">
        <div className="col-span-4 order-1 sm:order-2 mb-4 sm:mb-0">
          <Create updatePosts={updatePosts} />
        </div>
        <main className="col-span-8 order-2 sm:order-1">
          <Tabs
            tabs={tabs}
            currentTabIdx={currentTabIdx}
            setCurrentTabIdx={setCurrentTabIdx}
          />
          <Posts posts={filteredPosts} updatePosts={updatePosts} />
        </main>
      </div>
    </>
  )
}
