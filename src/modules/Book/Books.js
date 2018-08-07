import React from 'react';
import Book from './Book';
import BookManager from './BookManager'

const Books = ({ books, shelfs, handleShelfChange, allBooks, myBooks={} }) => {
	return (
		books.map(bookId =>
			<Book key={bookId} data={allBooks[bookId]}>
				<BookManager id={bookId}
										 // Check if book exist in user library, if not use provided shelf name.
										 shelf={myBooks[bookId] ? myBooks[bookId].shelf : allBooks[bookId].shelf}
										 shelfs={shelfs}
										 handleShelfChange={handleShelfChange}
				/>
			</Book>
		)
	)
}

export default Books
