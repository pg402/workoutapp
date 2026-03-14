const exercises = [
    { 
        name: "Cat-Cow", 
        reps: "5 Repetitions", 
        cue: "Move with your breath. Don't force the range of motion.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/4450596152335462724_0" 
    },
    { 
        name: "Dead Bug", 
        reps: "20 Repetitions", 
        cue: "Keep your lower back glued to the floor the whole time.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/16768376110810451344_0" 
    },
    { 
        name: "Glute Bridge", 
        reps: "5 Per Side", 
        cue: "Drive through the heel, not the toes.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/10997890033828381764_3" 
    },
    { 
        name: "Bird Dogs", 
        reps: "20 Repetitions", 
        cue: "Imagine a glass of water on your back—don't let it spill.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/2064943301805840962_0" 
    },
    { 
        name: "Pushup & Rotation", 
        reps: "10 Repetitions", 
        cue: "Follow your hand with your eyes as you reach up.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/17284928160499585916_0" 
    },
    { 
        name: "Lunges", 
        reps: "10 Per Leg", 
        cue: "Keep your chest up tall like a string is pulling your head.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/18245498112428628296_3" 
    },
    { 
        name: "Single Leg Deadlift", 
        reps: "10 Per Leg", 
        cue: "Find a spot on the floor to stare at for balance.", 
        media: "http://googleusercontent.com/image_collection/image_retrieval/14664438572314380819_1" 
    }
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
                <h1 style="font-size: 3rem;">🎉 Done!</h1>
                <p style="font-size: 1.5rem;">Great job, Dad. See you tomorrow!</p>
                <button class="next-btn" style="margin-top: 20px;" onclick="location.reload()">RESTART</button>
            </div>
        `;
        document.getElementById('progressBar').style.width = "100%";
        document.querySelector('footer').style.display = "none";
    }
}

function updateUI() {
    const ex = exercises[currentIndex];
    
    // Update Text Elements
    document.getElementById('ex-name').innerText = ex.name;
    document.getElementById('ex-reps').innerText = ex.reps;
    document.getElementById('ex-cue').innerText = ex.cue;
    
    // Update Media (Image/GIF)
    const mediaElement = document.getElementById('ex-media');
    mediaElement.src = ex.media;

    // Update Progress Bar
    const progress = ((currentIndex + 1) / exercises.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // Scroll back to top (useful for iPad)
    window.scrollTo(0, 0);
}
