const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "kjsd",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		image: "video 1",
		seo_title: "video 1",
		seo_keyword: "video 1",
		seo_description: "video 1",
		status: true,
	},
	{
		title: "drfghr",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		image: "video 1",
		seo_title: "video 1",
		seo_keyword: "video 1",
		seo_description: "video 1",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("site url seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("site url seeding complete");

		console.log("\n");
	});
