const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const body = document.querySelector('body');
let hoverCounter = 0; // Initialize hover counter

let yesBtnFontSize = 16; // Initial font size for 'Yes' button
let yesBtnPadding = 10; // Initial padding for 'Yes' button

let messageIndex = 0; // To track which message to show next

const funnyMessages = [
    "Are you sure?",
    "Really sure?",
    "Really, really sure?",
    "Rim seem persistent!",
    "FINE! I give up!",
    "Maybe not hehe",
    "RIM!! think again...",
    "This button is shy!",
    "wa 3ibad lah!",
    "Are we dancing?",
    "You're persistent!",
    "Tickle, tickle, tickle!",
    "How about now?",
    "Surely you're tempted!",
    "Just try 'Yes' once!"
];

noBtn.addEventListener('mouseover', function() {
    hoverCounter++; // Increment the hover counter

    if (hoverCounter <= 20) {
        // Move 'No' button logic here

        // Existing logic to move the button
        const bodyWidth = document.documentElement.clientWidth;
        const bodyHeight = document.documentElement.clientHeight;
        const btnWidth = this.offsetWidth;
        const btnHeight = this.offsetHeight;

        const randomX = Math.floor(Math.random() * (bodyWidth - btnWidth));
        const randomY = Math.floor(Math.random() * (bodyHeight - btnHeight));

        this.style.position = 'absolute';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';

        // Increase 'Yes' button size
    yesBtnFontSize += 4; // Increase font size
    yesBtnPadding += 4; // Increase padding
    yesBtn.style.fontSize = yesBtnFontSize + 'px';
    yesBtn.style.padding = yesBtnPadding + 'px '+yesBtnPadding+ 'px ';
    // Update the message
    const messageToShow = funnyMessages[messageIndex];
    this.textContent = messageToShow;
    messageIndex = (messageIndex + 1) % funnyMessages.length;
    } else {
        // Optionally, provide some visual feedback that the button will no longer move
        this.style.cursor = 'pointer'; // Change cursor to pointer to indicate clickability
        this.style.backgroundColor = "#90EE90"; // Light green background to indicate it's now clickable
    }



});


yesBtn.addEventListener('click', function() {
    this.classList.add('pop'); // Add pop animation class
    burstConfetti();
    displayMessage();
    yesSound.play(); 
});


document.getElementById('yesBtn').addEventListener('click', function() {
    for (let i = 0; i < 20; i++) { // Create 20 balloons
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Set random starting positions and colors
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();

        // Append the balloon to the container and start the animation
        document.getElementById('balloonContainer').appendChild(balloon);

        // Apply the float animation with random durations and delays
        balloon.style.animation = `float ${2 + Math.random() * 3}s ease-in forwards`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;

        // Remove balloon after animation to clean up the DOM
        balloon.addEventListener('animationend', function() {
            balloon.remove();
        });
    }
});

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.querySelector('.question-gif').addEventListener('click', function() {
    this.classList.add('bounce');
    // Remove the 'bounce' class after the animation ends to allow it to be re-triggered
    this.addEventListener('animationend', () => {
        this.classList.remove('bounce');
    });
});

function burstConfetti() {
    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        body.appendChild(confetti);
    }
}

function displayMessage() {
    let message = document.createElement('div');
    message.className = 'message';
    message.textContent = 'YAYYY!';
    document.querySelector('.content').appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000); // Remove message after 3 seconds
}

const images = [
    'stickers/3.png',
    'stickers/4.png',
    'stickers/5.png',
    'stickers/6.png',
    'stickers/7.png',
    'stickers/8.png',
    'stickers/1.png',
    'stickers/2.png',
    
];



noBtn.addEventListener('click', function() {
    // Logic to move the button goes here (keep your existing code)

    const destinationUrl = 'nopage.html';
    window.location.href = destinationUrl;
});


document.getElementById('spawnBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgSrc = images[randomIndex];

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '150px'; // Adjust size as needed
    img.style.height = 'auto';
    img.style.position = 'absolute';
    img.classList.add('draggable');

    document.body.appendChild(img);

    // Get a random position and apply it
    const { x, y } = getRandomPosition(img);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    makeDraggable(img);
});

function makeDraggable(element) {
    let posX = 0, posY = 0, posInitX = 0, posInitY = 0;
    
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the initial mouse cursor position at startup:
        posInitX = e.clientX;
        posInitY = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position:
        posX = posInitX - e.clientX;
        posY = posInitY - e.clientY;
        posInitX = e.clientX;
        posInitY = e.clientY;
        // Set the element's new position:
        element.style.top = (element.offsetTop - posY) + "px";
        element.style.left = (element.offsetLeft - posX) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function getRandomPosition(element) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const stickerWidth = element.offsetWidth;
    const stickerHeight = element.offsetHeight;

    // Calculate max possible values to keep stickers fully within viewport
    const maxX = screenWidth - stickerWidth;
    const maxY = screenHeight - stickerHeight;

    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}
