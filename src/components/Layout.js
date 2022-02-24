import {Link} from 'gatsby';
import React from 'react';

const Layout = ({children}) => {
	return (
		<div>
			<header>
				<nav>
					<Link to='/'>Home</Link>
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<p>A fun footer</p>
			</footer>
		</div>
	);
};

export default Layout;
