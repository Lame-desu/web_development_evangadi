import express from "express";
const router = express.Router();

router.get("/all-questions", (req, res) => {
  res.send("all questions");
});

export default router;
