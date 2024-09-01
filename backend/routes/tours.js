import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";

const router = express.Router();

//create new tour
router.post("/", createTour);

//update tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//getsingle tour
router.get("/:id", getSingleTour);

//getAll tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//get Featured Tour
router.get("/search/getFeaturedTours", getFeaturedTour);

//get Tour Count
router.get("/search/getTourCount", getTourCount);



export default router;
