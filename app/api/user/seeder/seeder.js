const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	{
		username: "admin",
		email: "admin@gmail.com",
		password: "$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy",
		full_name: "Mohammad",
		telegram_id: "something",
		telegram_name: "somethingOne",
		mobile_number: "3908758",
		photo: "",
		status: true,
		remember_token: "rememberToken"
	},
];

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("user seeding");
	// console.log('$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy');

	await Model.deleteMany({});

	for (let i = 0; i < data.length; i++) {
		await Model.create(data[i]);
	}

	console.log("user seeding complete");

	console.log("\n");
});
