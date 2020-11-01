const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true
  },

  name: {
      type: String,
      trim: true,
      required: true
  },

  duration: {
    type: Number,
    min: 1
  },
  distance: {
    type: Number,
    // validate: {
    //   validator: function(v) {
    //     if(this.type==="cardio") return v > 0;
    //     return true;
    //   }
    // }
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;



