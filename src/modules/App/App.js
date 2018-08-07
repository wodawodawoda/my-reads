import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import { getAll } from '../../_utils/BooksAPI';
import Shelf from '../Shelf/Shelf';
import Book from '../Book/Book';

class App extends Component {
	state = {
		shelfs: {}
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

	render() {
		const { shelfs } = this.state
    return (
      <div className="App">
				{Object.keys(shelfs).map(name => (
					<Shelf key={name} name={name}>
						{shelfs[name].map(book => <Book key={book.id} data={book}/>)}
					</Shelf>
				))}
      </div>
    );
  }
}

export default hot(module)(App);
