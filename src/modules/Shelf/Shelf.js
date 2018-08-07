import React from 'react';
import './Shelf.css'

const Shelf = ({ name, children }) => (
	<section className="shelf">
		<h2 className="shelf__name">{name}</h2>
		<ul className="shelf__books">
			{children}
		</ul>
	</section>
)

export default Shelf
