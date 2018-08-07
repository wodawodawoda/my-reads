import React from 'react';

const BookManager = ({ shelfs, id, shelf, handleShelfChange }) => (
		<select onChange={e => handleShelfChange(e, id, shelf)}
						name="selectShelf"
						id="bookManager"
						className="book__manager"
						defaultValue={shelf ? shelf : 'others'}
		>
			{shelfs.map(shelf =>
				<option className="book__option"
								key={shelf}
								value={shelf}
				>{shelf}</option>
			)}
			<option value="others">-</option>
		</select>
);

export default BookManager;
