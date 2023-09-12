const  router = require("express").Router();
const userServices = require("./users.services");
const JwtPassword = require("../middlewares/passport.middleware");

router
  .route("/")
  .get( userServices.getAllUsers)
  .post(userServices.postNewUser);

router.route("/me")
  .get(JwtPassword.authenticate('jwt',{session:false}),userServices.getMyUser);

router
  .route("/:id")
  .get(userServices.getUserById)
  .put(userServices.updateUser)
  .delete(userServices.deleteUser);

module.exports = router;
