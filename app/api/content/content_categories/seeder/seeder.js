const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "Solo Tour",
		short_description:"sgtwe tour",
		long_description:"gfhjgf tour",
		photo:"hthcn tour",
		seo_title:"yesarly tour",
		seo_keyword:"yearly tour",
		seo_description:"yearly tour",
		url: "jsdklfj",
		status: true,

	},
	{
		title: "Official Tour",
		short_description:"sfdsf tour",
		long_description:"sfdsf tour",
		photo:"yearsdfdsly tour",
		seo_title:"yesarly tour",
		seo_keyword:"yearly tour",
		seo_description:"yearly tour",
		url: "jsdklfj",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("content categories seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("content categories seeding complete");

		console.log("\n");
	});
