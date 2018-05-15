const router = require('express').Router();
const controller = require('./controller');

router.route('/')
    .get((req, res) => {
        controller.showSubCategory()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        controller.addSubCategory(req.body)
        .then(list => res.json({ status: true, message: 'add SubCategory berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/:id')
    .get((req, res) => {
        controller.showSubCategory(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editSubCategory(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update SubCategory berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .delete((req, res) => {
        controller.deleteSubCategory(req.params.id)
        .then(list => res.json({ status: true, message: 'delete SubCategory berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/byseason/:id')
    .get((req, res) => {
        controller.showSubCategoryBySeason(req.params.id)
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })

module.exports = router;