import React, { Component } from 'react';

import ItemStyle from './Item.module.css';

class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: false
		}
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSelected = this.handleSelected.bind(this);
	}
	handleRemove() {
		this.props.removeItem(this.props.item.id);
	}
	handleSelected() {
		this.setState({selected: true});
		this.props.isSelected(this.props.item.id)
	}
	render() {
		const item = this.props.item;
		return (
			<li className={ItemStyle.Item} >
				<div className={ItemStyle.ItemContainer}>
					<input type="checkbox" />
					<div onClick={this.handleSelected} className={ItemStyle.ItemTitle}>
						<span className={ItemStyle.ItemName}>{item.name}</span>
						<span className={ItemStyle.ItemQ}>quantity: {item.quantity}</span>
					</div>
					<button onClick={this.handleRemove} className={ItemStyle.ItemRemove}>Remove</button>
				</div>
			</li>
		);
	}
}

export default Item;