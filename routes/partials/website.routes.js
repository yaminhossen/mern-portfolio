const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const { share_check_auth } = require("../..");
const website_controller = require("../../app/controllers/frontend/wbsite.controller");
const router = express.Router();

router
	.get("/", website_controller.home)
	.get("/category/:category_name/:category_id", website_controller.category_post)
	// .get("/about", function (req, res) {
	// 	return res.render("about");
	// })
	.get("/login", function (req, res) {
		return res.render("auth/login");
	})
	.get("/signup", function (req, res) {
		return res.render("auth/register");
	})
	.get("/home", function (req, res) {
		return res.render("frontend/home");
	})
	.get("/about", function (req, res) {
		return res.render("frontend/about");
	})
	.get("/contemporary", function (req, res) {
		return res.render("frontend/contemporary");
	})
	.get("/social-work", function (req, res) {
		return res.render("frontend/social_work");
	})
	.get("/book-review", function (req, res) {
		return res.render("frontend/book_review");
	})
	.get("/blog-islam", function (req, res) {
		return res.render("frontend/blog/islam");
	})
	.get("/blog-islami-movement", function (req, res) {
		return res.render("frontend/blog/islami_movement");
	})
	.get("/blog-bangladesh", function (req, res) {
		return res.render("frontend/blog/bangladesh");
	})
	.get("/blog-politics", function (req, res) {
		return res.render("frontend/blog/politics");
	})
	.get("/blog-history", function (req, res) {
		return res.render("frontend/blog/history");
	})
	.get("/blog-miscellaneous", function (req, res) {
		return res.render("frontend/blog/miscellaneous");
	})

module.exports = () => router;