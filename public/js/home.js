document.getElementById("new-button").addEventListener("click", function() {
  const newWorkout = {};
  day = new Date()
  day-= day.getTimezoneOffset()*60*1000;
  newWorkout.day = day;
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