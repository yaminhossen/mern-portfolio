const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const uesrProfileInfosModel = require("../../api/user_profile_infos/model/model")
const photoGalleryCategoriyModel = require("../../api/photo_gallery/photo_gallery_categories/model/model")
const tagsModel = require("../../api/tag/tags/model/model")
const userContactNumbersModel = require("../../api/user_contact_numbers/model/model")
const userSocialLinksModel = require("../../api/user_social_links/model/model")
const userEmailsModel = require("../../api/user_emails/model/model")
const userContactMessagesModel = require("../../api/contact_message/contact_messages/model/model")

const userSettingTitlesModel = require("../../api/setting/setting_titles/model/model")
const blogCategoriesModel = require("../../api/blog/blog_categories/model/model")
const blogsModel = require("../../api/blog/blogs/model/model");
const bannerModel = require("../../api/banner/banners/model/model");
const settingModel = require("../../api/setting/setting_titles/model/model");

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
		let blog_category = await blogCategoriesModel.find();

		return res.render(`frontend/gallery/photo_gallery`, {
			photo_gallery_category,
			tags,
			blog_category,
		});
	},
	home_page: async function (req, res) {
		let profile_info = await uesrProfileInfosModel.find();
		let photo_gallery_category = await photoGalleryCategoriyModel.find();
		let blog_category = await blogCategoriesModel.find();
		let settingTitle = await settingModel.findOne({ title: "banner_at_a_glance_title" });
		let settingValue = await settingModel.findOne({ title: "banner_at_a_glance_value" });
		let banner = await bannerModel.find();

		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });
		
		let contems = await blogsModel.find().where({categories:contemp._id});
		// console.log("photo_gallery",photo_gallery_category);
		return res.render(`frontend/home`, {
			profile_info,
			photo_gallery_category,
			blog_category,
			banner,
			settingTitle,
			settingValue,
			contemp,
			contems,
		});
	},
	contemporary: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });
		
		let contems = await blogsModel.find().where({categories:contemp._id});

		// console.log("contemp",contemp._id);
		// console.log("contems",contems);
		return res.render(`frontend/contemporary`, {
			contems,
			contemp,
		});
	},
	social_work: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let social_work = await blogCategoriesModel.findOne({ title: "সামাজিক কাজ" });
		
		let social_works = await blogsModel.find().where({categories:social_work._id});

		console.log("social_work",social_work._id);
		console.log("social_works",social_works);
		return res.render(`frontend/social_work`, {
			social_work,
			social_works,
		});
	},
	
	contemporary_details: async function (req, res) {
		// console.log(req.params.id);
		let contemp_details = await blogsModel.findOne({_id:req.params.id});
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });
		let contems = await blogsModel.find().where({categories:contemp._id});
		// console.log(contemp_details);
		return res.render(`frontend/contemporary_details`, {
			contemp_details,
			contems,
		});
	},
	contact: async function (req, res) {
		let contact_numbers = await userContactNumbersModel.find();
		let emails = await userEmailsModel.find();
		let social_links = await userSocialLinksModel.find();
		let contact_message = await userContactMessagesModel.find();
		let address = await userSettingTitlesModel.find();
		console.log("address",address[4].value[1]);
		return res.render(`frontend/contact`, {
			contact_numbers,
			emails,
			social_links,
			contact_message,
			address,
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
