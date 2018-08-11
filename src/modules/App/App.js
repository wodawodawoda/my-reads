import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { getAll, search, update } from '../../_utils/BooksAPI';
import Shelfs from '../Shelf/Shelfs';
import Search from '../Search/Search'
import TopNav from '../TopNav/TopNav'
import Spinner from '../../_utils/Spinner'

class App extends Component {
	state = {
		shelves: {},
		books: {},
		searches: [],
		isLoading: true,
		error: null
	}

	componentDidMount = () => {
		this.setState({isLoading: true})
		getAll()
			.then(res => {
				const shelves = {}
				const books = {}
				res.forEach(book => {
					shelves[book.shelf] ? shelves[book.shelf].push(book.id) : shelves[book.shelf] = [book.id]
					books[book.id] = book
				})
				this.setState({ books, shelves })
				this.setState({ isLoading: false })
			})
			.catch(error => this.setState({error, isLoading: false}))
	}

	/**
	 * New book search handler. Fires up on search field in TopNav change.
	 * @param e - event
	 */
	handleSearch = (query) => {
		if(query === 'reset') return this.setState({searches: []})
		this.setState({isLoading: true})
		search(query)
			.then(searches => this.setState({searches, isLoading: false}))
			.catch(error => {
				console.error(error)
				this.setState({searches: [], isLoading: false, error})
			})
	}

	/**
	 * Handles adding new books to shelves and moving books between shelves. Fires up on select field change in BookManager component.
	 * @param e - event
	 * @param id - book id
	 * @param shelf - initial elements shelf id
	 */
	handleShelfChange = (book, shelf, element) => {
		const { id } = book
		element.closest('.book').style.opacity = 0.5
		update({id}, shelf)
			.then(shelves => {
				const { books } = this.state
				books[id] ? books[id].shelf = shelf : books[id] = book
				this.setState({ books, shelves })
				element.closest('.book').style.opacity = 1
			})
			.catch(error => {
				element.closest('.book').style.opacity = 1
				console.error(error)
			})
	}

	render() {
		const { shelves, books, searches, isLoading } = this.state
		const { handleSearch, handleShelfChange } = this
		/* Change TopNav elements content on route change */
		const isSearch = this.props.location.pathname === '/search'
		return (
      <div className="app">
				<TopNav isSearch={isSearch} handleSearch={handleSearch}/>
				{isLoading ?
					<Spinner size="80px" top="60px" /> :
					<Switch>
						<Route exact path={'/'} render={() =>
							<Shelfs handleShelfChange={handleShelfChange}
											books={books}
											shelves={shelves}
							/>
						}/>
						<Route path={'/search'} render={() =>
							<Search searches={searches}
											books={books}
											handleShelfChange={handleShelfChange}
											handleSearch={handleSearch}
											shelvesNames={Object.keys(shelves)}
											isLoading={isLoading}
							/>
						} />
					</Switch>
				}
      </div>
    );
  }
}

export default hot(module)(App);
