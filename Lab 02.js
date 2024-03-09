const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const darkenBtn = document.querySelector('.dark');
const negativeBtn = document.querySelector('.negative');
const overlay = document.querySelector('.overlay');

let isDarkened = false;
let isNegative = false;
let originalFilter = null;

function thumbnailLoop(){
    for (let i = 0; i < 5; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', "./img/pic" + (i + 1) + ".jpg");
        newImage.setAttribute('alt', "./img/pic" + (i + 1) + ".jpg");
        thumbBar.appendChild(newImage);
    }
}
thumbnailLoop();

thumbBar.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == "IMG"){
        displayedImage.src = e.target.src;
        resetFilters();
    }
});

darkenBtn.addEventListener('click', () => {
    isDarkened = !isDarkened; // Alterna entre true e false
    if (isDarkened) {
        darkenBtn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        darkenBtn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    resetFilters();
});

negativeBtn.addEventListener('click', () => {
    isNegative = !isNegative;
    if (!isDarkened) {
        if (isNegative) {
            originalFilter = displayedImage.style.filter;
            displayedImage.style.filter = 'invert(100%)';
        } else {
            displayedImage.style.filter = originalFilter;
        }
    }
    resetFilters();
});

function resetFilters() {
    if (isDarkened) {
        darkenBtn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        darkenBtn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    if (isNegative) {
        displayedImage.style.filter = 'invert(100%)';
    } else {
        if (originalFilter !== null) {
            displayedImage.style.filter = originalFilter;
        } else {
            displayedImage.style.filter = '';
        }
    }
}
