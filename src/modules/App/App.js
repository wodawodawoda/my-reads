import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom'
import './App.css';

import { getAll, search, update } from '../../_utils/BooksAPI';
import Shelfs from '../Shelf/Shelfs';
import Search from '../Search/Search'
import TopNav from '../TopNav/TopNav'

class App extends Component {
	state = {
		shelfs: {},
		allBooks: {},
		searches: {}
	}

	componentDidMount = () => {
		getAll()
			.then(books => {
				const allBooks = {}
				const shelfs = {}
				/**
				 * Split all books in one loop to "allBooks" dictionary and "shelfs" object of arrays on App component mount.
				 * I've done it to avoid using multiple filters later in each shelf component.
				 */
				books.forEach(book => {
					allBooks[book.id] = book
					shelfs[book.shelf] = shelfs[book.shelf] ? [...shelfs[book.shelf], book.id] : [book.id]
				})
				this.setState({ shelfs, allBooks })
			})
			.catch(console.error)
	}

	handleSearch = (e) => {
		if(!e || !e.target.value) return this.setState({searches: []})
		const query = e.target.value
		const searches = {}
		search(query)
			.then(books => {
				books.forEach(book => searches[book.id] = book)
				this.setState({searches})
			})
			.catch(err => {
				console.error(err)
				this.setState({searches: []})
			})
	}

	handleShelfChange = (e, id, shelf='others') => {
		const target = e.target.value || 'others'
		const shelfs = this.state.shelfs
		const allBooks = this.state.allBooks
		const searches = this.state.searches
		console.log(id, target, shelf)
		/**
		 * Update book item "shelf" property
		 */
		allBooks[id] ? allBooks[id].shelf = target : allBooks[id] = searches[id]

		/**
		 * API didn't let me to reset "shelf" property to empty string or undefined, so
		 * I have to check if shelf exist and target isn't artificial 'others' shelf
		 * used only for deleting book from users My Reads books before updating local state.
		 */
		if(shelfs[shelf]) shelfs[shelf] = shelfs[shelf].filter(bookId => id !== bookId)
		if(target !== 'others') {
			shelfs[target] = [...shelfs[target], id]
		}
		this.setState({shelfs, allBooks})
		/**
		 * Update DB
		 */
		update({id} , target)
	}

	render() {
		const { shelfs, allBooks, searches } = this.state
		const { handleSearch, handleShelfChange } = this
		const isSearch = this.props.location.pathname === '/search'
    return (
      <div className="app">
				<TopNav isSearch={isSearch} handleSearch={handleSearch}/>
				<Route exact path={'/'} render={() =>
					<Shelfs handleShelfChange={handleShelfChange}
									allBooks={allBooks}
									shelfs={shelfs}
					/>
				}/>
				<Route path={'/search'} render={() =>
					<Search books={Object.keys(searches)}
									shelfs={shelfs}
									allBooks={searches}
									myBooks={allBooks}
									handleShelfChange={handleShelfChange}
									handleSearch={handleSearch}
					/>
				} />
      </div>
    );
  }
}

export default hot(module)(App);
