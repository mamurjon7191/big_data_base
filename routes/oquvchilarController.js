const router = require("express").Router();

const oquvchilarController = require("../controllers/oquvchilarController");

router
  .route("/")
  .get(oquvchilarController.getAll)
  .post(oquvchilarController.add);
router
  .route("/:id")
  .get(oquvchilarController.getOne)
  .patch(oquvchilarController.update)
  .delete(oquvchilarController.delete1);

module.exports = router;
