const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
	id: {
		type: ObjectId
	},
	name: String,
	quantity: Number,
	ingredients: {
		type: Map,
		of: String
	},
	nutrients: {
		type: Map,
		of: Number
	}
});

