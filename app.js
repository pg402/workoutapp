const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyI6ftoxxGnXLSmHjIhkVg1RYApznqve_SXVc1LT3MAN-FjiNcXowJEhkvFGT1Q9A/exec"; 

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
let userData = { name: "", email: "" };

async function handleLogin() {
    const nameInput = document.getElementById('user-name').value;
    const emailInput = document.getElementById('user-email').value;

    if (!nameInput || !emailInput) {
        alert("Please enter both name and email.");
        return;
    }

    userData.name = nameInput;
    userData.email = emailInput;

    // Log the login event
    logToSheet("login");

    // UI Transition to Welcome
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('welcome-text').innerText = `Hi, ${userData.name}!`;
    
    // Placeholder for the "X out of 7 days" logic 
    // This will display while we wait for the database to grow
    document.getElementById('stats-text').innerText = `Great to see you today. Let's get moving!`;
}

function startWorkout() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('exercise-area').style.display = 'block';
    document.getElementById('progress-wrapper').style.display = 'block';
    document.getElementById('app-footer').style.display = 'block';
    updateUI();
}

async function nextExercise() {
    currentIndex++;

    if (currentIndex < exercises.length) {
        updateUI();
    } else {
        // Log the completion event
        await logToSheet("finish");
        
        const content = document.getElementById('workout-content');
        content.innerHTML = `
            <div style="margin-top: 50px;">
                <h1 style="font-size: 3.5rem;">🎉</h1>
                <h2>Workout Complete!</h2>
                <p style="font-size: 1.2rem;">Great job, ${userData.name}. See you tomorrow!</p>
                <button class="next-btn" style="margin-top: 30px;" onclick="location.reload()">RESTART</button>
            </div>
        `;
        document.getElementById('progressBar').style.width = "100%";
        document.getElementById('app-footer').style.display = "none";
    }
}

function updateUI() {
    const ex = exercises[currentIndex];
    document.getElementById('ex-name').innerText = ex.name;
    document.getElementById('ex-reps').innerText = ex.reps;
    document.getElementById('ex-cue').innerText = ex.cue;
    
    const imgElement = document.getElementById('ex-media');
    imgElement.onerror = function() {
        this.alt = "Video currently unavailable";
    };
    imgElement.src = ex.media;

    const progressPercentage = ((currentIndex + 1) / exercises.length) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + "%";
    window.scrollTo(0, 0);
}

async function logToSheet(action) {
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: userData.name,
                email: userData.email,
                action: action,
                timestamp: new Date().toLocaleString()
            })
        });
    } catch (e) {
        console.error("Sheet logging failed", e);
    }
}
