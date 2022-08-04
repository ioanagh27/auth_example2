const Post = require('../models/post');

async function index (req, res) {
    try {
       const data = await Post.all;
       res.json({
        success: true,
        posts: data
       })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

async function create (req, res) {
    try {
       const data = await Post.create(req.body);
       res.json({
        success: true,
        post: data
       })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

async function show (req, res) {
    try {
       const data = await Post.getOneById(req.params.id);
       res.json({
        success: true,
        post: data
       })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

async function destroy (req, res) {
    try {
       const data = await Post.delete(req.params.id);
       res.json({
        success: true,
        deleted: data
       })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

module.exports = {
    index, create, show, destroy
}