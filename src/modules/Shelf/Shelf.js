import React from 'react';
import './Shelf.css'

const Shelf = ({ name, children }) => (
	<section className="shelf">
		<h2 className="shelf__name">
			{name
				.replace(/([A-Z])/g, ' $1')
				.replace(/./, firstLetter => firstLetter.toUpperCase())
			}
		</h2>
		<ul className="shelf__books">
			{children}
		</ul>
	</section>
)

export default Shelf
