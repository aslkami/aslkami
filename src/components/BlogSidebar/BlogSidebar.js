import React, { useEffect, useState } from 'react'
import * as styles from './BlogSidebar.module.css'

function BlogSidebar({ post }) {
  const anchorList = post.body.childMarkdownRemark.headings
  const [marginBottom, setMarginBottom] = useState(0)

  useEffect(() => {
    const container = document.getElementsByClassName(styles.BlogSidebar)[0]
    const marginBtm = container.getBoundingClientRect().height + 48
    setMarginBottom(`-${marginBtm}`)
  }, [])

  const onAnchorListClick = (event) => {
    const anchor = event.target.textContent
    const ele = document.querySelector(`#${anchor}`)
    ele && ele.scrollIntoView()
  }

  return (
    <div
      className={styles.BlogSidebar}
      style={{ marginBottom: `${marginBottom}px` }}
    >
      <ul onClick={onAnchorListClick}>
        {anchorList.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogSidebar
