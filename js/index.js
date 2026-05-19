// Grab all tab buttons and all form sections
const tabBtns  = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

// Show the login section by default on page load
document.querySelector('.login-section').classList.add('active');

// When a tab button is clicked:
tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

    // 1. Remove .active from every tab button
    tabBtns.forEach(function(b) { b.classList.remove('active'); });

    // 2. Add .active to the button that was clicked
    btn.classList.add('active');

    // 3. Hide every section
    sections.forEach(function(s) { s.classList.remove('active'); });

    // 4. Show the section whose class matches this button's data-target
    var targetClass = btn.getAttribute('data-target');
    document.querySelector('.' + targetClass).classList.add('active');
    });
});