const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "কেন্দ্রীয় সভাপতি",
		sub_title: "কেন্দ্রীয় সভাপতির, বাংলাদেশ ইসলামী ছাত্রশিবির",
		profile_photo:"uploads/posts/19কেন্দ্রীয় সভাপতিbanner11.png",
		banner_photo:"uploads/posts/442কেন্দ্রীয় সভাপতিbg1.jpg",
		description: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		button_text: "আরোও দেখুন ",
		button_url: "/#",
		status: true,
	},
	{
		title: "কেন্দ্রীয় সভাপতি",
		sub_title: "কেন্দ্রীয় সভাপতির, বাংলাদেশ ইসলামী ছাত্রশিবির",
		profile_photo:"uploads/posts/19কেন্দ্রীয় সভাপতিbanner11.png",
		banner_photo:"uploads/posts/442কেন্দ্রীয় সভাপতিbg1.jpg",
		description: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		button_text: "আরোও দেখুন ",
		button_url: "/#",
		status: false,
	},
	{
		title: "কেন্দ্রীয় সভাপতি",
		sub_title: "কেন্দ্রীয় সভাপতির, বাংলাদেশ ইসলামী ছাত্রশিবির",
		profile_photo:"uploads/posts/19কেন্দ্রীয় সভাপতিbanner11.png",
		banner_photo:"uploads/posts/442কেন্দ্রীয় সভাপতিbg1.jpg",
		description: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		button_text: "আরোও দেখুন ",
		button_url: "/#",
		status: false,
	},
	{
		title: "কেন্দ্রীয় সভাপতি",
		sub_title: "কেন্দ্রীয় সভাপতির, বাংলাদেশ ইসলামী ছাত্রশিবির",
		profile_photo:"uploads/posts/19কেন্দ্রীয় সভাপতিbanner11.png",
		banner_photo:"uploads/posts/442কেন্দ্রীয় সভাপতিbg1.jpg",
		description: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		button_text: "আরোও দেখুন ",
		button_url: "/#",
		status: false,
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
