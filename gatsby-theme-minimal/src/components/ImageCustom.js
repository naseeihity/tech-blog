import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

// const API = '?imageView2/4/w/600/h/400/q/75|imageslim'
const API = ''

const ImageCustom = ({ img, alt = '' }) => (
	<ImageZoom
		zoomMargin={60}
		image={{
			src: `${img}${API}`,
			alt
		}}
		zoomImage={{
			src: img,
			alt
		}}
	/>
)

export default ImageCustom
