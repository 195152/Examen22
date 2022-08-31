let express = require('express');

//1
let router = express.Router();//utilise la classe router d'express
let userController = require('./controllers/userController');
//1
router.get('/', userController.userList);
router.post('/ajouter', userController.ajouterunarticle);
router.post('/enregistrer', userController.userenregister);
router.post('/effacer', userController.suppression );
router.post('/acheter', userController.achete );
module.exports = router;