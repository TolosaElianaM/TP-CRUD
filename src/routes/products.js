// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Multer use ************

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,'./public/images/products')
    },
    filename: function (req, file, callback) {
        /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) 
        callback(null, file.fieldname + '-' + uniqueSuffix)*/
        callback(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/', upload.single('image'),productsController.store);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);


/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.destroy);


module.exports = router;