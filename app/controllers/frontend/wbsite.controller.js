const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const uesrProfileInfosModel = require("../../api/user_profile_infos/model/model")

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
	profile_infos: async function (req, res) {
		let profile_info = await uesrProfileInfosModel.find();
        // let categories = await categoryModel.find();

		return res.render(`frontend/home`, {
			profile_info,
            // categories,
		});
	},
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
