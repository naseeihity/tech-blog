import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from '../style/header.module.css'
const Header = ({ siteTitle, subTitle }) => (
	<header className={style.header}>
		<div className={style.box}>
			<h1 className={style.title}>
				<Link to="/" className={style.link}>
					{siteTitle}
				</Link>
			</h1>
			<p dangerouslySetInnerHTML={{ __html: subTitle }} className={style.content}></p>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: 'A Blog',
	subTitle: 'Hello Wolrd'
}

export default Header
