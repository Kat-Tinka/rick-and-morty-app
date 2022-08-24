import React from 'react'
import styles from './Search.module.css'


//6.add FUNCTIONALITY to SEARCH: coming from App.js=>  insert updateSearch in const


const Search = ({updateSearch}) => {
  return (
    <form className='d-flex justify-content-center gap-3 mb-5'>
    <input 
    // 7.add FUNCTIONALITY:In order to capture whatever I type in the search field , I want to capture this in the input=> I put a "onchange event" into the Search/return function"
    onChange={event=>{
      // 7.add FUNCTIONALITY:pass "event" into the brackets() & ".target.value"
      // 8.add FUNCTIONALITY:=> now, whatever I write inside the input now, it will trigger the "updateSearch"-Function inside the "search" and update "search"
      // from the:"let [search, updateSearch] = useState("");(in the App.js-file)
      // and its gonna update the API as well
      
      updateSearch(event.target.value);
    }}
      placeholder="Search Character" 
      type="text" 
      className={styles.input}
    />
    <button className={`btn btn-primary`}>Search</button>
    {/* <button className={`{styles.btn}btn btn-primary fs-6`}>Search</button> */}
    </form>
  )
}

export default Search


