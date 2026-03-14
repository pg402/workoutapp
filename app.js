const exercises = [
    { name: "Cat-Cow", reps: "5 Reps", cue: "Move with your breath.", media: "1.gif" },
    { name: "Dead Bug", reps: "20 Reps", cue: "Lower back glued to floor.", media: "2.gif" },
    { name: "Glute Bridge", reps: "5 Per Side", cue: "Drive through the heel.", media: "3.gif" },
    { name: "Bird Dogs", reps: "20 Reps", cue: "Don't let the water spill.", media: "4.gif" },
    { name: "Pushup & Rotation", reps: "10 Reps", cue: "Follow your hand with your eyes.", media: "5.gif" },
    { name: "Lunges", reps: "10 Per Leg", cue: "Keep your chest up tall.", media: "6.gif" },
    { name: "Single Leg Deadlift", reps: "10 Per Leg", cue: "Stare at a spot on the floor.", media: "7.gif" }
];

let currentIndex = 0;

function nextExercise() {
    currentIndex++;
    if (currentIndex < exercises.length) {
        updateUI();
    } else {
        document.querySelector('.exercise-card').innerHTML = "<h1>Workout Complete!</h1><p>Great job, Dad.</p>";
        document.getElementById('progressBar').style.width = "100%";
    }
}

function updateUI() {
    const ex = exercises[currentIndex];
    document.getElementById('ex-name').innerText = ex.name;
    document.getElementById('ex-reps').innerText = ex.reps;
    document.getElementById('ex-cue').innerText = ex.cue;
    document.getElementById('ex-media').src = ex.media; // Correctly points to local file
    document.getElementById('progressBar').style.width = ((currentIndex + 1) / exercises.length) * 100 + "%";
}
