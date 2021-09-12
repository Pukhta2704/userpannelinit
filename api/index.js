const express = require('express');
const router = express.Router();

const getUserController = require('./getUser');
const addUserController = require('./addUser');
const updateUserController = require('./updateUser');
const deleteUserController = require('./removeUser');

router.get('/getuser', getUserController);
router.post('/adduser', addUserController);
router.put('/updateuser', updateUserController);
router.delete('/deleteuser/:id', deleteUserController);

module.exports = router;
