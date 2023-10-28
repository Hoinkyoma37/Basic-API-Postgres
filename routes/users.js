const { Router } = require("express");
const { getUsers, deleteUsers, putUsers, postUsers, getUsersById } = require("../controllers/users");

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:id', putUsers);

router.get('/', getUsersById)

router.delete('/:id', deleteUsers);

module.exports = router;