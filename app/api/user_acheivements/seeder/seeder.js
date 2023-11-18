const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "সামাজিক কাজ",
		serial: 1,
		status: true,
		date: "2023-06-14",
		description: ' সামাজিক মূল্যবোধ বিভিন্ন কারণে নিজেকে আরোগ্যসম্মত, উদার, স্বচ্ছ, নৈতিক, সহিষ্ণুতামূলক ও বিনয়ী ব্যক্তি হিসেবে উন্নয়ন করতে সাহায্য করে। এছাড়াও এটি সমাজের মানদণ্ড, নীতিমালা ও সংস্কৃতির বিকাশে অবদান রাখে।',

	},
	{
		title: "শিক্ষামূলক কাজ",
		serial: 2,
		status: true,
		date: "2023-06-14",
		description: ' সামাজিক মূল্যবোধ বিভিন্ন কারণে নিজেকে আরোগ্যসম্মত, উদার, স্বচ্ছ, নৈতিক, সহিষ্ণুতামূলক ও বিনয়ী ব্যক্তি হিসেবে উন্নয়ন করতে সাহায্য করে। এছাড়াও এটি সমাজের মানদণ্ড, নীতিমালা ও সংস্কৃতির বিকাশে অবদান রাখে।',

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-roles seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-roles seeding complete");

		console.log("\n");
	});
