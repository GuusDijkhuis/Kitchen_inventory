import React, { Component } from 'react';

import Item from '../../elements/Item/Item';

import InventoryListStyle from './InventoryList.module.css';

class InventoryList extends Component {
	render() {
		return (
			<div className={InventoryListStyle.InventoryList}>
				<h3>Inventory</h3>
				<ul>
					{this.props.items.map(item => 
						<Item 
							item={item} 
							removeItem={this.props.removeItem}
							isSelected={this.props.isSelected}
						/>
					)}
				</ul>
			</div>
		);
	}
}

export default InventoryList;