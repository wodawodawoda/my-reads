import React from 'react';

const Book = ({ data }) => {
	const { imageLinks, title, authors } = data
	return(
		<li className="book">
			<img src={imageLinks.thumbnail} alt={title}/>
			<h3>{title}</h3>
			{authors.map(author => authors.length > 1 ? `${author} ` : author)}
		</li>
	);
}

export default Book;
