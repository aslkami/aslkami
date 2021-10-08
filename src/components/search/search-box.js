import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Search as SearchIcon } from '@styled-icons/fa-solid'

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      <input
        className="SearchInput"
        type="text"
        placeholder="寻找星辰大海"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon className="SearchIcon" />
    </form>
  )
)
