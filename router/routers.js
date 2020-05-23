const express = require('express');
const Mycollection = require('../model/mycollection.model');

const router = express.Router();

router.get('/', (req, res) => {
    Mycollection.find().exec().then((da) => {
        res.json(da);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    Mycollection.findById(req.params.id).exec().then((data) => {
        res.send(data);
    }).catch((err) => res.status(500).send(err));
});

router.post('/set', async (req, res) => {
    if (req.body.name !== '' && req.body.email !== '') {
        res.status(400).json({
            error: true,
            msg: 'Name and email is required',
        });
        return;
    }
    try {
        const body = new Mycollection(req.body);
        const result = await body.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/put/:id', (req, res) => {
    Mycollection.updateOne({ _id: req.params.id }, {
        $set: req.body,
    }).then((da) => {
        res.send(da);
    }).catch((err) => res.status(500).send({ msg: 'An error occured :(', err }));
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    Mycollection.deleteOne({ _id: id })
        .then(() => res.send('Deleted'))
        .catch((err) => res.status(500).send(err));
});
module.exports = router;
