const router = require("express").Router();
const db = require("../models")


router.get("/",(req,res) => {
  db.Workout.find({}).populate("exercises").lean().then(workouts => {
    res.render("home",{workouts: workouts});
  })
})

router.get("/view",(req,res) => {
  db.Workout.find({})
  .sort({day:-1})
  .limit(1)
  .populate("exercises")
  .lean({ virtuals: true })
  .then(workout => {
    res.render("view",{workouts: workout});
  })
})

module.exports = router;