const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "Blog image1",
		description: "This is good",
		photo: "dhfdhdf",
		photo_alt: "dhfdhdf",
		status: true,

	},
	{
		title: "Blog image2",
		description: "This is so good",
		photo: "dhfdhdf",
		photo_alt: "dhfdhdf",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("content images seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("content images seeding complete");

		console.log("\n");
	});
