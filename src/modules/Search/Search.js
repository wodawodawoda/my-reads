import React, { Component } from 'react';
import './Search.css'
import Book from '../Book/Book'
import BookManager from '../Book/BookManager'
import Spinner from '../../_utils/Spinner'

class Search extends Component {
	componentWillUnmount = () => {
		/**
		 * Reset search results when component unmount
		 */
		this.props.handleSearch('reset')
	}

	render() {
		const { searches, books, shelvesNames, handleShelfChange, isLoading } = this.props
		if(isLoading) return <Spinner size="80px" top="60px" />
		return(
			<ul className="search">
				{searches.map(book =>
					<Book key={book.id} data={book}>
						<BookManager book={book}
												 shelf={books[book.id] ? books[book.id].shelf : 'others'}
												 shelves={shelvesNames}
												 handleShelfChange={handleShelfChange}
						/>
					</Book>
				)}
			</ul>
		)
	}
}

export default Search
