const blogCategoriesModel = require("../api/blog/blog_categories/model/model")

module.exports = async (server, req) => {
    let blog_category = await blogCategoriesModel.find();
	server.locals.commonData = {
        blog_category
    };
}