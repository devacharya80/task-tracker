const router = require("express").Router();

const authMiddleware = require("../middlewares/authMiddleware.js");

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
} = require("../controllers/taskController");

router.get("/", authMiddleware, getTasks);

router.post("/", authMiddleware, createTask);

router.put("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, deleteTask);

router.patch("/:id/toggle", authMiddleware, toggleTask);

module.exports = router;