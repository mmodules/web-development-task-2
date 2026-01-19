let timerRunning = false;
let timerStartTime = 0;
let times = [];

// this is for when spacebar is pressed
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!timerRunning) {
            // start
            timerRunning = true;
            timerStartTime = Date.now();
            updateTimer();
        } else {
            // stop
            timerRunning = false;
            const endTime = Date.now();
            const elapsedSeconds = (endTime - timerStartTime) / 1000;
            times.push(elapsedSeconds.toFixed(2));
            
            let commaText = "";
            if (times.length > 1) { // this is so that there isn't a comma before the first time
                commaText = ", ";
            }
            document.getElementById('timesText').textContent += commaText + elapsedSeconds.toFixed(2); // display times separated by commas
        }
    }
});

function updateTimer() {
    if (timerRunning) {
        const currentTime = Date.now(); // get current time
        const elapsedSeconds = (currentTime - timerStartTime) / 1000; // get number of seconds that have passed
        document.getElementById('timerText').textContent = elapsedSeconds.toFixed(2); // update display
        
        requestAnimationFrame(updateTimer); // call this function again on the next frame to show the time ticking
    }
}
