import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Filters from '../Filters/Filters'
import Cards from '../Cards/Cards'
import Pagination from '../Pagination/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <Filters/>
      <Cards/>
      <Pagination/>
    </div>
  )
}

export default Home
