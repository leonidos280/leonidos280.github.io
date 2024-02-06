let noBtnClickCount = 0; // Track the number of times the 'No' button is clicked

document.addEventListener('mousemove', function(e) {
    if (noBtnClickCount >= 2) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const distanceX = mouseX - btnCenterX;
        const distanceY = mouseY - btnCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) { // Mouse is close to the button
            const escapeVelocity = 10; // Speed at which the button moves away
            let moveX = escapeVelocity * (distanceX / distance);
            let moveY = escapeVelocity * (distanceY / distance);

            // Ensure the button stays within the viewport
            const nextX = btnRect.left + moveX;
            const nextY = btnRect.top + moveY;
            const bodyWidth = document.documentElement.clientWidth;
            const bodyHeight = document.documentElement.clientHeight;

            if (nextX < 0 || nextX + btnRect.width > bodyWidth) {
                moveX *= -1;
            }
            if (nextY < 0 || nextY + btnRect.height > bodyHeight) {
                moveY *= -1;
            }

            noBtn.style.left = btnRect.left + moveX + 'px';
            noBtn.style.top = btnRect.top + moveY + 'px';
        }
    }
});

noBtn.addEventListener('click', function() {
    noBtnClickCount++; // Increment click count

    if (noBtnClickCount < 2) {
        // Move 'No' button on first two clicks as before
        const bodyWidth = document.documentElement.clientWidth;
        const bodyHeight = document.documentElement.clientHeight;
        const btnWidth = this.offsetWidth;
        const btnHeight = this.offsetHeight;

        const randomX = Math.floor(Math.random() * (bodyWidth - btnWidth));
        const randomY = Math.floor(Math.random() * (bodyHeight - btnHeight));

        this.style.position = 'absolute';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
    } else {
        // After two clicks, enable the sliding effect
        this.style.position = 'absolute';
    }
});
