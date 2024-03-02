const { Router } = require('express');

const { getMGMData, saveMGMData } = require('../controllers/Controller');

const router = Router();

router.get("/get", getMGMData);
router.post("/save", saveMGMData);

module.exports = router;