/* Version: March 14, 2026 | 1:55 PM | Update: Added image error handling and verified relative paths for Lunges (6.gif) */
const exercises = [
    { name: "Cat-Cow", reps: "5 Repetitions", cue: "Move with your breath. Don't force the range of motion.", media: "./1.gif" },
    { name: "Dead Bug", reps: "20 Repetitions", cue: "Keep your lower back glued to the floor.", media: "./2.gif" },
    { name: "Glute Bridge", reps: "5 Per Side", cue: "Drive through the heel, not the toes.", media: "./3.gif" },
    { name: "Bird Dogs", reps: "20 Repetitions", cue: "Keep your back flat—don't let the water spill.", media: "./4.gif" },
    { name: "Pushup & Rotation", reps: "10 Repetitions", cue: "Follow your hand with your eyes as you reach up.", media: "./5.gif" },
    { name: "Lunges", reps: "10 Per Leg", cue: "Keep your chest up tall.", media: "./6.gif" },
    { name: "Single Leg Deadlift", reps: "10 Per Leg", cue: "Find a spot on the floor to stare at for balance.", media: "./7.gif" }
];

let currentIndex = 0;

function nextExercise() {
    currentIndex++;

    if (currentIndex < exercises.length) {
        updateUI();
    } else {
        const content = document.getElementById('workout-content');
        content.innerHTML = `
            <div style="margin-top: 50px;">
                <h1 style="font-size: 3.5rem;">🎉</h1>
                <h2>Workout Complete!</h2>
                <p style="font-size: 1.2rem;">Great job, Dad. See you tomorrow!</p>
                <button class="next-btn" style="margin-top: 30px;" onclick="location.reload()">RESTART</button>
            </div>
        `;
        document.getElementById('progressBar').style.width = "100%";
        document.querySelector('footer').style.display = "none";
    }
}

function updateUI() {
    const ex = exercises[currentIndex];
    
    document.getElementById('ex-name').innerText = ex.name;
    document.getElementById('ex-reps').innerText = ex.reps;
    document.getElementById('ex-cue').innerText = ex.cue;
    
    const imgElement = document.getElementById('ex-media');
    
    // Safety check: if image fails, log it and show a placeholder or keep previous
    imgElement.onerror = function() {
        console.error("Failed to load image at: " + ex.media);
        this.alt = "Video currently unavailable";
    };
    
    imgElement.src = ex.media;

    const progressPercentage = ((currentIndex + 1) / exercises.length) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + "%";
    
    window.scrollTo(0, 0);
}