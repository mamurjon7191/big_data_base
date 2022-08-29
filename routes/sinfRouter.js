const router = require("express").Router();

const sinfController = require("../controllers/sinfController");

router.route("/").get(sinfController.getAll).post(sinfController.add);
router
  .route("/:id")
  .get(sinfController.getOne)
  .patch(sinfController.update)
  .delete(sinfController.delete1);

module.exports = router;
