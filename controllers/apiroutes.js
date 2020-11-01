const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

//get all
router.get("/api/workouts", (req,res) => {
  db.Workout.find({})
    .then(data=>res.json(data))
    .catch(err => res.json(err))
});

//get one
router.get("/api/workouts/:id", (req,res) => {
  db.Workout.findOne({_id:req.params.id})
    .populate('exercises')
    .then(data=>res.json(data))
    .catch(err => res.json(err))
});

//add new
router.post("/api/workouts", (req,res) => {
  db.Workout.create(req.body)
    .then(data=>res.json(data))
    .catch(err => res.json(err))
})

router.post("/api/workout/:id/exercises", (req,res)=> {
  db.Exercise.create(req.body)
  .then(exercise=>{
    db.Workout.findOne({_id:req.params.id})
  .then(workout=>{
    workout.exercises.push(exercise);
    workout.save(resp=>res.json(resp));
  })
  .catch(err=>res.json(err))
})
  .catch(err=>res.json(err))
})

//update
router.put("/api/workouts/:id", (req,res)=>{
  
  db.Workout.findOne({_id:req.params.id})
  .then(workout=>{
    workout.exercises.push(req.body);
    workout.save(resp=>res.json(resp));
  })
  .catch(err=>res.json(err))
})

module.exports = router;