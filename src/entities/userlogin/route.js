const router = require('express').Router();
const controller = require('./controller');

router.route('/')
    .get((req, res) => {
        res.json({ session: req.session.user })
    })
    .post((req, res) => {
        controller.addUserLogin(req.body)
        .then(list => res.json({ status: true, message: 'add UserLogin berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/:id')
    .get((req, res) => {
        controller.showUserLogin(req.params.id)
        .then(list => res.json({ status: true, list: list[0] }))
        .catch(() => res.status(500).json({ status: false }))
    })
    .put((req, res) => {
        controller.editUserLogin(req.params.id, req.body)
        .then(list => res.json({ status: true, message: 'update UserLogin berhasil', data: req.body }))
        .catch(() => res.status(500).json({ status: false }))
    })

router.route('/login')
    .post((req, res) => {
        controller.login(req.body)
        .then(status => {
            if (status) {
                req.session.user = status
                req.session.save()
            }
            res.json({ status })
        })
        .catch(() => res.status(500).json({ status: false, message: 'something happen' }))
    })

router.route('/logout')
    .post((req, res) => {
        req.session.destroy(err => {
            if (err) res.json({ err })
            else res.json({ status: true })
        })
    })

module.exports = router;