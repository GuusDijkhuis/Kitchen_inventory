import React, { Component } from 'react';

import Nav from '../../elements/Nav/Nav';

import HeaderStyles from './Header.module.css';

class Header extends Component {
	render() {
		return (
			<header className={HeaderStyles.Header}>
				<h1>Inventory</h1>
				<Nav />
			</header>
		);
	}
}

export default Header;