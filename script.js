// UTG Frontend - Implementation #1
// Basic interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');
    let clickCount = 0;

    if (demoButton && demoOutput) {
        demoButton.addEventListener('click', function() {
            clickCount++;
            
            const messages = [
                'Hello! This is the first interaction.',
                'Great! You clicked the button again.',
                'Awesome! The frontend is working perfectly.',
                'Keep clicking! This is implementation #1.',
                'UTG Frontend is now functional!'
            ];
            
            const messageIndex = (clickCount - 1) % messages.length;
            const currentTime = new Date().toLocaleTimeString();
            
            demoOutput.innerHTML = `
                <strong>Click #${clickCount}</strong><br>
                ${messages[messageIndex]}<br>
                <small>Time: ${currentTime}</small>
            `;
            
            demoOutput.classList.add('active');
            
            // Add a subtle animation
            demoButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                demoButton.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Initialize with a welcome message
    if (demoOutput) {
        demoOutput.innerHTML = '<em>Click the button above to start interacting!</em>';
    }
});