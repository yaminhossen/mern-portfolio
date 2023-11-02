const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "Banner",
		sub_title: "hellow@gmail.com",
		description: "dsgsd",
		button_text: "bxdfgr",
		button_url: "Sdfhdfh",
		status: true,
	},
	{
		title: "Banner2",
		sub_title: "hellow@gmail.com",
		description: "dsgsd",
		button_text: "bxdfgr",
		button_url: "Sdfhdfh",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("banner seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("banner seeding complete");

		console.log("\n");
	});
