import React, { Component } from 'react';

import InventoryList from '../InventoryList/InventoryList';
import AddForm from '../AddForm/AddForm';
import InventoryDetails from '../InventoryDetails/InventoryDetails';

import InventoryStyle from './Inventory.module.css';

class Inventory extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{ 
					id: '86512', 
					name: 'eggs', 
					quantity: '1',
					ingredients: {
						ingredient_0: 'egg'
					},
					nutrients: {
						energy: 634,
						fat: 53,
						saturated_fat: 8,
						carbohydrates: 8.5,
						sugar: 5.4,
						protein: 27,
						salt: 0.8
					}
				},
				{ 
					id: '2356', 
					name: 'milk', 
					quantity: '4',
					ingredients: {
						ingredient_0: 'milk'
					},
					nutrients: {
						energy: 634,
						fat: 53,
						saturated_fat: 8,
						carbohydrates: 8.5,
						sugar: 5.4,
						protein: 27,
						salt: 0.8
					}
				},
				{ 
					id: '5454', 
					name: 'bread', 
					quantity: '3',
					ingredients: {
						ingredient_0: 'milk',
						ingredient_1: 'flour',
						ingredient_2: 'yeast'
					},
					nutrients: {
						energy: 634,
						fat: 53,
						saturated_fat: 8,
						carbohydrates: 8.5,
						sugar: 5.4,
						protein: 27,
						salt: 0.8
					}
				}
			]
		}
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.isSelected = this.isSelected.bind(this);
	}
	removeItem(id) {
		this.setState({
			items: this.state.items.filter(obj => obj.id !== id)
		})
	}
	addItem(item) {
		this.setState( {
			items: [...this.state.items, item]
		});
	}
	isSelected(id) {
		this.setState({
			selectedItem: this.state.items.find(obj => obj.id === id)
		})
	}
	render() {
		return (
			<div className={InventoryStyle.Inventory}>
				<InventoryList 
					items={this.state.items} 
					removeItem={this.removeItem}
					isSelected={this.isSelected}
				/>
				<AddForm 
					addItem={this.addItem} 
				/>
				{this.state.selectedItem ? 
				<InventoryDetails details={this.state.selectedItem} />
				: ''}
			</div>
		);
	}
}

export default Inventory;