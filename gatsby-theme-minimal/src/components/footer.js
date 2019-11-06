import React from 'react'

import style from '../style/footer.module.css'
const Footer = () => (
	<div className={style.footer}>
		<a href="/rss.xml" className={style.link} target="_blank">
			RSS
		</a>{' '}
		｜{' '}
		<a href="/talk/" className={style.link}>
			TALK
		</a>
	</div>
)

export default Footer
