const router = require('express').Router();
const controller = require('./controller');

let invoiceKode = () => Date.now().toString(36) + Math.round(Math.random() * 10000).toString(36)

router.route('/')
    .get((req, res) => {
        controller.showInvoice()
        .then(list => res.json({ status: true, list }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post((req, res) => {
        let kode = invoiceKode();
        controller.addInvoice({ kode, ...req.body })
        .then(list => res.json({ status: true, message: 'add Invoice berhasil', kode, data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/:kode')
    .get((req, res) => {
        controller.showInvoice(req.params.kode)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .post()

module.exports = router;