import React, { Component, Fragment } from 'react';
import Spinner from './Spinner'

class LazyImg extends Component {
	handleLoadStart = (e) => {
		this.setState({loading: false})
		e.target.style.display = "block"
		e.target.previousElementSibling.style.display = "none"
	}

	render() {
		const { src, alt, className } = this.props
		return	<Fragment>
				<Spinner className={className} />
				<img src={src}
						 alt={alt}
						 onLoad={this.handleLoadStart}
						 style={{display: 'none'}}
						 className={className}
				/>
			</Fragment>
	}
}

export default LazyImg
