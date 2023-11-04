const express = require("express");
const user_routes = require("../app/api/user/router/routes");
const user_roles_routes = require("../app/api/user_roles/router/routes");
const user_acheivements_routes = require("../app/api/user_acheivements/router/routes");
const user_contact_numbers_routes = require("../app/api/user_contact_numbers/router/routes");
const user_educations_routes = require("../app/api/user_educations/router/routes");
const user_emails_routes = require("../app/api/user_emails/router/routes");
const user_profile_infos_routes = require("../app/api/user_profile_infos/router/routes");
const user_social_links_routes = require("../app/api/user_social_links/router/routes");
const blogs_routes = require("../app/api/blog/blogs/router/routes");
const blog_categories_routes = require("../app/api/blog/blog_categories/router/routes");
const blog_comments_routes = require("../app/api/blog/blog_comments/router/routes");
const blog_comment_replies_routes = require("../app/api/blog/blog_comment_replies/router/routes");
const blog_images_routes = require("../app/api/blog/blog_images/router/routes");
const router = express.Router();



router.use(user_routes());
router.use(user_roles_routes());
router.use(user_acheivements_routes());
router.use(user_contact_numbers_routes());
router.use(user_educations_routes());
router.use(user_emails_routes());
router.use(user_profile_infos_routes());
router.use(user_social_links_routes());

// blog routes
router.use(blogs_routes());
router.use(blog_categories_routes());
router.use(blog_comments_routes());
router.use(blog_comment_replies_routes());
router.use(blog_images_routes());

module.exports = () => router;