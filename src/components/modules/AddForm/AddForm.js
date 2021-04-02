import React, { Component } from 'react';
import mongoose from 'mongoose';

import { v4 as uuidv4 } from 'uuid';

import AddFormStyle from './AddForm.module.css';

class AddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: {
				id: uuidv4(),
				name: '',
				quantity: '',
				ingredients: [],
				nutrients: {
					energy: 0,
					fat: 0,
					saturated_fat: 0,
					carbohydrates: 0,
					sugar: 0,
					protein: 0,
					salt: 0
				}
			},
			ingredientCount: 1
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
	}
	handleSubmit(evt) {
		const MyModel = mongoose.model('Product', 'Product');
		evt.preventDefault();
		this.props.addItem(this.state.details);
		this.setState({
			details: {
				id: uuidv4(),
				name: '',
				quantity: '',
				ingredients: {},
				nutrients: {
					energy: 0,
					fat: 0,
					saturated_fat: 0,
					carbohydrates: 0,
					sugar: 0,
					protein: 0,
					salt: 0
				}
			}
		})
	}
	handleChange(evt) {
		let nutrientsList = Object.keys(this.state.details.nutrients);
		if(nutrientsList.includes(evt.target.name)) {
			this.setState(oldState => ({
				...oldState,
				details: {
					...oldState.details,
					nutrients: {
						...oldState.details.nutrients,
						[evt.target.name]: evt.target.value
					}
				}
			}))
		} else if(evt.target.name.includes('ingredient_')) {
			this.setState(oldState => ({
				...oldState,
				details: {
					...oldState.details,
					ingredients: {
						...oldState.details.ingredients,
						[evt.target.name]: evt.target.value
					}
				}
			}))
		} else {
			this.setState(oldState => ({
				...oldState,
				details: {
					...oldState.details,
					[evt.target.name]: evt.target.value
				}
			}))
		}
		console.log(this.state.details);
	}
	addIngredient() {
		const newCount = this.state.ingredientCount + 1;
		this.setState({
			ingredientCount: newCount
		})
	}
	render() {
		return (
			<div className={AddFormStyle.AddFormContainer}>
				<h3>Add Item</h3>
				<form onSubmit={this.handleSubmit} className={AddFormStyle.AddForm}>
					<fieldset>
						<legend>Product</legend>
						<label htmlFor="name">Name
							<input 
								type="text"
								name="name"
								id="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="quantity">Quantity
							<input 
								type="text"
								name="quantity"
								id="quantity"
								value={this.state.quantity}
								onChange={this.handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<legend>Ingredients</legend>
						<ul>
							<input 
								type="button"
								name="addIngredient"
								id="addIngredient"
								onClick={this.addIngredient}
								value="Add"
								className={AddFormStyle.AddFormButton}
							/>
							{[...Array(this.state.ingredientCount)].map((res, i) =>
								<label htmlFor={`ingredient_${i}`}>{i+1}
									<input 
										type="text"
										name={`ingredient_${i}`}
										className={AddFormStyle.IngredientsInput}
										value={res}
										placeholder={res}
										onChange={this.handleChange}
									/> 
								</label>
							)}
						</ul>
					</fieldset>
					<fieldset>
						<legend>Nutrients/100gr</legend>
						<label htmlFor="energy">Energy
							<input 
								type="text"
								name="energy"
								id="energy"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="fat">Fat
							<input 
								type="text"
								name="fat"
								id="fat"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="saturated_fat">Saturated fat
							<input 
								type="text"
								name="saturated_fat"
								id="saturated_fat"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="carbohydrates">Carbohydrates
							<input 
								type="text"
								name="carbohydrates"
								id="carbohydrates"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="sugar">Sugar
							<input 
								type="text"
								name="sugar"
								id="sugar"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="protein">Protein
							<input 
								type="text"
								name="protein"
								id="protein"
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="salt">Salt
							<input 
								type="text"
								name="salt"
								id="salt"
								onChange={this.handleChange}
							/>
						</label>
					</fieldset>
					<button className={AddFormStyle.AddFormButton}>Add item</button>
				</form>
			</div>
		);
	}
}

export default AddForm;