const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "কেন্দ্রীয় সভাপতি",
		sub_title: "কেন্দ্রীয় সভাপতির, বাংলাদেশ ইসলামী ছাত্রশিবির",
		profile_photo:"",
		banner_photo:"",
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
