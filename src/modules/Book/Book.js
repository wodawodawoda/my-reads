import React from 'react';
import './Book.css'

const Book = ({ data, children }) => {
	const { imageLinks='', title='', authors=[] } = data
	return(
		<li className="book">
			<details className="book__details"
							 onToggle={e => e.target.classList.toggle('book__details--open')}>
				<summary className="book__summary">Details</summary>
				<h3 className="book__title">{title}</h3>
				<address className="book__author">
					{authors.map(author => authors.length > 1 ? `${author} ` : author)}
				</address>
			</details>
			<img className="book__image" src={imageLinks.thumbnail} alt={title}/>
			{children}
		</li>
	);
}

export default Book;
