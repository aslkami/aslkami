import React from 'react'
// import * as styles from './BlogSidebar.module.css'

function BlogSidebar({ post }) {
  const anchorList = post.body.childMarkdownRemark.headings
  return (
    <ul>
      {anchorList.map(({ id }) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  )
}

export default BlogSidebar
