const mongoose = require('mongoose')

const Coaster = require('./../models/Coaster.model')

const getCoasters = (req, res, next) => {

    Coaster
        .find()
        .select({ title: 1, imageUrl: 1, owner: 1 })
        .then(coasters => res.json(coasters))
        .catch(err => next(err))
}

const getOneCoaster = (req, res, next) => {

    const { id: coasterId } = req.params

    if (!mongoose.Types.ObjectId.isValid(coasterId)) {
        res.status(404).json({ message: "Id format not valid" });
        return
    }

    Coaster
        .findById(coasterId)
        .then(coaster => res.json(coaster))
        .catch(err => next(err))
}

const saveCoaster = (req, res, next) => {

    const { title, description, inversions, length, imageUrl } = req.body
    const { _id: owner } = req.payload

    Coaster
        .create({ title, description, inversions, length, imageUrl, owner })
        .then(coaster => res.status(201).json(coaster))
        .catch(err => next(err))
}

const editCoaster = (req, res, next) => {

    const { title, description, inversions, length, imageUrl } = req.body
    const { id: coasterId } = req.params

    if (!mongoose.Types.ObjectId.isValid(coasterId)) {
        res.status(404).json({ message: "Id format not valid" });
        return
    }

    Coaster
        .findByIdAndUpdate(
            coasterId,
            { title, description, inversions, length, imageUrl },
            { runValidators: true }
        )
        .then(coaster => res.sendStatus(200))
        .catch(err => next(err))
}

const deleteCoaster = (req, res, next) => {

    const { id: coasterId } = req.params

    if (!mongoose.Types.ObjectId.isValid(coasterId)) {
        res.status(404).json({ message: "Id format not valid" });
        return
    }

    Coaster
        .findByIdAndDelete(coasterId)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const filterCoasters = (req, res, next) => {

    Coaster
        .find(req.query)
        .then(coasters => res.json(coasters))
        .catch(err => next(err))
}


module.exports = {
    getCoasters,
    getOneCoaster,
    saveCoaster,
    editCoaster,
    deleteCoaster,
    filterCoasters
}