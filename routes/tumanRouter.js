const router = require("express").Router();

const tumanController = require("../controllers/tumanController");

router.route("/").get(tumanController.getAll).post(tumanController.add);
router
  .route("/:id")
  .get(tumanController.getOne)
  .patch(tumanController.update)
  .delete(tumanController.delete1);

module.exports = router;
