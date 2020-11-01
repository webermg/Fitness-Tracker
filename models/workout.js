const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
      }
    ]
});

WorkoutSchema.virtual('totalDuration').get(function() {
    let duration = 0;

    for (let i = 0; i < this.exercises.length; i++) {
        duration += this.exercises[i].duration;
    };

    return duration;
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;