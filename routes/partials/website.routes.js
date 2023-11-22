const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const frontendCommonDataMiddleware = require("../../app/middlewares/frontendCommonData.middleware");
const { share_check_auth } = require("../..");
const website_controller = require("../../app/controllers/frontend/wbsite.controller");
const router = express.Router();

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
	.get("/about", function (req, res) {
		return res.render("frontend/about");
	})
	.get("/contact", website_controller.contact)
	.get("/contemporary",website_controller.contemporary)
	.get("/contemporary-details/:id", website_controller.contemporary_details)
	.get("/social-work", function (req, res) {
		return res.render("frontend/social_work");
	})
	.get("/social-work-details", function (req, res) {
		return res.render("frontend/social_work_details");
	})
	.get("/book-review", function (req, res) {
		return res.render("frontend/book_review");
	})
	.get("/book-review-details", function (req, res) {
		return res.render("frontend/book_review_details");
	})
	.get("/blog-islam",function (req, res) {
		return res.render("frontend/blog/islam");
	})
	.get("/blog-islam-details", function (req, res) {
		return res.render("frontend/blog/islam_details");
	})
	.get("/blog-islamic-movement", function (req, res) {
		return res.render("frontend/blog/islamic_movement");
	})
	.get("/blog-islamic-movement-details", function (req, res) {
		return res.render("frontend/blog/islamic_movement_details");
	})
	.get("/blog-bangladesh", function (req, res) {
		return res.render("frontend/blog/bangladesh");
	})
	.get("/blog-bangladesh-details", function (req, res) {
		return res.render("frontend/blog/bangladesh_details");
	})
	.get("/blog-politics", function (req, res) {
		return res.render("frontend/blog/politics");
	})
	.get("/blog-politics-details", function (req, res) {
		return res.render("frontend/blog/politics_details");
	})
	.get("/blog-history", function (req, res) {
		return res.render("frontend/blog/history");
	})
	.get("/blog-history-details", function (req, res) {
		return res.render("frontend/blog/history_details");
	})
	.get("/blog-miscellaneous", function (req, res) {
		return res.render("frontend/blog/miscellaneous");
	})
	.get("/blog-miscellaneous-details", function (req, res) {
		return res.render("frontend/blog/miscellaneous_details");
	})
	.get("/photo-gallery", website_controller.photo_gallery)
	.get("/video-gallery", function (req, res) {
		return res.render("frontend/gallery/video_gallery");
	})

module.exports = () => router;