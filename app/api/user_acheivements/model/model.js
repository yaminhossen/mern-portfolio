// last_id:746 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../utilites/readFirstLine");
const writeFirstLine = require("../../../utilites/writeFirstLine");


let userAcheivementSchema = mongoose.Schema({
	
	title: {
		type: String,
		require: true,
		unique: true,
	},
	serial: {
		type: Number,
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
	date: {
		type: Date,
	},
	description:{
		type: String,
	}
}, {
	timestamps: true,
});

userAcheivementSchema.pre('save', async function (next) {
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



module.exports = mongoose.model("user_acheivements", userAcheivementSchema);
