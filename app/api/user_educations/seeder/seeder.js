const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "admin",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'This is very good',
	},
	
	{
		title: "user",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'This is not good',
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-education seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-education seeding complete");

		console.log("\n");
	});
