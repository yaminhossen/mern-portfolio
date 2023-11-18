const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		designation: "Teacher",
		blood_group: "B+",
		date_of_birth: "2023-06-10",
		nationality: "bangladeshi",
		father_name: "Abdur Rahman",
		mother_name: "Khadejaul kubra",
		banner_profile_pic: "",
		short_bio: "sdfjdklsjfklsdj",
		full_bio: "sdfjdklsjfklsdj",
		address_present: "dhaka",
		address_permanent: "khulna",
		google_map: "sljflksj",

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-profile-info seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-profile-info seeding complete");

		console.log("\n");
	});
