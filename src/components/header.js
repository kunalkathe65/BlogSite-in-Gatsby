import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h2>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h2>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/"
              activeClassName={headerStyles.activeLink}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeLink}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/about"
              activeClassName={headerStyles.activeLink}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
