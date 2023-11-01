const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");

const data_validation = async (request_data) => {
    await body("designation")
        .not()
        .isEmpty()
        .withMessage("the designation field is required")
        .run(request_data);
    await body("blood_group")
        .not()
        .isEmpty()
        .withMessage("the blood_group field is required")
        .run(request_data);
    await body("date_of_birth")
        .not()
        .isEmpty()
        .withMessage("the date_of_birth field is required")
        .run(request_data);
    await body("nationality")
        .not()
        .isEmpty()
        .withMessage("the nationality field is required")
        .run(request_data);
    await body("father_name")
        .not()
        .isEmpty()
        .withMessage("the father_name field is required")
        .run(request_data);
    await body("mother_name")
        .not()
        .isEmpty()
        .withMessage("the mother_name field is required")
        .run(request_data);
    await body("banner_profile_pic")
        .not()
        .isEmpty()
        .withMessage("the banner_profile_pic field is required")
        .run(request_data);
    await body("short_bio")
        .not()
        .isEmpty()
        .withMessage("the short_bio field is required")
        .run(request_data);
    await body("full_bio")
        .not()
        .isEmpty()
        .withMessage("the full_bio field is required")
        .run(request_data);
    await body("address_pressent")
        .not()
        .isEmpty()
        .withMessage("the address_pressent field is required")
        .run(request_data);
    await body("address_permanent")
        .not()
        .isEmpty()
        .withMessage("the address_permanent field is required")
        .run(request_data);
    await body("google_map")
        .not()
        .isEmpty()
        .withMessage("the google_map field is required")
        .run(request_data);


//  console.log("body data",body("title") );
    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (data) => {
    console.log('from user role store model', data);
    let check = await data_validation({body:data});
    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }

    try {
        const new_data = await model.create(data);
        return {
            status: 'success',
            data: new_data,
            message: "data inserted successfully",
            status_code: 201,
        };
    } catch (error) {
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 409,
        }
    }
}