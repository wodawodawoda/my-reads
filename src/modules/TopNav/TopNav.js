import React from 'react';
import { Route, Link } from 'react-router-dom'
import './TopNav.css'

const TopNav = ({isSearch, handleSearch}) => (
	<nav className="top-nav">
		{!isSearch && <h1>My Reads</h1>}
		<Route path={'/search'} render={() =>
			<input className="top-nav__input"
						 type="text"
						 placeholder="Search by title or author"
						 onChange={(e) => handleSearch(e.target.value)}
			/>
		}/>
		<Link to={isSearch ? '/' : 'search'}
					className="top-nav__search"
		>{isSearch ? '⮌' : '⌕'}</Link>
	</nav>
);

export default TopNav;
