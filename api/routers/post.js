const { Router } = require('express');

const postController = require('../controllers/post');

const postRouter = Router();

postRouter.get("/", postController.index);
postRouter.post("/", postController.create);
postRouter.get("/:id", postController.show);
postRouter.delete("/:id", postController.destroy);

module.exports = postRouter;