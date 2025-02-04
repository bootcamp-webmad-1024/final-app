const router = require("express").Router()

const {
    getCoasters,
    getOneCoaster,
    saveCoaster,
    editCoaster,
    deleteCoaster,
    filterCoasters
} = require("../controllers/coaster.controllers")
const verifyToken = require("../middlewares/verifyToken")



router.get('/coasters/search', filterCoasters)

router.post("/coasters", verifyToken, saveCoaster)

router.put("/coasters/:id", editCoaster)

router.delete("/coasters/:id", deleteCoaster)

router.get("/coasters", getCoasters)

router.get("/coasters/:id", getOneCoaster)



module.exports = router