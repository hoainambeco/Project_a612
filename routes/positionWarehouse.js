var express = require('express');
var router = express.Router();
const positionController = require('../controllers/positionWarehouses.controller');

router.get('/', positionController.getPositionWarehouses);
router.get('/:idWarehouse', positionController.getPositionWarehouse);
router.post('/add/:idWarehouse', positionController.postPositionWarehouses);
router.get('/add/:idWarehouse', positionController.postPositionWarehouses);
router.post('/edit/:id', positionController.editPositionWarehouses);
router.post('/delete/:idWarehouse', positionController.deletePositionWarehouses);
router.get('/delete/:idWarehouse', positionController.deletePositionWarehouses);
module.exports = router;
