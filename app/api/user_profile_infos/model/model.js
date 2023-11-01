// last_id:375 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../utilites/readFirstLine");
const writeFirstLine = require("../../../utilites/writeFirstLine");


let userProfileInfoSchema = mongoose.Schema({
	
	designation: {
		type: String,
		require: true,
		unique: true,
	},
	blood_group: {
		type: String,
		require: true,
		unique: true,
	},
	date_of_birth: {
		type: Date,
		require: true,
		unique: true,
	},
	nationality: {
		type: String,
		require: true,
		unique: true,
	},
	father_name: {
		type: String,
		require: true,
		unique: true,
	},
	mother_name: {
		type: String,
		require: true,
		unique: true,
	},
	banner_profile_pic: {
		type: String,
		require: true,
		unique: true,
	},
	short_bio: {
		type: String,
		require: true,
		unique: true,
	},
	full_bio: {
		type: String,
		require: true,
		unique: true,
	},
	address_present: {
		type: String,
		require: true,
		unique: true,
	},
	address_permanent: {
		type: String,
		require: true,
		unique: true,
	},
	google_map: {
		type: String,
		require: true,
		unique: true,
	},
	status: {
		type: Boolean,
		default: true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		// required: true,
		ref: 'users',
	},
}, {
	timestamps: true,
});

userProfileInfoSchema.pre('save', async function (next) {
	if (!this.isNew) return;

	try {
		let line = await readFirstLine(__filename);
		let last_id = parseInt(line.substr(11)) + 1;
		await writeFirstLine(__filename, line, `// last_id:${last_id} `);
		this.last_id = last_id;
	} catch (error) {
		console.log(error);
	}

	next();
})



module.exports = mongoose.model("user_profile_infos", userProfileInfoSchema);
