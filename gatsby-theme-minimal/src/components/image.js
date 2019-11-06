import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const Image = ({ img, alt = '' }) => (
	<ImageZoom
		zoomMargin={60}
		image={{
			src: img,
			alt
		}}
		zoomImage={{
			src: img,
			alt
		}}
	/>
)

export default Image
