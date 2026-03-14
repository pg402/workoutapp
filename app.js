const exercises = [
    { name: "Cat-Cow", reps: "5 Repetitions", cue: "Move with your breath. Don't force the range of motion.", video: "1.mp4" },
    { name: "Dead Bug", reps: "20 Repetitions", cue: "Keep your lower back glued to the floor the whole time.", video: "2.mp4" },
    { name: "Glute Bridge", reps: "5 Per Side", cue: "Drive through the heel, not the toes.", video: "3.mp4" },
    { name: "Bird Dogs", reps: "20 Repetitions", cue: "Imagine a glass of water on your back—don't let it spill.", video: "4.mp4" },
    { name: "Pushup & Rotation", reps: "10 Repetitions", cue: "Follow your hand with your eyes as you reach up.", video: "5.mp4" },
    { name: "Lunges", reps: "10 Per Leg", cue: "Keep your chest up tall like a string is pulling your head.", video: "6.mp4" },
    { name: "Single Leg Deadlift", reps: "10 Per Leg", cue: "Find a spot on the floor to stare at for balance.", video: "7.mp4" }
];

let currentIndex = 0;

function nextExercise() {
    currentIndex++;

    if (currentIndex < exercises.length) {
        updateUI();
    } else {
        // Workout Finished State
        document.querySelector('.exercise-card').innerHTML = `
            <div style="padding: 50px 20px;">
                <h1>🎉 Done!</h1>
                <p>Great job, Dad. See you tomorrow!</p>
                <button class="next-btn" onclick="location.reload()">RESTART</button>
            </div>
        `;
        document.getElementById('progressBar').style.width = "100%";
        document.querySelector('footer').style.display = "none";
    }
}

function updateUI() {
    const ex = exercises[currentIndex];
    
    // Update Text
    document.getElementById('ex-name').innerText = ex.name;
    document.getElementById('ex-reps').innerText = ex.reps;
    document.getElementById('ex-cue').innerText = ex.cue;
    
    // Update Video
    const video = document.getElementById('ex-video');
    video.src = ex.video;
    video.play();

    // Update Progress Bar
    const progress = ((currentIndex + 1) / exercises.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}