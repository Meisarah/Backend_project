const router = require('express').Router();
const controller = require('./controller');

router.route('/')
    .get((req, res) => {
        controller.showSeason()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        controller.addSeason(req.body)
        .then(list => res.json({ status: true, message: 'add season berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/:id')
    .get((req, res) => {
        controller.showSeason(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editSeason(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update season berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .delete((req, res) => {
        controller.deleteSeason(req.params.id)
        .then(list => res.json({ status: true, message: 'delete season berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

module.exports = router;