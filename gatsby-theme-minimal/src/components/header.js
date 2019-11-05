import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from '../style/header.module.css'
const Header = ({ siteTitle }) => (
	<header className={style.header}>
		<div className={style.box}>
			<h1 className={style.title}>
				<Link to="/" className={style.link}>
					{siteTitle}
				</Link>
			</h1>
			<p className={style.content}>
				A Student
				<br />A Programmer
				<br />A Fan Of Director Hou
			</p>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: `COACO`
}

export default Header
