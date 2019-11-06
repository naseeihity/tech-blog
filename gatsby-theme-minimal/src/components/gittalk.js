import React from 'react'
import Gitalk from 'gitalk'
import md5 from 'blueimp-md5'

import '../style/gitalk.css'

class GitTalk extends React.Component {
	componentDidMount() {
		const gitalk = new Gitalk({
			clientID: '',
			clientSecret: '',
			repo: '',
			owner: '',
			admin: [''],
			title: this.props.title || 'Title',
			id: md5(window.location.pathname),
			distractionFreeMode: false
		})

		gitalk.render('gitalk-container')
	}

	render() {
		return <div id="gitalk-container" />
	}
}
export default GitTalk
