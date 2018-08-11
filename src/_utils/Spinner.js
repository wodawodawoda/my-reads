import React from 'react';
import './Spinner.css'

const Spinner = ({ size, top, className }) => (
	<div className={`spinner ${className}`} style={{marginTop: top}}>
		<span className="spinner__animate" style={{width: size, height: size}}></span>
		loading
	</div>
)

export default Spinner
