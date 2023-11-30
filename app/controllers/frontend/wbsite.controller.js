const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const uesrProfileInfosModel = require("../../api/user_profile_infos/model/model")
const uesrEducationModel = require("../../api/user_educations/model/model")

const photoGalleryCategoriyModel = require("../../api/photo_gallery/photo_gallery_categories/model/model")

const videoGalleryCategoriyModel = require("../../api/video_gallery/video_gallery_categories/model/model")
const videoGalleryVideoModel = require("../../api/video_gallery/video_gallery_images/model/model")

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
	server:null,

	home: async function (req, res) {
		let blogs = await blogModel.find().populate('creator').populate('category');
		let categories = await categoryModel.find();

		return res.render(`home`, {
			blogs,
			categories,
		});
	},
	about: async function (req, res) {
		let user_educations = await uesrEducationModel.find();
		let profile_info = await uesrProfileInfosModel.find();
		let banner = await bannerModel.find();

		controllers.server.locals.seo_title = 'about';
		
		// console.log('profile_info', profile_info)
		// console.log(controllers.server);

		return res.render(`frontend/about`, {
			profile_info,
			user_educations,
			banner,
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
	video_gallery: async function (req, res) {

		let video_gallery_category = await videoGalleryCategoriyModel.find();
		let tags = await tagsModel.find();
		let blog_category = await blogCategoriesModel.find();

		return res.render(`frontend/gallery/video_gallery`, {
			video_gallery_category,
			tags,
			blog_category,
		});
	},
	home_page: async function (req, res) {
		let profile_info = await uesrProfileInfosModel.find();
		let photo_gallery_category = await photoGalleryCategoriyModel.find();
		let video_gallery_category = await videoGalleryCategoriyModel.find();
		let video_gallery_video = await videoGalleryVideoModel.find();
		let blog_category = await blogCategoriesModel.find();
		let settingTitle = await settingModel.findOne({ title: "banner_at_a_glance_title" });
		let settingValue = await settingModel.findOne({ title: "banner_at_a_glance_value" });
		let banner = await bannerModel.find();

		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });

		let contems = await blogsModel.find().where({ categories: contemp._id });

		let social_work = await blogCategoriesModel.findOne({ title: "সামাজিক কাজ" });

		let social_works = await blogsModel.find().where({ categories: social_work._id });

		let book_review = await blogCategoriesModel.findOne({ title: "বই পর্যালোচনা" });

		let book_reviews = await blogsModel.find().where({ categories: book_review._id });

		let blog_islam = await blogCategoriesModel.findOne({ title: "ইসলাম" });

		let blog_islams = await blogsModel.find().where({ categories: blog_islam._id });

		let blog_islamic_movement = await blogCategoriesModel.findOne({ title: "ইসলামী আন্দোলন" });

		let blog_islamic_movements = await blogsModel.find().where({ categories: blog_islamic_movement._id });

		let blog_bangladesh = await blogCategoriesModel.findOne({ title: "বাংলাদেশ" });

		let blog_bangladeshs = await blogsModel.find().where({ categories: blog_bangladesh._id });

		let blog_politics = await blogCategoriesModel.findOne({ title: "বাংলাদেশ" });

		let blog_politicss = await blogsModel.find().where({ categories: blog_politics._id });

		let blog_history = await blogCategoriesModel.findOne({ title: "ইতিহাস" });

		let blog_historys = await blogsModel.find().where({ categories: blog_history._id });



		// console.log("photo_gallery",photo_gallery_category);
		return res.render(`frontend/home`, {
			profile_info,
			photo_gallery_category,
			video_gallery_category,
			video_gallery_video,
			blog_category,
			banner,
			settingTitle,
			settingValue,
			contemp,
			contems,
			social_work,
			social_works,
			book_review,
			book_reviews,
			blog_islam,
			blog_islams,
			blog_islamic_movement,
			blog_islamic_movements,
			blog_bangladesh,
			blog_bangladeshs,
			blog_politics,
			blog_politicss,
			blog_history,
			blog_historys,

		});
	},
	contemporary: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });

		let contems = await blogsModel.find().where({ categories: contemp._id });
		
		controllers.server.locals.seo_title = contemp.seo_title;
		controllers.server.locals.seo_description = contemp.seo_description;
		controllers.server.locals.seo_image = contemp.photo;
		controllers.server.locals.seo_keyword = contemp.seo_keyword;

		// console.log("contemp",contemp._id);
		// console.log("contems",contems);
		return res.render(`frontend/contemporary`, {
			contems,
			contemp,
		});
	},
	contemporary_details: async function (req, res) {
		// console.log(req.params.id);
		let contemp_details = await blogsModel.findOne({ _id: req.params.id });
		contemp_details.total_view = (contemp_details.total_view || 0) + 1;
		contemp_details.save();
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });
		let contems = await blogsModel.find().where({ categories: contemp._id });
		// console.log(contemp_details);

		controllers.server.locals.seo_title = contemp_details.seo_title;
		controllers.server.locals.seo_schematags = contemp_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = contemp_details.seo_description;
		controllers.server.locals.seo_image = contemp_details.photo;
		controllers.server.locals.seo_keyword = contemp_details.seo_keyword;
		
		return res.render(`frontend/contemporary_details`, {
			contemp_details,
			contems,
		});
	},
	miscellaneous: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let mis = await blogCategoriesModel.findOne({ title: "বিবিধ" });

		let misc = await blogsModel.find().where({ categories: mis._id });

		controllers.server.locals.seo_title = mis.seo_title;
		controllers.server.locals.seo_description = mis.seo_description;
		controllers.server.locals.seo_image = mis.photo;
		controllers.server.locals.seo_keyword = mis.seo_keyword;

		console.log("mis",mis._id);
		console.log("misc",misc);
		return res.render(`frontend/blog/miscellaneous`, {
			misc,
			mis,
		});
	},
	miscellaneous_details: async function (req, res) {
		// console.log(req.params.id);
		let mis_details = await blogsModel.findOne({ _id: req.params.id });
		mis_details.total_view = (mis_details.total_view || 0) + 1;
		mis_details.save();
		let mis = await blogCategoriesModel.findOne({ title: "বিবিধ" });
		let misc = await blogsModel.find().where({ categories: mis._id });
		// console.log(mis_details);

		controllers.server.locals.seo_title = mis_details.seo_title;
		controllers.server.locals.seo_schematags = mis_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = mis_details.seo_description;
		controllers.server.locals.seo_image = mis_details.photo;
		controllers.server.locals.seo_keyword = mis_details.seo_keyword;
		
		return res.render(`frontend/blog/miscellaneous_details`, {
			mis_details,
			misc,
		});
	},
	social_work: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let social_work = await blogCategoriesModel.findOne({ title: "সামাজিক কাজ" });

		let social_works = await blogsModel.find().where({ categories: social_work._id });

		controllers.server.locals.seo_title = social_work.seo_title;
		controllers.server.locals.seo_description = social_work.seo_description;
		controllers.server.locals.seo_image = social_work.photo;
		controllers.server.locals.seo_keyword = social_work.seo_keyword;

		// console.log("social_work",social_work._id);
		// console.log("social_works",social_works.length);
		return res.render(`frontend/social_work`, {
			social_work,
			social_works,
		});
	},
	social_work_details: async function (req, res) {
		// console.log(req.params.id);
		let social_work_details = await blogsModel.findOne({ _id: req.params.id });
		social_work_details.total_view = (social_work_details.total_view || 0) + 1;
		social_work_details.save();
		let social_work = await blogCategoriesModel.findOne({ title: "সামাজিক কাজ" });
		let social_works = await blogsModel.find().where({ categories: social_work._id });

		controllers.server.locals.seo_title = social_work_details.seo_title;
		controllers.server.locals.seo_schematags = social_work_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = social_work_details.seo_description;
		controllers.server.locals.seo_image = social_work_details.photo;
		controllers.server.locals.seo_keyword = social_work_details.seo_keyword;

		// console.log(social_work_details);
		return res.render(`frontend/social_work_details`, {
			social_work_details,
			social_works,
		});
	},
	blog_islam: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let blog_islam = await blogCategoriesModel.findOne({ title: "ইসলাম" });

		let blog_islams = await blogsModel.find().where({ categories: blog_islam._id });

		controllers.server.locals.seo_title = blog_islam.seo_title;
		controllers.server.locals.seo_description = blog_islam.seo_description;
		controllers.server.locals.seo_image = blog_islam.photo;
		controllers.server.locals.seo_keyword = blog_islam.seo_keyword;
		// console.log("blog_islam",blog_islam._id);
		// console.log("blog_islams",blog_islams.length);
		return res.render(`frontend/blog/islam`, {
			blog_islam,
			blog_islams,
		});
	},
	blog_islam_details: async function (req, res) {
		// console.log(req.params.id);
		let blog_islam_details = await blogsModel.findOne({ _id: req.params.id });
		blog_islam_details.total_view = (blog_islam_details.total_view || 0) + 1;
		blog_islam_details.save();
		let blog_islam = await blogCategoriesModel.findOne({ title: "ইসলাম" });
		let blog_islams = await blogsModel.find().where({ categories: blog_islam._id });

		controllers.server.locals.seo_title = blog_islam_details.seo_title;
		controllers.server.locals.seo_schematags = blog_islam_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = blog_islam_details.seo_description;
		controllers.server.locals.seo_image = blog_islam_details.photo;
		controllers.server.locals.seo_keyword = blog_islam_details.seo_keyword;
		// console.log(blog_islam_details);
		return res.render(`frontend/blog/islam_details`, {
			blog_islam_details,
			blog_islams,
		});
	},
	blog_islamic_movement: async function (req, res) {
		let blog_islamic_movement = await blogCategoriesModel.findOne({ title: "ইসলামী আন্দোলন" });

		let blog_islamic_movements = await blogsModel.find().where({ categories: blog_islamic_movement._id });

		controllers.server.locals.seo_title = blog_islamic_movement.seo_title;
		controllers.server.locals.seo_description = blog_islamic_movement.seo_description;
		controllers.server.locals.seo_image = blog_islamic_movement.photo;
		controllers.server.locals.seo_keyword = blog_islamic_movement.seo_keyword;

		return res.render(`frontend/blog/islamic_movement`, {
			blog_islamic_movement,
			blog_islamic_movements,
		});
	},
	blog_islamic_movement_details: async function (req, res) {
		let blog_islamic_movement_details = await blogsModel.findOne({ _id: req.params.id });
		blog_islamic_movement_details.total_view = (blog_islamic_movement_details.total_view || 0) + 1;
		blog_islamic_movement_details.save();
		let blog_islamic_movement = await blogCategoriesModel.findOne({ title: "ইসলামী আন্দোলন" });
		let blog_islamic_movements = await blogsModel.find().where({ categories: blog_islamic_movement._id });

		controllers.server.locals.seo_title = blog_islamic_movement_details.seo_title;
		controllers.server.locals.seo_schematags = blog_islamic_movement_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = blog_islamic_movement_details.seo_description;
		controllers.server.locals.seo_image = blog_islamic_movement_details.photo;
		controllers.server.locals.seo_keyword = blog_islamic_movement_details.seo_keyword;
		return res.render(`frontend/blog/islamic_movement_details`, {
			blog_islamic_movement_details,
			blog_islamic_movements,
		});
	},
	blog_bangladesh: async function (req, res) {
		let blog_bangladesh = await blogCategoriesModel.findOne({ title: "বাংলাদেশ" });

		let blog_bangladeshs = await blogsModel.find().where({ categories: blog_bangladesh._id });

		controllers.server.locals.seo_title = blog_bangladesh.seo_title;
		controllers.server.locals.seo_description = blog_bangladesh.seo_description;
		controllers.server.locals.seo_image = blog_bangladesh.photo;
		controllers.server.locals.seo_keyword = blog_bangladesh.seo_keyword;

		return res.render(`frontend/blog/bangladesh`, {
			blog_bangladesh,
			blog_bangladeshs,
		});
	},
	blog_bangladesh_details: async function (req, res) {
		let blog_bangladesh_details = await blogsModel.findOne({ _id: req.params.id });
		blog_bangladesh_details.total_view = (blog_bangladesh_details.total_view || 0) + 1;
		blog_bangladesh_details.save();
		let blog_bangladesh = await blogCategoriesModel.findOne({ title: "বাংলাদেশ" });
		let blog_bangladeshs = await blogsModel.find().where({ categories: blog_bangladesh._id });

		controllers.server.locals.seo_title = blog_bangladesh_details.seo_title;
		controllers.server.locals.seo_schematags = blog_bangladesh_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = blog_bangladesh_details.seo_description;
		controllers.server.locals.seo_image = blog_bangladesh_details.photo;
		controllers.server.locals.seo_keyword = blog_bangladesh_details.seo_keyword;

		return res.render(`frontend/blog/bangladesh_details`, {
			blog_bangladesh_details,
			blog_bangladeshs,
		});
	},
	blog_politics: async function (req, res) {
		let blog_politics = await blogCategoriesModel.findOne({ title: "রাজনীতি" });

		let blog_politicss = await blogsModel.find().where({ categories: blog_politics._id });

		controllers.server.locals.seo_title = blog_politics.seo_title;
		controllers.server.locals.seo_description = blog_politics.seo_description;
		controllers.server.locals.seo_image = blog_politics.photo;
		controllers.server.locals.seo_keyword = blog_politics.seo_keyword;

		return res.render(`frontend/blog/politics`, {
			blog_politics,
			blog_politicss,
		});
	},
	blog_politics_details: async function (req, res) {
		let blog_politics_details = await blogsModel.findOne({ _id: req.params.id });
		blog_politics_details.total_view = (blog_politics_details.total_view || 0) + 1;
		blog_politics_details.save();
		let blog_politics = await blogCategoriesModel.findOne({ title: "রাজনীতি" });
		let blog_politicss = await blogsModel.find().where({ categories: blog_politics._id });

		controllers.server.locals.seo_title = blog_politics_details.seo_title;
		controllers.server.locals.seo_schematags = blog_politics_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = blog_politics_details.seo_description;
		controllers.server.locals.seo_image = blog_politics_details.photo;
		controllers.server.locals.seo_keyword = blog_politics_details.seo_keyword;

		return res.render(`frontend/blog/politics_details`, {
			blog_politics_details,
			blog_politicss,
		});
	},
	blog_history: async function (req, res) {
		let blog_history = await blogCategoriesModel.findOne({ title: "ইতিহাস" });

		let blog_historys = await blogsModel.find().where({ categories: blog_history._id });

		controllers.server.locals.seo_title = blog_history.seo_title;
		controllers.server.locals.seo_description = blog_history.seo_description;
		controllers.server.locals.seo_image = blog_history.photo;
		controllers.server.locals.seo_keyword = blog_history.seo_keyword;

		return res.render(`frontend/blog/history`, {
			blog_history,
			blog_historys,
		});
	},
	blog_history_details: async function (req, res) {
		let blog_history_details = await blogsModel.findOne({ _id: req.params.id });
		blog_history_details.total_view = (blog_history_details.total_view || 0) + 1;
		blog_history_details.save();
		let blog_history = await blogCategoriesModel.findOne({ title: "ইতিহাস" });
		let blog_historys = await blogsModel.find().where({ categories: blog_history._id });

		controllers.server.locals.seo_title = blog_history_details.seo_title;
		controllers.server.locals.seo_schematags = blog_history_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = blog_history_details.seo_description;
		controllers.server.locals.seo_image = blog_history_details.photo;
		controllers.server.locals.seo_keyword = blog_history_details.seo_keyword;
		return res.render(`frontend/blog/history_details`, {
			blog_history_details,
			blog_historys,
		});
	},
	book_review: async function (req, res) {
		// const model_data = await model.findOne({ _id: data.id });
		let book_review = await blogCategoriesModel.findOne({ title: "বই পর্যালোচনা" });

		let book_reviews = await blogsModel.find().where({ categories: book_review._id });

		controllers.server.locals.seo_title = book_review.seo_title;
		controllers.server.locals.seo_description = book_review.seo_description;
		controllers.server.locals.seo_image = book_review.photo;
		controllers.server.locals.seo_keyword = book_review.seo_keyword;

		// console.log("book_review",book_review._id);
		// console.log("book_reviews",book_reviews.length);
		return res.render(`frontend/book_review`, {
			book_review,
			book_reviews,
		});
	},

	book_review_details: async function (req, res) {
		// console.log(req.params.id);
		let book_review_details = await blogsModel.findOne({ _id: req.params.id });
		book_review_details.total_view = (book_review_details.total_view || 0) + 1;
		book_review_details.save();
		let book_review = await blogCategoriesModel.findOne({ title: "বই পর্যালোচনা" });
		let book_reviews = await blogsModel.find().where({ categories: book_review._id });

		controllers.server.locals.seo_title = book_review_details.seo_title;
		controllers.server.locals.seo_schematags = book_review_details.
		seo_schema_tags;
		controllers.server.locals.seo_description = book_review_details.seo_description;
		controllers.server.locals.seo_image = book_review_details.photo;
		controllers.server.locals.seo_keyword = book_review_details.seo_keyword;
		// console.log(book_review_details);
		return res.render(`frontend/book_review_details`, {
			book_review_details,
			book_reviews,
		});
	},


	contact: async function (req, res) {
		let contact_numbers = await userContactNumbersModel.find();
		let emails = await userEmailsModel.find();
		let social_links = await userSocialLinksModel.find();
		let contact_message = await userContactMessagesModel.find();
		let address = await userSettingTitlesModel.find();
		// console.log("address", address[4].value[1]);
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
		let { category_name, category_id } = req.params;

		let categories = await categoryModel.find();
		let blogs = await blogModel.where({ category: [category_id] }).find().populate('creator').populate('category');

		return res.render(`category_post`, {
			categories,
			blogs
		});
	},
};

module.exports = controllers;
