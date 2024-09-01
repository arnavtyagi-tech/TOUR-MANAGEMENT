import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

//update User
router.put("/:id", updateUser);

//delete User
router.delete("/:id", deleteUser);

//getsingle User
router.get("/:id", getSingleUser);

//getAll User
router.get("/", getAllUser);

export default router;
