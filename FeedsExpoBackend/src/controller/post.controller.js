const path = require("path");
const fs = require("fs");
const Validator = require("validatorjs");
const post = require("../model/post.model");
const RESPONSE = require("../helper/response");

//image_upload_function
function uploadFile(fileObjArray) {
  let image = null;
  if (Array.isArray(fileObjArray)) {
    // Generate a unique filename
    image = `${Date.now()}` + path.extname(fileObjArray[0].originalname);
    let uploadPath = path.join(image, "../public/image/", image);
    var outStream = fs.createWriteStream(uploadPath);
    outStream.write(fileObjArray[0].buffer);
    outStream.end();
  }

  return image;
}

//create_post
const ctreate_post = async (req, res) => {
  const validation = new Validator(req.body, {
    title: "required|string",
    description: "required|string",
  });
  if (validation.fails()) {
    const errorMessage = Object.keys(validation.errors.all())[0];
    return RESPONSE.error(res, validation.errors.first(errorMessage));
  }
  try {
    const file = req.files;
    if (!file.length) {
      return RESPONSE.error(res, 2003);
    }
    const profileImageName = uploadFile(file);
    const { title, description } = req.body;

    // Create user
    const post_data = await post.create({
      image: profileImageName,
      title,
      description,
    });
    await post_data.save();

    return RESPONSE.success(res, 2001, post_data);
  } catch (error) {
    console.error(error);
    return RESPONSE.error(res, 9999);
  }
};

//get all post
const getAllPosts = async (req, res) => {
  try {
    const posts = await post.find().sort({ createdAt: -1 });
    return RESPONSE.success(res, 2002, posts);
  } catch (error) {
    console.error(error);
    return RESPONSE.error(res, 9999);
  }
};

module.exports = { ctreate_post, getAllPosts };
