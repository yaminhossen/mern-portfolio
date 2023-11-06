const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");
var fs = require('fs-extra')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const data_validation = async (request_data) => {
    await body("title")
        .not()
        .isEmpty()
        .withMessage("the title field is required")
        .run(request_data);
    await body("subtitle")
        .not()
        .isEmpty()
        .withMessage("the subtitle field is required")
        .run(request_data);
    await body("short_description")
        .not()
        .isEmpty()
        .withMessage("the short_description field is required")
        .run(request_data);
    await body("description")
        .not()
        .isEmpty()
        .withMessage("the description field is required")
        .run(request_data);
    await body("photo_alt_text")
        .not()
        .isEmpty()
        .withMessage("the photo_alt_text field is required")
        .run(request_data);
    await body("seo_title")
        .not()
        .isEmpty()
        .withMessage("the seo_title field is required")
        .run(request_data);
    await body("seo_keyword")
        .not()
        .isEmpty()
        .withMessage("the seo_keyword field is required")
        .run(request_data);
    await body("seo_description")
        .not()
        .isEmpty()
        .withMessage("the seo_description field is required")
        .run(request_data);
    await body("seo_schema_tags")
        .not()
        .isEmpty()
        .withMessage("the seo_schema_tags field is required")
        .run(request_data);
    await body("published_date")
        .not()
        .isEmpty()
        .withMessage("the published_date field is required")
        .run(request_data);


//  console.log("body data",body("title") );
    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (datas) => {
    let data = datas.body;
    let files = datas.files;
    console.log('from store append', data);
    console.log('from store append', files);
    // console.log('from store append fdgfgdfdfile', files);

    const upload_files = (file, id) => {
        let file_name = parseInt(Math.random() * 1000) + id + file.name;
        const path = appDir + "/public/uploads/posts/" + file_name;
        fs.move(file.path, path, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
        photo_path = "uploads/posts/" + file_name;
        return photo_path;
    }
    // let 
    let check = await data_validation({ body: data });
    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }

    try {
        var photo_path = "";

        if (files?.photo) {
            photo_path = upload_files(files?.photo, data.title);
            console.log('form photo_path', photo_path);
        }


        // const user = new model();
        const user = {};
        user.title = data.title;
        user.subtitle = data.subtitle;
        user.short_description = data.short_description;
        user.description = data.description;
        user.photo = photo_path;
        user.photo_alt_text = data.photo_alt_text;
        user.seo_title = data.seo_title;
        user.seo_keyword = data.seo_keyword;
        user.seo_description = data.seo_description;
        user.seo_schema_tags = data.seo_schema_tags;
        user.published_date = data.published_date;
        // user.creator = data.creator;
        const new_data = await model.create(user);
        // user.save();
        // await user.save();
        // console.log(new_data);
        return {
            status: 'success',
            data: new_data,
            message: "data inserted successfully",
            status_code: 201,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 409,
        }
    }
}