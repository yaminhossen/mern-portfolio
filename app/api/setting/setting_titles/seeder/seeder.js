const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

title = [
	"title",
	"logo",
	"fabicon",
	"phone_number",
	"address",
	"company_name",
	"city",
	"state",
	"post_code",
	"country",
	"email",
	"map",

	// "bkash",
	// "nagad",
	// "rocket",
	// "bank_account",

	"home_delivery_cost",
	"out_dhaka_home_delivery_cost",

	"company_start_time",
	"company_end_time",
	"time_zone",

	// "about_us",
	// "privacy_policy",
	// "terms_and_conditions",
	// "refund_policy",

	"header_title",
	"copy_right",

	"seo_title",
	"seo_description",
	"seo_keywords",
	"seo_banner",

	"social_facebook",
	"social_twitter",
	"social_instagram",
	"social_linkedin",
	"social_youtube",

	"invoice_prefix",
	"invoice_company_name",
	"invoice_address_line_1",
	"invoice_address_line_2",

	"telegram_bot_api",

	"mail_mailer",
	"mail_host",
	"mail_port",
	"mail_user_name",
	"mail_password",
	"mail_from_address",
	"mail_from_name",

	"shut_down_website",
],




	module.exports = async () => mongoose.connect(db_url)
		.then(async () => {
			console.log("\n");
			console.log("setting title seeding");

			await Model.deleteMany({});
			for (let i = 0; i < title.length; i++) {
				console.log(title[i]);
				// await Model.create(title[i]);
				await Model.create({title:title[i], status:true});
			}

			// let response = await Model.insertMany(data);

			console.log("setting title seeding complete");

			console.log("\n");
		});
