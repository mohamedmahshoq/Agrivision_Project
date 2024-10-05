const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/farmer-landowner', { useNewUrlParser: true, useUnifiedTopology: true });

const farmerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const landownerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const Farmer = mongoose.model('Farmer', farmerSchema);
const Landowner = mongoose.model('Landowner', landownerSchema);

app.post('/farmer-login', (req, res) => {
    const farmer = new Farmer(req.body);
    farmer.save((err, farmer) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(farmer);
        }
    });
});

app.post('/landowner-login', (req, res) => {
    const landowner = new Landowner(req.body);
    landowner.save((err, landowner) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(landowner);
        }
    });
});

app.get('/connect-farmer-landowner', (req, res) => {
    const farmerId = req.query.farmerId;
    const landownerId = req.query.landownerId;

    Farmer.findById(farmerId, (err, farmer) => {
        if (err) {
            res.status(400).send(err);
        } else {
            Landowner.findById(landownerId, (err, landowner) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    farmer.landowner = landowner;
                    farmer.save((err, farmer) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            res.send(farmer);
                        }
                    });
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});