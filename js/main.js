const cube = document.querySelector('.cube'),
    charButtons = document.querySelectorAll('.btn-rounded'),
    charName = document.querySelector('.character-name');

let currentClass = '', currentChar = '';

function changeSide() {
    let cubeFace = this.dataset.face,
        showClass = `show-${cubeFace}`;

    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    // set the character name so the next function can use it
    currentChar = this.firstElementChild.getAttribute("alt");
}

function notifyEnd() {
    console.log('transition ended');
    charName.textContent = currentChar;
}

cube.addEventListener("transitionend", notifyEnd);

charButtons.forEach(button => button.addEventListener("click", changeSide));
// set initial side
charButtons[5].click();
