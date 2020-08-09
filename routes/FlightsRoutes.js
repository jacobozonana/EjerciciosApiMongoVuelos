const express = require('express');
const router = express();

const Flights = require('../models/Flights')

router.get('/flights', (req, res)=>{
    Flights.find()
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.get('/flights/:id', (req, res)=>{
    Flights.findById(req.params.id)
    .then ((resDB)=> res.status(200).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.post('/flights', (req, res)=>{
    const { body } = req;
    const newFlight = new Flights(body)
    newFlight.save()
    .then((respDB)=> res.status(201).json(respDB))
    .catch((err)=> res.status(400).json(err))
})
router.patch('/flights/:id', (req, res)=>{
    const { body } = req;
    Flights.findByIdAndUpdate(req.params.id, body, {new: true })
    .then ((resDB)=> res.status(201).json(resDB))
    .catch((err) => res.status(400).json(err))
})

router.delete('/flights/:id', (req, res)=>{
    Flights.findByIdAndDelete(req.params.id)
    .then((respDB)=> res.status(204).json(respDB))
    .catch((err)=> res.status(400).json(err));
});


module.exports = router;