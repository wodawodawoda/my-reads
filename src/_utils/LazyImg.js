import React, { Component, Fragment } from 'react';
import Spinner from './Spinner'
import './LazyImg.css'
class LazyImg extends Component {
	state = {
		loading: true
	}

	handleLoad = (e) => {
		this.setState({ loading: false })
		e.target.style.display = "block"
	}

	handleError = (e) => {
		this.setState({ loading: false })
		e.target.alt = 'No book cover'
	}

	render() {
		const { src, alt, className } = this.props
		const { loading } = this.state
		return	(
			<Fragment>
				{loading && src && <Spinner className={className} />}
				{src ?
					<img src={src}
						 alt={alt}
						 onLoad={this.handleLoad}
						 onError={this.handleError}
						 style={{display: 'none'}}
						 className={className}
				/> :
					<div className="book-cover-not-found">{alt}</div>
				}
			</Fragment>
		)
	}
}

export default LazyImg
