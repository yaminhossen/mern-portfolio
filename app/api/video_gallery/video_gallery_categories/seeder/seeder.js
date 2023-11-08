const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "public 1",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		photo: "video 1",
		photo_alt: "video 1",
		seo_title: "video 1",
		seo_keywords: "video 1",
		seo_description: "video 1",
		status: true,
	},
	{
		title: "public 2",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		photo: "video 1",
		photo_alt: "video 1",
		seo_title: "video 1",
		seo_keywords: "video 1",
		seo_description: "video 1",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("video gallery categories seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("video gallery categories seeding complete");

		console.log("\n");
	});
