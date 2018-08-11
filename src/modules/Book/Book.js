import React from 'react';
import './Book.css'
import LazyImg from '../../_utils/LazyImg'

const Book = ({ data, children }) => {
	const { imageLinks={}, title='', authors=[] } = data
	return(
		<li id={data.id} className="book">
			<details className="book__details"
							 onToggle={e => e.target.classList.toggle('book__details--open')}>
				<summary className="book__summary">Details</summary>
				<h3 className="book__title">{title}</h3>
				<address className="book__author">
					{/* Check if there is more author than 1 and add white space when it is true */}
					{authors.map(author => authors.length > 1 ? `${author} ` : author)}
				</address>
			</details>
			<LazyImg className="book__image" src={imageLinks.thumbnail} alt={title} />
			{children}
		</li>
	);
}

export default Book;
