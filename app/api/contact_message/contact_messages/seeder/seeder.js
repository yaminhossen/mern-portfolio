const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		full_name: "Hellow sagir",
		email: "hellow@gmail.com",
		address: "Solo Tour",
		subject: "Solo Tour",
		message: "Solo Tour",
		status: true,

	},
	{
		full_name: "sdfds sagir",
		email: "sdfs@gmail.com",
		address: "Solo Tour",
		subject: "Solo Tour",
		message: "Solo Tour",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("contact message seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("contact message seeding complete");

		console.log("\n");
	});
