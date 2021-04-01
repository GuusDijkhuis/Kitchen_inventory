import React, { Component } from 'react';

import InventoryDetailsStyle from './InventoryDetails.module.css';

class InventoryDetails extends Component {
	render() {
		const details = this.props.details;
		return (
			<section className={InventoryDetailsStyle.Details}>
				<header className={InventoryDetailsStyle.Header}>
					<h3>{details.name}</h3>
					<span>{details.id}</span>
				</header>
				<div className={InventoryDetailsStyle.Info}>
					<ul className={InventoryDetailsStyle.InfoList}>
						<li className={InventoryDetailsStyle.InfoListItem}>
							<h3>Quantity</h3>
							<span>{details.quantity}</span>
						</li>
						<li className={InventoryDetailsStyle.InfoListItem}>
							<h3>Ingredients</h3>
							<ul className={InventoryDetailsStyle.InfoListLoop}>
								{details.ingredients ? Object.entries(details.ingredients).map(res => <li>{res[1]}</li>) : ''}
							</ul>
						</li>
						<li className={InventoryDetailsStyle.InfoListItem}>
							<h3>Nutrients/100 gr.</h3>
							<ul className={InventoryDetailsStyle.InfoListLoop}>
								{details.nutrients ? Object.entries(details.nutrients).map(res => 
									<li>
										<span>{res[0]}</span>
										<span>{res[1]} gr</span>
									</li>
								) : ''}
							</ul>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default InventoryDetails;