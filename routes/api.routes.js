const express = require("express");
const user_routes = require("../app/api/user/router/routes");
const user_roles_routes = require("../app/api/user_roles/router/routes");
const router = express.Router();



router.use(user_routes());
router.use(user_roles_routes());

module.exports = () => router;