const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");
const blogCategoriesModel = require("../../blog_categories/model/model");

var uni = [];
const gen_rand = () => {
	let rand = Math.floor(Math.random() * 7);
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
	return [data.map(i => i._id),"655dc56cdfef49c66bc28b5f"];
}

// node app/api/blog/blogs/seeder/seeder.js
// console.log("hi hello");


let data = [

	{
		title: "কেমন আছেন আল মাহমুদ",
		subtitle: "আল মাহমুদের মতো কবি যুগে যুগে জন্মায় না। বহু প্রতীক্ষার পর একজন বড় কবির আবির্ভাব ঘটে। একটি জাতির জন্য এটি…",
		short_description: `<p>আল মাহমুদের মতো কবি যুগে যুগে জন্মায় না। বহু প্রতীক্ষার পর একজন বড় কবির আবির্ভাব ঘটে। একটি জাতির জন্য এটি গৌরবের। একটি দেশের জন্য সম্পদ। যদি সে জাতি এবং সে দেশ বোঝে। অনুভব করে। ব্যক্তি আল মাহমুদ নিয়ে কথা আছে। থাকতেই পারে। কিন্তু কবি আল মাহমুদ সব বিতর্কের ঊর্ধ্বে। তার কবিতার মধুর শরাব পান করেননি বাংলাভাষী এমন শিক্ষিত মানুষ কমই আছেন</p>`,
		description: `তিনি কবিতার জগতে এতটা উচ্চতায় নিয়েছেন নিজেকে যে, তাকে নিয়ে লিখতেই হয়। বলতেই হয়। আড্ডায় আসরে আলোচনায় তাকে উচ্চারণ করতে হয়। উপমা দিতে হয় তার কথা। তার কবিতা থেকে দিতে হয় উদাহরণ। তিনি নিজেকে নির্মাণ করেছেন তিলে তিলে। তার নির্মিত কাব্যিক প্রাসাদ বেশ উঁচু। তাকে অবহেলা করার কিছু নেই। অবজ্ঞারও নেই কিছু। তার যত নাম অনাম সুনাম বদনামÑ সবই কবিতা ঘিরে। প্রশংসা-নিন্দাও কবিতার জন্যই। তিনি কবি এবং একজন অসাধারণ কবি। তিনি আল মাহমুদ।

		ক’দিন ধরে বেশ কিছু পত্রিকা, অনলাইন, নিউজ পোর্টাল এবং ফেসবুকে বেশ লেখালেখি দেখেছি আল মাহমুদকে ঘিরে। তিনি লেখার বিষয়। তাকে নিয়ে লিখতেই হয়। লিখতে হবে। কথায় আছে, মৃত্যুর পরও পৃথিবীতে বেঁচে থাকার উপায় দু’টি অথবা দু’টির যেকোনো একটি। হয় এমন কিছু লিখে যাও, যা মানুষ পড়বে। অথবা এমন কিছু করে যাও মানুষ লিখবে। তার মানে অক্ষরে জেগে থাকা ছাড়া বেঁচে থাকার আর কোনো পথ নেই। আল মাহমুদ শব্দের আনন্দে যা নির্মাণ করেছেন, তা মানুষকে পড়তে হয়। হয়তো পড়তে হবে আগামী প্রজন্মকেও। পাশাপাশি তার লেখালেখি কর্মের গৌরব নিয়ে লিখতেও হবে। সুতরাং তাকে নিয়ে লেখালেখি হবে এটা খুবই স্বাভাবিক।
		কিন্তু বিভিন্নভাবে এ ক’দিন যেভাবে লেখালেখি হয়েছে তা স্বাভাবিক নয়। কোথাও মিথ্যের ছড়াছড়ি। কোথাও বিবেকহীনতা রয়েছে। একটি অনলাইন নিউজ করেছে- আল মাহমুদ গ্রামের বাড়িতে পড়ে আছেন নিঃসঙ্গ। তিনি অবহেলার শিকার। তাকে দেখাশোনার কেউ নেই। তার ছেলেরাও দেখছে না। কেউ নিউজ করেছেন- আল মাহমুদের অবস্থা করুণ। তার যথার্থ যত্ন নিচ্ছে না কেউ। অতি আবেগ থেকে কেউ কেউ বিছানায় শায়িত অথবা ঘুমন্ত আল মাহমুদের ছবি পোস্ট করেছেন ফেসবুকে। লিখেছেন- দেখুন, কী করুণ আল মাহমুদ! এসব মিথ্যা বানোয়াট ও উদ্দেশ্যমূলক খবর এবং অবিবেচক ও মাত্রাজ্ঞানহীন নিউজ একজন কবির পক্ষে অবশ্যই সম্মানজনক নয়।</p>`,
		photo: "/uploads/posts/1.jpg",
		photo_alt_text: "photo",
		seo_title: "আল মাহমুদ",
		seo_keyword: "আল মাহমুদ",
		seo_description: "আল মাহমুদ",
		seo_schema_tags: "আল মাহমুদ",
		published_date: "2023-06-14",
		categories: ['655dc56cdfef49c66bc28b5f'],
		status: true,

	},
	{
		title: "মহাকাব্য প্যারাডাইস লস্ট ও জন মিলটন",
		subtitle: "১৬০৮ সালের ৯ ডিসেম্বর ইংল্যান্ডের লন্ডন শহরের ব্রেড স্ট্রিটে জন্মগ্রহণ করেন ইংরেজি সাহিত্যের অন্যতম শ্রেষ্ঠ কবি জন মিলটন। তিনি ইংরেজি",
		short_description: `<p>১৬০৮ সালের ৯ ডিসেম্বর ইংল্যান্ডের লন্ডন শহরের ব্রেড স্ট্রিটে জন্মগ্রহণ করেন ইংরেজি সাহিত্যের অন্যতম শ্রেষ্ঠ কবি জন মিলটন। তিনি ইংরেজি সাহিত্যের অন্যতম প্রধান ও প্রভাবশালী কবি। শেক্সপিয়ারের পরেই যার স্থান বলে মনে করেন অনেকে। স্কুলের ছাত্র থাকাকালে মিলটন নিয়মিত পড়াশোনার পাশাপাশি লাতিন, গ্রিক, হিব্রু ভাষা ও সাহিত্য অধ্যয়ন করেন। সেই সাথে কাব্যচর্চাও শুরু করেন। ১৬২৬ সালে কলেজে পড়ার সময় তার প্রথম কবিতা প্রকাশিত হয়। তার সবচেয়ে বিখ্যাত ও কালোত্তীর্ণ সৃষ্টি মহাকাব্য Paradise Lost।</p>`,
		description: `<p>১৬০৮ সালের ৯ ডিসেম্বর ইংল্যান্ডের লন্ডন শহরের ব্রেড স্ট্রিটে জন্মগ্রহণ করেন ইংরেজি সাহিত্যের অন্যতম শ্রেষ্ঠ কবি জন মিলটন। তিনি ইংরেজি সাহিত্যের অন্যতম প্রধান ও প্রভাবশালী কবি। শেক্সপিয়ারের পরেই যার স্থান বলে মনে করেন অনেকে। স্কুলের ছাত্র থাকাকালে মিলটন নিয়মিত পড়াশোনার পাশাপাশি লাতিন, গ্রিক, হিব্রু ভাষা ও সাহিত্য অধ্যয়ন করেন। সেই সাথে কাব্যচর্চাও শুরু করেন। ১৬২৬ সালে কলেজে পড়ার সময় তার প্রথম কবিতা প্রকাশিত হয়। তার সবচেয়ে বিখ্যাত ও কালোত্তীর্ণ সৃষ্টি মহাকাব্য Paradise Lost। এ ছাড়া তার রচিত উল্লেখযোগ্য রচনাসমূহ হচ্ছে- কবিতাগ্রন্থ লাইসিডাস, প্যারাডাইস রিজেন্ট, স্যামসন এনিস্তে, লা এলেগ্র,কাব্যনাটক কমাস,গদ্য রচনা অব এডুকেশন, এরিওপোজিটিকা বিশেষভাবে উল্লেখযোগ্য।
		প্যারাডাইজ লস্ট মহাকাব্যটি মিলটনের সময় থেকে আজ অবধি ইংরেজ সাহিত্য-সমালোচনার কেন্দ্রেই রয়ে গেছে। ১৬৫৮ থেকে ১৬৬৪ সালের মধ্যে মিলটন তার মহাকাব্য প্যারাডাইজ লস্ট রচনা করেন।</p>`,
		photo: "/uploads/posts/2.jpg",
		photo_alt_text: "photo",
		seo_title: "জন মিলটন",
		seo_keyword: "জন মিলটন",
		seo_description: "জন মিলটন",
		seo_schema_tags: "জন মিলটন",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392', '655dc56cdfef49c66bc28b5f'],
		status: true,

	},
	{
		title: "নির্জনতার কবি জীবনানন্দ দাশের জন্মদিনে",
		subtitle: "আমি কবি, সেই কবি-আকাশে কাতর আঁখি তুলি হেরিঝরাপালকের ছবি’ আজ নির্জনতার কবি জীবনানন্দ দাশের ১২৩তম জন্মদিন। রূপসী বাংলার কবি ১৯৯৯…",
		short_description: `<p>
		আজ নির্জনতার কবি জীবনানন্দ দাশের ১২৩তম জন্মদিন। রূপসী বাংলার কবি ১৯৯৯ সালের ১৭ ফেব্রুয়ারি বরিশাল জেলায় জন্মগ্রহণ করেন। তার মা কবি কুসুম কুমারী দাশ ও বাবার নাম সত্যানন্দ দাশ। তার মা কুসুম কুমারী দাশ কবি। জীবনানন্দ ১৯৫৪ সালের ২২ অক্টোবর ৫৫ বছর বয়সে কলকাতায় ট্রাম দুর্ঘটনায় মারা যান।</p>`,
		description: `<p>জীবনানন্দ বরিশাল ব্রজমোহন স্কুল থেকে ম্যাট্রিক (১৯১৫), বি এম কলেজ থেকে আইএ (১৯১৭) এবং কলকাতার প্রেসিডেন্সি কলেজ থেকে ইংরেজিতে অনার্সসহ বি.এ (১৯১৯) ও ইংরেজিতে এম.এ (১৯২১) পাস করেন। আইন কলেজে ভর্তি হলেও শেষ পর্যন্ত তিনি পরীক্ষা দেননি।


		জীবনানন্দ কলকাতা সিটি কলেজে ১৯২২ সালে ইংরেজি সাহিত্যে অধ্যাপনা শুরু করেন। ১৯২৯ সালে তিনি সদ্য প্রতিষ্ঠিত বাগেরহাট প্রফুল্লচন্দ্র কলেজে যোগ দেন, কিন্তু কিছু দিন পর চাকরি ছেড়ে কলকাতায় চলে যান। ওই বছরই (১৯২৯) তিনি দিল্লির রামযশ কলেজে যোগ দেন, ১৯৩০-এ আবার দেশে প্রত্যাবর্তন করেন। </p>`,
		photo: "/uploads/posts/3.jpg",
		photo_alt_text: "photo",
		seo_title: "জীবনানন্দ দাশ",
		seo_keyword: "জীবনানন্দ দাশ",
		seo_description: "জীবনানন্দ দাশ",
		seo_schema_tags: "জীবনানন্দ দাশ",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392','655dc56cdfef49c66bc28b5f'],
		status: true,

	},
	{
		title: "‘কবি মল্লিক বাংলা গানের জগতে উজ্জ্বল নক্ষত্র’",
		subtitle: "গীতিকার, কবি ও সংগঠক আ জ ম ওবায়দুল্লাহ বলেছেন, মতিউর রহমান মল্লিক বাংলা গানের জগতে একটি উজ্জ্বল নক্ষত্র। যে নক্ষত্রের",
		short_description: `<p>যে নক্ষত্রের আলো বাংলা ভাষা ও সাহিত্য এবং বাঙালি জাতি যত দিন এই পৃথিবীতে থাকবে, তত দিন জ্বলতে থাকবে। তার গানের জাগরণের বাণী ও সুর আমাদের এবং আমাদের ভবিষ্যত প্রজন্মকে যুগের পর যুগ অনুপ্রাণিত করবে। সোমবার রাতে বাংলাদেশ কালচারাল একাডেমি আয়োজিত ‘কবি মতিউর রহমান মল্লিক স্মারক গ্রন্থের মোড়ক উন্মোচন ও সাংস্কৃতিক সন্ধ্যা’ অনুষ্ঠানে প্রধান অতিথির বক্তব্যে এ কথা বলেন।</p>`,
		description: `<p>বাংলাদেশ কালচারাল একাডেমির চেয়ারম্যান বাচিক শিল্পী শরীফ বায়জীদ মাহমুদের সভাপতিত্বে এ অনুষ্ঠানে স্বাগত বক্তব্য রাখেন একাডেমির সেক্রেটারি কবি ইবরাহিম বাহারী।

		শুভেচ্ছা বক্তব্য রাখেন কবি আসাদ বিন হাফিজ, গীতিকার অধ্যাপক আবু তাহের বেলাল, কবি শহীদ সিরাজী প্রমুখ।
		
		সভাপতির বক্তব্যে শরীফ বায়জীদ মাহমুদ বলেন, আমাদের সাংস্কৃতির চর্চার লক্ষ্য শুধুমাত্র চিত্ত বিনোদন নয়,আমাদের লক্ষ্য চিত্ত পরিশুদ্ধ করা। কবি মতিউর রহমান মল্লিকের গান কবিতায় চিত্ত পরিশুদ্ধ করার সমৃদ্ধ উপাদান আছে।</p>`,
		photo: "/uploads/posts/4.jpg",
		photo_alt_text: "photo",
		seo_title: "কবি মল্লিক",
		seo_keyword: "কবি মল্লিক",
		seo_description: "কবি মল্লিক",
		seo_schema_tags: "কবি মল্লিক",
		published_date: "2023-07-11",
		categories: ['654c5d4e30dbb71ec3d78392','655dc56cdfef49c66bc28b5f'],
		status: true,

	},
	{
		title: "আরবি নিউজ অনুবাদ শেখার অনবদ্য বই ‘মিডিয়া আরবি শিখি’",
		subtitle: "কোরআন-হাদিস চর্চার পাশাপাশি আরবি শিক্ষার্থীদের মধ্যে ইদানিং আরবি পত্র-পত্রিকা পাঠ ও সেখান থেকে নিউজ অনুবাদের আগ্রহ আগের যেকোনো সময়ের তুলনায়",
		short_description: `<p>কোরআন-হাদিস চর্চার পাশাপাশি আরবি শিক্ষার্থীদের মধ্যে ইদানিং আরবি পত্র-পত্রিকা পাঠ ও সেখান থেকে নিউজ অনুবাদের আগ্রহ আগের যেকোনো সময়ের তুলনায় বেড়েছে। সে লক্ষে ইতিপূর্বে বাজারে এসেছে বেশ কয়েকটি ‘অনুবাদ শেখার আরবি-বাংলা বই’। সেগুলো থেকে শিক্ষার্থীরা যথাসম্ভব উপকৃতও হয়েছে। কিন্তু এরই মধ্যে আরবি থেকে বাংলায় নিউজ অনুবাদের জন্য নতুন আরেকটি বই প্রকাশিত হয়েছে। দেশের তরুণ আলেম ও আরবি ভাষাবিদ শফিকুল ইসলাম আল ইমদাদী লিখিত এ বইয়ের নাম ‘মিডিয়া আরবি শিখি’।</p>`,
		description: `<p>বইটি প্রকাশের আগে তাতে থাকা প্রতিটি নিউজ লেখকের ফেসবুকে দেয়া হতো, তখন থেকেই আরবি নিউজ অনুবাদের সাথে সম্পৃক্ত তরুণরা তাকে একটি বই করার আহবান জানান। সেখান থেকে অনুপ্রাণিত হয়েই শফিকুল ইসলাম আল ইমদাদীর ‘মিডিয়া আরবি শিখি’-এর জন্ম।


		নিউজ অনুবাদের সাথে সম্পৃক্ত একাধিক তরুণ বইটি সম্পর্কে জানিয়েছেন, আগের বইগুলোর চেয়ে এটি বেশ সহজ ও সাবলীল। অধিক প্রয়োজনীয় ও তুলনামূলক সহজ নিউজগুলো পূর্ণাঙ্গ অনুবাদের পাশাপাশি শব্দে শব্দেও অনুবাদ করা হয়েছে, যা অনুবাদের প্রাথমিক শিক্ষার্থীর জন্য খুবই উপকারী ও ফলদায়ক হবে। সে হিসেবে এ পর্যন্ত বাংলায় রচিত অনুবাদের অন্যান্য বইয়ের চেয়ে এটি অনন্য ও অনবদ্য।</p>`,
		photo: "/uploads/posts/5.jpg",
		photo_alt_text: "photeo",
		seo_title: "আরবি নিউজ",
		seo_keyword: "আরবি নিউজ",
		seo_description: "আরবি নিউজ",
		seo_schema_tags: "আরবি নিউজ",
		published_date: "2023-07-01",
		categories: ['655dc56cdfef49c66bc28b5f'],
		status: true,

	},
	{
		title: "মানবজীবনে ট্র্যাজেডি",
		subtitle: "মৃত্যুর আগ পর্যন্তু মানুষের বেঁচে থাকাকে বলা হয় মানবজীবন। জগতের শ্রেষ্ঠ জীবন মানবজীবন। অন্যান্য প্রাণী থেকে মানুষ এ জন্য আলাদা",
		short_description: `<p>মৃত্যুর আগ পর্যন্তু মানুষের বেঁচে থাকাকে বলা হয় মানবজীবন। জগতের শ্রেষ্ঠ জীবন মানবজীবন। অন্যান্য প্রাণী থেকে মানুষ এ জন্য আলাদা যে, তাদের সুখ ও দুঃখ ভোগ করার একটা ভিন্নরকমের অনুভূতি রয়েছে। চরম সুখে মানুষ পুলকিত হতে পারে আবার কঠিন দুঃখে মানুষ মুষরে পড়তে পারে। যার যার মতো করে মানুষ সুখী হয় আবার এই মানুষই যার যার মতো করে দুঃখ ভোগ করে। এই বৈশিষ্ট্যই মানবজীবনকে অন্যান্য প্রাণী থেকে আলাদা করে রেখেছে।</p>`,
		description: `<p> কিছু মানুষ রয়েছে যারা সারা জীবনই সুখ ভোগ করতে পারে আর কিছু মানুষ রয়েছে সারা জীবনই দুঃখ-কষ্টে বেঁচে থাকেন। কোনো মানুষের জীবনে কোনো একসময় সুখ ধরা দিতে পারে আবার দুঃখও তেমনি করে হঠাৎ জীবনের দরজায় কড়া নাড়তে পারে। সুখ ও দুঃখ এভাবেই নিজ নিজ গন্তব্য ঠিক করে নিয়ে আবর্তিত হতে থাকে। সুখ কী আর দুঃখইবা কাকে বলে এ নিয়েও বিস্তর মতপার্থক্য রয়েছে। তবে ছোট ছোট সুখ এবং ছোট ছোট দুঃখের কোনো সংজ্ঞা দেয়া যায় না। এগুলো আপেক্ষিক। বড় বড় দুঃখের সংজ্ঞা না হলেও সেসব দুঃখকে দেখা যায়। ছোট ছোট সুখ; ছোট ছোট দুঃখ প্রায় সব মানুষের মধ্যেই কমবেশি অবস্থান করে। কিন্তু বড় বড় সুখ ও বড় বড় দুঃখ বাসা বাঁধতে পারে বড় বড় মানুষের জীবনে। মহৎ ব্যক্তিত্বের সুখ ও দুঃখ আস্বাদনের মাত্রা সাধারণ মানুষের তুলনায় ভিন্নতর হয়ে থাকে। জীবনবোধের অনুভূতি যত গভীর হয় সুখ ও দুঃখ বোধের পরিমাণও ততই গভীর হতে পারে। পাহাড়কে নিশ্চিহ্ন করতে বড় শক্তির প্রয়োজন পড়ে।</p>`,
		photo: "/uploads/posts/6.jpg",
		photo_alt_text: "photo2",
		seo_title: "মানবজীবনে ট্র্যাজেডি",
		seo_keyword: "মানবজীবনে ট্র্যাজেডি",
		seo_description: "মানবজীবনে ট্র্যাজেডি",
		seo_schema_tags: "মানবজীবনে ট্র্যাজেডি",
		published_date: "2023-07-05",
		categories: ['655dc56cdfef49c66bc28b5f'],
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

// run()
module.exports = async () =>  run()
