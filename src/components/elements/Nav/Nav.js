import React, { Component } from 'react';

import NavStyle from './Nav.module.css';

class Nav extends Component {
	render() {
		return (
			<nav className={NavStyle.Nav}>
				<ul className={NavStyle.NavList}>
					<li className={NavStyle.NavListItem}>
						Home
					</li>
					<li className={NavStyle.NavListItem}>
						List
					</li>
					<li className={NavStyle.NavListItem}>
						Contact
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;