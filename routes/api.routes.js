const express = require("express");
const user_routes = require("../app/api/user/router/routes");
const user_roles_routes = require("../app/api/user_roles/router/routes");
const user_acheivements_routes = require("../app/api/user_acheivements/router/routes");
const user_contact_numbers_routes = require("../app/api/user_contact_numbers/router/routes");
const user_educations_routes = require("../app/api/user_educations/router/routes");
const user_emails_routes = require("../app/api/user_emails/router/routes");
const user_profile_infos_routes = require("../app/api/user_profile_infos/router/routes");
const user_social_links_routes = require("../app/api/user_social_links/router/routes");
const router = express.Router();



router.use(user_routes());
router.use(user_roles_routes());
router.use(user_acheivements_routes());
router.use(user_contact_numbers_routes());
router.use(user_educations_routes());
router.use(user_emails_routes());
router.use(user_profile_infos_routes());
router.use(user_social_links_routes());

module.exports = () => router;