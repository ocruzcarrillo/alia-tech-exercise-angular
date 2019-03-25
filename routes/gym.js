var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Gym = require('../models/Gym.js');

/* GET ALL GymS */
router.get('/', function(req, res, next) {
  Gym.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Gym BY ID */
router.get('/:id', function(req, res, next) {
  Gym.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Gym */
router.post('/', function(req, res, next) {
  Gym.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Gym */
router.put('/:id', function(req, res, next) {
  Gym.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Gym */
router.delete('/:id', function(req, res, next) {
  Gym.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
