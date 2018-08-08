import React from 'react';
import './Shelf.css'
import camelCaseReader from '../../_utils/camelCaseReader'

const Shelf = ({ name, children }) => (
	<section className="shelf">
		<h2 className="shelf__name">
			{camelCaseReader(name)}
		</h2>
		<ul className="shelf__books">
			{children}
		</ul>
	</section>
)

export default Shelf
