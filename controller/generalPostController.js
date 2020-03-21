// validates form
const validator = require('validator'); 
// async 
const async = require('async'); 
// generalPostModel
const GeneralPost = require('../model/general-post-model')

module.exports.list = async (req, res) => {
    try {
        const response = await GeneralPost.find(); 
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }

}

module.exports.create = async (req, res) => {
    try {
        const post = new GeneralPost(req.body); 
        const response = await post.save(); 
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }

}