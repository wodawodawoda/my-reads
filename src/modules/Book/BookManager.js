import React from 'react';
import camelCaseReader from '../../_utils/camelCaseReader'

const BookManager = ({ shelves,
											 book,
											 shelf,
											 handleShelfChange
}) => (
		<select onChange={e => handleShelfChange(book, e.target.value, e.target)}
						name="selectShelf"
						id="bookManager"
						className="book__manager"
						defaultValue={shelf ? shelf : 'others'}
		>
			{shelves.map(shelf =>
				<option className="book__option"
								key={shelf}
								value={shelf}
				>{camelCaseReader(shelf)}</option>
			)}
			{/* Default option for not picked books */}
			<option value="others">-</option>
		</select>
);

export default BookManager;
