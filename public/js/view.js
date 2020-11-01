//refs
const workoutCard = document.querySelector(".workout-card");
const nameField = document.getElementById("name-field");
const durationField = document.getElementById("duration-field");
const addForm = document.getElementById("add-form");
const cardioRadio = document.getElementById("cardio-radio");
const weightsRadio = document.getElementById("weights-radio");
const distanceField = document.getElementById("distance-field");
const weightField = document.getElementById("weight-field");
const setsField = document.getElementById("sets-field");
const repsField = document.getElementById("reps-field");
const addButton = document.getElementById("add-button")

//something to handle change event on radio
if(addForm) {
  addForm.addEventListener("change", function(e) {
    if(e.target.value === "cardio") {
      //disable weight fields
      weightField.disabled=true;
      setsField.disabled=true;
      repsField.disabled = true;
      //enable cardio fields
      distanceField.disabled=false;
    }
    else {
      //disable cardio fields
      distanceField.disabled=true;
      //enable weight fields
      weightField.disabled=false;
      setsField.disabled=false;
      repsField.disabled = false;
    }
  })

//something to handle add button click

  addButton.addEventListener("click", () => {
    const newExercise = {};
    newExercise.name = nameField.value;
    newExercise.duration = durationField.value != "" ? durationField.value : 0;
    if(cardioRadio.checked) {
      newExercise.type = "cardio"
      newExercise.distance = distanceField.value != "" ? distanceField.value : 0;
    }
    else {
      newExercise.type = "weights"
      newExercise.weight = weightField.value != "" ? weightField.value : 0;
      newExercise.sets = setsField.value != "" ? setsField.value : 0;
      newExercise.reps = repsField.value != "" ? repsField.value : 0;
    }
    //make request
    const id=workoutCard.getAttribute("data-id");
    fetch(`/api/workouts/${id}/exercises`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise)
    })
    .then(res => {
      console.log(res);
      location.reload();
    })
    .catch(err => console.log(err));
  })
}