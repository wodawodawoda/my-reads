import React from 'react';
import './Search.css'
import Book from '../Book/Book'

const Search = ({ books }) => (
	<ul className="search">
		{books.map(book => <Book key={book.id} data={book} />)}
	</ul>
)

export default Search
