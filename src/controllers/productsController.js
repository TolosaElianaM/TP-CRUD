const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const finalPrice = (price, discount) => Math.round(price - price * (discount/100));

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products,toThousand})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const {id}= req.params;
		const productDetail = products.find(element => element.id == id)
		res.render('detail',{productDetail,toThousand,finalPrice})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;