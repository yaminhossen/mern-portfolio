const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");
const blogCategoriesModel = require("../../blog_categories/model/model");

var uni = [];
const gen_rand = () => {
	let rand = Math.floor(Math.random() * 5);
	if (rand == 0 || uni.includes(rand)) {
		rand = gen_rand();
	}
	uni.push(rand);
	return rand;
};

async function getId() {
	// Get a random entry
	var random = gen_rand();
	var data = await blogCategoriesModel.find().limit(1).skip(random);
	console.log(random, data[0]._id);
	return data.map(i => i._id);
}

// node app/api/blog/blogs/seeder/seeder.js
console.log("hi hello");


let data = [

	{
		title: "ইসরায়েল ও হামাস উভয়ই যুদ্ধাপরাধ করেছে",
		subtitle: "ইসরায়েল ও হামাস উভয়ই যুদ্ধাপরাধ করেছে: জাতিসংঘের মানবাধিকারপ্রধান",
		short_description: "`<p>জাতিসংঘের মানবাধিকারবিষয়ক হাইকমিশনার ফলকার টুর্ক বলেছেন, ইসরায়েল ও হামাস উভয়ই যুদ্ধাপরাধ করেছে।</p>`",
		description: `<p>ফলকার টুর্ক এখন পাঁচ দিনের মধ্যপ্রাচ্য সফরে আছেন। এ সফরের অংশ হিসেবে তিনি গতকাল বুধবার গাজা সীমান্তের রাফাহ ক্রসিংয়ের মিসরীয় দিক পরিদর্শন করেন। এ সময় তিনি এ মন্তব্য করেন।ইসরায়েল-ফিলিস্তিনের মধ্যে চলমান রক্তক্ষয়ী সংঘাত শুরু হয় গত ৭ অক্টোবর। সেদিন ইসরায়েলে হামলা চালায় ফিলিস্তিনি স্বাধীনতাকামী সশস্ত্র সংগঠন হামাস।</p>`,
		photo: "",
		photo_alt_text: "photo",
		seo_title: "ইসরায়েল ও হামাস",
		seo_keyword: "ইসরায়েল ও হামাস",
		seo_description: "ইসরায়েল ও হামাস",
		seo_schema_tags: "ইসরায়েল ও হামাস",
		published_date: "2023-06-14",
		categories: [],
		status: true,

	},
	{
		title: "যেভাবে চীনা কমিউনিস্ট পার্টির দ্বিতীয় সর্বোচ্চ ক্ষমতাশালী হন কেছিয়াং",
		subtitle: "লি কেছিয়াং—চীনের সাবেক প্রধানমন্ত্রী ও বর্ষীয়ান একজন রাজনীতিক।",
		short_description: "`<p>লি কেছিয়াং—চীনের সাবেক প্রধানমন্ত্রী ও বর্ষীয়ান একজন রাজনীতিক। বছর দেড়েক আগেও দেশটির প্রেসিডেন্ট সি চিন পিংয়ের পর চীনা কমিউনিস্ট পার্টিতে দ্বিতীয় সর্বোচ্চ ক্ষমতাশালী ব্যক্তি ছিলেন তিনি।</p>`",
		description: "<p>লি কেছিয়াং—চীনের সাবেক প্রধানমন্ত্রী ও বর্ষীয়ান একজন রাজনীতিক। বছর দেড়েক আগেও দেশটির প্রেসিডেন্ট সি চিন পিংয়ের পর চীনা কমিউনিস্ট পার্টিতে দ্বিতীয় সর্বোচ্চ ক্ষমতাশালী ব্যক্তি ছিলেন তিনি।</p>`",
		photo: "",
		photo_alt_text: "photo",
		seo_title: "চীনা কমিউনিস্ট",
		seo_keyword: "চীনা কমিউনিস্ট",
		seo_description: "চীনা কমিউনিস্ট",
		seo_schema_tags: "চীনা কমিউনিস্ট",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392'],
		status: true,

	},
	{
		title: "আবারও ইসরায়েল সফরে যাচ্ছেন মার্কিন পররাষ্ট্রমন্ত্রী ব্লিঙ্কেন",
		subtitle: "মার্কিন পররাষ্ট্রমন্ত্রী অ্যান্টনি ব্লিঙ্কেন আগামী শুক্রবার আবারও মধ্যপ্রাচ্য সফরে যাচ্ছেন।",
		short_description: "`<p>ইসরায়েল সফরের মধ্য দিয়ে তাঁর এ ভ্রমণ শুরু হচ্ছে। মার্কিন পররাষ্ট্র মন্ত্রণালয়ের মুখপাত্র এ কথা নিশ্চিত করেছেন।</p>`",
		description: "<p>ইসরায়েল সফরের মধ্য দিয়ে তাঁর এ ভ্রমণ শুরু হচ্ছে। মার্কিন পররাষ্ট্র মন্ত্রণালয়ের মুখপাত্র এ কথা নিশ্চিত করেছেন।গতকাল মঙ্গলবার মার্কিন পররাষ্ট্র দপ্তরের মুখপাত্র ম্যাথিও মিলার সাংবাদিকদের বলেন</p>`",
		photo: "",
		photo_alt_text: "photo",
		seo_title: "ইসরায়েল সফরে",
		seo_keyword: "ইসরায়েল সফরে",
		seo_description: "ইসরায়েল সফরে",
		seo_schema_tags: "ইসরায়েল সফরে",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392'],
		status: true,

	},
	{
		title: "নেতানিয়াহুকে বাতিলের খাতায় ফেলেছি: এরদোয়ান",
		subtitle: "নেতানিয়াহুকে বাতিলের খাতায় ফেলেছি: এরদোয়ান। ইসরায়েলে নিযুক্ত রাষ্ট্রদূতকে প্রত্যাহার করেছে তুরস্ক।",
		short_description: "`<p>ইসরায়েলে নিযুক্ত রাষ্ট্রদূতকে প্রত্যাহার করেছে তুরস্ক। একই সঙ্গে ইসরায়েলের প্রধানমন্ত্রী বেনিয়ামিন নেতানিয়াহুর সঙ্গে আলোচনা বন্ধ করে দিয়েছে আঙ্কারা।</p>`",
		description: "<p>ইসরায়েলে নিযুক্ত রাষ্ট্রদূতকে প্রত্যাহার করেছে তুরস্ক। একই সঙ্গে ইসরায়েলের প্রধানমন্ত্রী বেনিয়ামিন নেতানিয়াহুর সঙ্গে আলোচনা বন্ধ করে দিয়েছে আঙ্কারা। নেতানিয়াহুকে বাতিলের খাতায় ফেলে দেওয়ার ঘোষণা দিয়েছেন তুরস্কের প্রেসিডেন্ট রিসেপ তাইয়েপ এরদোয়ান।</p>`",
		photo: "",
		photo_alt_text: "photo",
		seo_title: "নেতানিয়াহুকে এরদোয়ান",
		seo_keyword: "নেতানিয়াহুকে এরদোয়ান",
		seo_description: "নেতানিয়াহুকে এরদোয়ান",
		seo_schema_tags: "নেতানিয়াহুকে এরদোয়ান",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392'],
		status: true,

	},

];

const run = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("blogs seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			let item = data[i]
			item.categories = await getId()
			await Model.create(item);
		}

		// let response = await Model.insertMany(data);

		console.log("blogs seeding complete");

		console.log("\n");
	});

run()
module.exports = run
