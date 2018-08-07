import React from 'react';
import Shelf from './Shelf'
import Book from '../Book/Book'

const Shelfs = ({ shelfs={} }) => (
	Object.keys(shelfs).map(name => (
		<Shelf key={name} name={name}>
			{shelfs[name].map(book => <Book key={book.id} data={book}/>)}
		</Shelf>
	))
)

export default Shelfs
