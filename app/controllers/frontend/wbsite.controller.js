const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const uesrProfileInfosModel = require("../../api/user_profile_infos/model/model")
const photoGalleryCategoriyModel = require("../../api/photo_gallery/photo_gallery_categories/model/model")
const tagsModel = require("../../api/tag/tags/model/model")
const userContactNumbersModel = require("../../api/user_contact_numbers/model/model")
const userSocialLinksModel = require("../../api/user_social_links/model/model")
const userEmailsModel = require("../../api/user_emails/model/model")
const userContactMessagesModel = require("../../api/contact_message/contact_messages/model/model")

const controllers = {
	folder_prefix: ``,
	route_prefix: ``,

	home: async function (req, res) {
		let blogs = await blogModel.find().populate('creator').populate('category');
        let categories = await categoryModel.find();

		return res.render(`home`, {
			blogs,
            categories,
		});
	},
	photo_gallery: async function (req, res) {
		let photo_gallery_category = await photoGalleryCategoriyModel.find();
		let tags = await tagsModel.find();

		return res.render(`frontend/gallery/photo_gallery`, {
			photo_gallery_category,
			tags,
		});
	},
	home_page: async function (req, res) {
		let profile_info = await uesrProfileInfosModel.find();
		let photo_gallery_category = await photoGalleryCategoriyModel.find();
		// console.log("photo_gallery",photo_gallery_category);
		return res.render(`frontend/home`, {
			profile_info,
			photo_gallery_category,
		});
	},
	contact: async function (req, res) {
		let contact_numbers = await userContactNumbersModel.find();
		let emails = await userEmailsModel.find();
		let social_links = await userSocialLinksModel.find();
		let contact_message = await userContactMessagesModel.find();
		// console.log("photo_gallery",emails);
		return res.render(`frontend/contact`, {
			contact_numbers,
			emails,
			social_links,
			contact_message,
		});
	},
	// photo_gallery_category: async function (req, res) {
	// 	let photo_gallery_category = await photoGalleryCategoriyModel.find();
	// 	return res.render(`frontend/home`, {
	// 		photo_gallery_category,
	// 	});
	// },
	category_post: async function (req, res) {
        let {category_name, category_id} = req.params;

        let categories = await categoryModel.find();
        let blogs = await blogModel.where({category:[category_id]}).find().populate('creator').populate('category');

		return res.render(`category_post`, {
            categories,
            blogs
		});
	},
};

module.exports = controllers;
