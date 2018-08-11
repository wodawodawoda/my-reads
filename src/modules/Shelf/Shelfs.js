import React from 'react';
import Shelf from './Shelf';
import Book from '../Book/Book';
import BookManager from '../Book/BookManager'

const Shelfs = ({ shelves, books, handleShelfChange }) => {
	const shelvesNames = Object.keys(shelves)
	return (
		shelvesNames.map(name => (
			<Shelf key={name} name={name}>
				{shelves[name].map(id =>
				<Book key={id} data={books[id]}>
					<BookManager book={books[id]}
											 shelf={name}
											 shelves={shelvesNames}
											 handleShelfChange={handleShelfChange}
					/>
				</Book>
				)}
			</Shelf>
		))
	);
}

export default Shelfs;
