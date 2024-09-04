const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

router.post(
  "/registration",
  [
    // Validate the email field
    body("email").isEmail().withMessage("Must be a valid email address"),

    // Validate the password field
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password field cannot be empty")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

module.exports = router;
