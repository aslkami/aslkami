import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import Search from './search'
const searchIndices = [{ name: `blog`, title: `blog` }]

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>安了个装</span>
    </Link>
    <ul className={styles.navigation}>
      <Search indices={searchIndices} />
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          主页
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          博客
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
