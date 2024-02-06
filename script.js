const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let yesBtnFontSize = 16; // Initial font size for 'Yes' button
let yesBtnPadding = 10; // Initial padding for 'Yes' button

noBtn.addEventListener('click', function() {
    // Move 'No' button
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
    yesBtn.style.padding = yesBtnPadding + 'px 20px';
});
