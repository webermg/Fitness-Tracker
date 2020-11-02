document.getElementById("new-button").addEventListener("click", function() {
  const newWorkout = {};
  newWorkout.day = Date.now() - Date.getTimeZoneOffset;
  fetch(`/api/workouts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newWorkout)
  })
  .then(res => {
    console.log(res)
    location.href = "/view"
  })
  .catch(err => console.log(err));
})