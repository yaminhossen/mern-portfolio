const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "বৃক্ষরোপন",
		short_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে।",
		long_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে। এটি প্রকৃতির সুরক্ষা, উন্নত এবং অনুভূতির দক্ষ সংরক্ষণের চেষ্টা। বৃক্ষ রোপণের ক্রিয়াটি শুধুমাত্র শারীরিক ক্রিয়া নয়; এটি পৃথিবীর ভালবাসা এবং আমাদের ভূমির দরবার হিসেবে আমাদের দায়িত্বের প্রতিষ্ঠা।",
		url: "tree_plantation",
		photo: "uploads/posts/732public 1tree_plan.jpg",
		photo_alt: "বৃক্ষরোপন",
		seo_title: "বৃক্ষরোপন",
		seo_keyword: "বৃক্ষরোপন",
		seo_description: "বৃক্ষরোপন",
		status: true,
	},
	{
		title: "বৃক্ষরোপন",
		short_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে।",
		long_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে। এটি প্রকৃতির সুরক্ষা, উন্নত এবং অনুভূতির দক্ষ সংরক্ষণের চেষ্টা। বৃক্ষ রোপণের ক্রিয়াটি শুধুমাত্র শারীরিক ক্রিয়া নয়; এটি পৃথিবীর ভালবাসা এবং আমাদের ভূমির দরবার হিসেবে আমাদের দায়িত্বের প্রতিষ্ঠা।",
		url: "tree_plantation",
		photo: "uploads/posts/732public 1tree_plan.jpg",
		photo_alt: "বৃক্ষরোপন",
		seo_title: "বৃক্ষরোপন",
		seo_keyword: "বৃক্ষরোপন",
		seo_description: "বৃক্ষরোপন",
		status: true,
	},
	{
		title: "বৃক্ষরোপন",
		short_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে।",
		long_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে। এটি প্রকৃতির সুরক্ষা, উন্নত এবং অনুভূতির দক্ষ সংরক্ষণের চেষ্টা। বৃক্ষ রোপণের ক্রিয়াটি শুধুমাত্র শারীরিক ক্রিয়া নয়; এটি পৃথিবীর ভালবাসা এবং আমাদের ভূমির দরবার হিসেবে আমাদের দায়িত্বের প্রতিষ্ঠা।",
		url: "tree_plantation",
		photo: "uploads/posts/732public 1tree_plan.jpg",
		photo_alt: "বৃক্ষরোপন",
		seo_title: "বৃক্ষরোপন",
		seo_keyword: "বৃক্ষরোপন",
		seo_description: "বৃক্ষরোপন",
		status: true,
	},
	{
		title: "বৃক্ষরোপন",
		short_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে।",
		long_description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে। এটি প্রকৃতির সুরক্ষা, উন্নত এবং অনুভূতির দক্ষ সংরক্ষণের চেষ্টা। বৃক্ষ রোপণের ক্রিয়াটি শুধুমাত্র শারীরিক ক্রিয়া নয়; এটি পৃথিবীর ভালবাসা এবং আমাদের ভূমির দরবার হিসেবে আমাদের দায়িত্বের প্রতিষ্ঠা।",
		url: "tree_plantation",
		photo: "uploads/posts/732public 1tree_plan.jpg",
		photo_alt: "বৃক্ষরোপন",
		seo_title: "বৃক্ষরোপন",
		seo_keyword: "বৃক্ষরোপন",
		seo_description: "বৃক্ষরোপন",
		status: true,
	},
	{
		title: "সামাজিক উন্নয়ন",
		short_description: "একটি সামাজিকভাবে উন্নত সমাজ একটি সুস্থ, সহিষ্ণু, এবং সমৃদ্ধিশীল সমাজ তৈরি করে যা সমস্ত সদস্যদের হিসেবে সমর্পিত।",
		long_description: "একটি সামাজিকভাবে উন্নত সমাজ একটি সুস্থ, সহিষ্ণু, এবং সমৃদ্ধিশীল সমাজ তৈরি করে যা সমস্ত সদস্যদের হিসেবে সমর্পিত। এটি সমাজে সমর্থ এবং সম্প্রদায়ের সদস্যদের মধ্যে সমর্থ প্রতিষ্ঠান ও সহযোগিতার প্রবৃদ্ধি বাড়াতে সাহায্য করে, যার ফলে একটি ন্যায়িক, সমর্থ, এবং সমৃদ্ধিশীল সমাজ তৈরি হয়।",
		url: "social_development",
		photo: "uploads/posts/516public 2social_dev.jpg",
		photo_alt: "সামাজিক উন্নয়ন",
		seo_title: "সামাজিক উন্নয়ন",
		seo_keyword: "সামাজিক উন্নয়ন",
		seo_description: "সামাজিক উন্নয়ন",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("photo gallery categories seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("photo gallery categories seeding complete");

		console.log("\n");
	});
