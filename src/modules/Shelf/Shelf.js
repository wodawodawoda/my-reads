import React from 'react';

const Shelf = ({ name, children }) => (
	<section className="shelf">
		<h2>{name}</h2>
		<ul className="shelf-books-list">
			{children}
		</ul>
	</section>
)

export default Shelf
