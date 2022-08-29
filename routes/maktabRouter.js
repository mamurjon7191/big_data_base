const router = require("express").Router();

const maktabController = require("../controllers/maktabController");

router.route("/").get(maktabController.getAll).post(maktabController.add);
router
  .route("/:id")
  .get(maktabController.getOne)
  .patch(maktabController.update)
  .delete(maktabController.delete1);

module.exports = router;
