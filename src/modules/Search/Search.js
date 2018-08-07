import React, { Component } from 'react';
import './Search.css'
import Books from '../Book/Books'

class Search extends Component {
	componentWillUnmount = () => {
		/**
		 * Reset search results when component unmount
		 */
		this.props.handleSearch()
	}

	render() {
		const { books, shelfs, allBooks, handleShelfChange, myBooks } = this.props
		return(
			<ul className="search">
				<Books books={books}
							 shelfs={Object.keys(shelfs)}
							 allBooks={allBooks}
							 myBooks={myBooks}
							 handleShelfChange={handleShelfChange}
				/>
			</ul>
		)
	}
}

export default Search
