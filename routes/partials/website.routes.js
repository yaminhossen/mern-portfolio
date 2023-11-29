const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const frontendCommonDataMiddleware = require("../../app/middlewares/frontendCommonData.middleware");
const { share_check_auth } = require("../..");
const website_controller = require("../../app/controllers/frontend/wbsite.controller");
const router = express.Router();
let server = null;



module.exports = (mainserver) => {
	website_controller.server = mainserver;
	router
		// .get("/", website_controller.home)
		// .get("/category/:category_name/:category_id", website_controller.category_post)
		// .get("/about", function (req, res) {
		// 	return res.render("about");
		// })
		.get("/login", function (req, res) {
			return res.render("auth/login");
		})
		.get("/signup", function (req, res) {
			return res.render("auth/register");
		})
		// .get("/home", function (req, res) {
		// 	return res.render("frontend/home");
		// })
		.get("/home", [website_controller.home_page])
		.get("/about", website_controller.about)
		.get("/contact", website_controller.contact)

		.get("/contemporary", website_controller.contemporary)
		.get("/post/:id", website_controller.contemporary_details)

		.get("/social-work", website_controller.social_work)
		.get("/post/:id", website_controller.social_work_details)

		.get("/book-review", website_controller.book_review)
		.get("/post/:id", website_controller.book_review_details)

		.get("/blog-islam", website_controller.blog_islam)
		.get("/post/:id", website_controller.blog_islam_details)

		.get("/blog-islamic-movement", website_controller.blog_islamic_movement)
		.get("/post/:id", website_controller.blog_islamic_movement_details)

		.get("/blog-bangladesh", website_controller.blog_bangladesh)
		.get("/post/:id", website_controller.blog_bangladesh_details)

		.get("/blog-politics", website_controller.blog_politics)
		.get("/post/:id", website_controller.blog_politics_details)

		.get("/blog-history", website_controller.blog_history)
		.get("/blog-history-details/:id", website_controller.blog_history_details)

		.get("/blog-miscellaneous", website_controller.miscellaneous)
		.get("/post/:id", website_controller.miscellaneous_details)

		.get("/photo-gallery", website_controller.photo_gallery)

		.get("/video-gallery", website_controller.video_gallery)

	return router
};