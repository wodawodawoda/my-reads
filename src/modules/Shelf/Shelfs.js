import React from 'react';
import Shelf from './Shelf';
import Books from '../Book/Books';

const Shelfs = ({ shelfs={},
									allBooks,
									handleShelfChange
}) => (
	Object.keys(shelfs).map(name => (
		<Shelf key={name} name={name}>
			<Books books={shelfs[name]}
						 shelfs={Object.keys(shelfs)}
						 allBooks={allBooks}
						 handleShelfChange={handleShelfChange}
			/>
		</Shelf>
	))
);

export default Shelfs;
