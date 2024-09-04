const { validationResult } = require("express-validator");
const ApiError = require("../exeptions/api-error");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }
      const { email, password } = req.body;

      res.json("registration");
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      res.json("activate");
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      res.json("login");
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      res.json("logout");
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      res.json("refresh");
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json("getUsers");
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
