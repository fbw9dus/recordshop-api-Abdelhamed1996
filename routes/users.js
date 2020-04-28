const express = require("express");
const router = express.Router();
const isAdmin = require('../middleware/rolesAuthenticater')
const auth = require('../middleware/authenticator');
const {userValidationRules} = require('../lib/validation/userRules')
const {validateInputs} = require('../middleware/validator')
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(auth,isAdmin, getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/login")
  .post(loginUser)

router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

module.exports = router;
