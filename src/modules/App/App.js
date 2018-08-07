import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link } from 'react-router-dom'
import './App.css';

import { getAll, search } from '../../_utils/BooksAPI';
import Shelfs from '../Shelf/Shelfs';
import Search from '../Search/Search'
import TopNav from '../TopNav/TopNav'

class App extends Component {
	state = {
		shelfs: {},
		books: [],
	}

	componentDidMount = () => {
		getAll()
			.then(books => {
				console.log(books)
				const shelfs = {}
				books.forEach(book => {
					shelfs[book.shelf] = shelfs[book.shelf] ? [...shelfs[book.shelf], book] : [book]
				})
				this.setState({ shelfs })
			})
			.catch(console.error)
	}

	handleSearch = (e) => {
		const query = e.target.value
		search(query)
			.then(books => this.setState({
				books: books === undefined || books.error ? [] : books
			}))
			.catch(console.error)
	}

	render() {
		const { shelfs, books } = this.state
		const { handleSearch } = this
		const isSearch = this.props.location.pathname === '/search'
    return (
      <div className="app">
				<TopNav isSearch={isSearch} handleSearch={handleSearch}/>
				<Route exact path={'/'} render={() => <Shelfs shelfs={shelfs} /> }/>
				<Route path={'/search'} render={() => <Search books={books} /> } />
      </div>
    );
  }
}

export default hot(module)(App);
