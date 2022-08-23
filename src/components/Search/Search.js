import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
    <form className='d-flex justify-content-center gap-3 mb-5'>
    <input 
      placeholder="Search Character" 
      type="text" 
      className={styles.input}
    />
    <buton className="btn btn-primary">Search</buton>
  
    </form>
  )
}

export default Search


