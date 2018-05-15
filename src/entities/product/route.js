const router = require('express').Router();
const controller = require('./controller');

router.route('/')
    .get((req, res) => {
        controller.showProduct()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        controller.addProduct(req.body)
        .then(list => res.json({ status: true, message: 'add Product berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/:id')
    .get((req, res) => {
        controller.showProduct(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editProduct(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update Product berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .delete((req, res) => {
        controller.deleteProduct(req.params.id)
        .then(list => res.json({ status: true, message: 'delete Product berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/bysubcategory/:id')
    .get((req, res) => {
        controller.showProductBySubCategory(req.params.id)
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })


router.route('/color')
    .get((req, res) => {
        controller.showProductColor()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        controller.addProductColor(req.body)
        .then(list => res.json({ status: true, message: 'add ProductColor berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/color/:id')
    .get((req, res) => {
        controller.showProductColor(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editProductColor(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update ProductColor berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .delete((req, res) => {
        controller.deleteProductColor(req.params.id)
        .then(list => res.json({ status: true, message: 'delete ProductColor berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })


router.route('/size')
    .get((req, res) => {
        controller.showProductSize()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        controller.addProductSize(req.body)
        .then(list => res.json({ status: true, message: 'add ProductSize berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/size/:id')
    .get((req, res) => {
        controller.showProductSize(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editProductSize(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update ProductSize berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .delete((req, res) => {
        controller.deleteProductSize(req.params.id)
        .then(list => res.json({ status: true, message: 'delete ProductSize berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

module.exports = router;