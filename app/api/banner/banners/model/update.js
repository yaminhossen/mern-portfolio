const { body, validationResult } = require("express-validator");
const model = require("./model");

const data_validation = async (request_data) => {
    await body("title")
        .not()
        .isEmpty()
        .withMessage("the title field is required")
        .run(request_data);
    await body("sub_title")
        .not()
        .isEmpty()
        .withMessage("the sub_title field is required")
        .run(request_data);
    await body("description")
        .not()
        .isEmpty()
        .withMessage("the description field is required")
        .run(request_data);
    await body("button_url")
        .not()
        .isEmpty()
        .withMessage("the button_url field is required")
        .run(request_data);
    await body("button_text")
        .not()
        .isEmpty()
        .withMessage("the button_text field is required")
        .run(request_data);

    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};


module.exports = async (data) => {
    console.log(data);
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
        const model_data = await model.findOne({ _id: data.id });
        model_data.title = data.title;
        model_data.sub_title = data.sub_title;
        model_data.description = data.description;
        model_data.button_url = data.button_url;
        model_data.button_text = data.button_text;
        await model_data.save();
        // console.log(data);
        return {
            status: 'success',
            data: model_data,
            message: "data updated successfully",
            status_code: 201,
        };
    } catch (error) {
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 500,
        }
    }
    // return model_data,


}