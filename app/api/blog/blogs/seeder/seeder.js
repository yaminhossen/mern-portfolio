const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "Tour",
		subtitle:"yearly tour",
		short_description:"sfdsf tour",
		description:"hs tour",
		photo:"yearsdfdsly tour",
		photo_alt_text:"dsgds tour",
		seo_title:"yesarly tour",
		seo_keyword:"yearly tour",
		seo_description:"yearly tour",
		seo_schema_tags:"yearly tour",
		published_date:"2023-06-14",
		status: true,

	},
	{
		title: "Vlog",
		subtitle:"Moto vlog",
		short_description:"yearly vlog tour",
		description:"yearly tour",
		photo:"yearly tour",
		photo_alt_text:"yearly tour",
		seo_title:"yearly tour",
		seo_keyword:"yearly tour",
		seo_description:"yearly tour",
		seo_schema_tags:"yearly tour",
		published_date:"2023-07-11",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("blogs seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("blogs seeding complete");

		console.log("\n");
	});
