const blogCategoriesModel = require("../api/blog/blog_categories/model/model")
const tagsModel = require("../api/tag/tags/model/model")

module.exports = async (server, req) => {
    let blog_category = await blogCategoriesModel.find();
    let tags = await tagsModel.find();
    // console.log("tagssss",tags[1].title);
	server.locals.commonData = {
        blog_category,
        tags,
    };
}