// selectors
const mark = document.querySelector('.mark');
const unread = document.querySelectorAll('.unread');
const dot = document.querySelectorAll('.dot');
const root = document.querySelector(':root');
const body = document.querySelector('body');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const rootStyles = getComputedStyle(root);
let white = rootStyles.getPropertyValue('--white');
let veryLightGrayishBlue = rootStyles.getPropertyValue('--very-light-grayish-blue');
let marked = false;
const notifications = document.querySelector('.n-num');

// check what theme to set white var
let update = () => {
    white = rootStyles.getPropertyValue('--white');
    veryLightGrayishBlue = rootStyles.getPropertyValue('--very-light-grayish-blue');

    unread.forEach(function(unread) {
        marked? unread.style.backgroundColor = white : unread.style.backgroundColor = veryLightGrayishBlue
        
    })
}

body.addEventListener('click', update)

// mark as read
mark.addEventListener('click', markRead);

function markRead() {
    unread.forEach(function(unread) {
        unread.style.backgroundColor = white;
    })

    dot.forEach(function(dot) {
        dot.style.display = 'none';
    })

    notifications.style.display = 'none';

    marked = true;
};