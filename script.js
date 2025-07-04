function showNav() {
    document.querySelector('header ul').classList.add('active');
    document.getElementById('hamburger-icon').classList.add('active');
    document.getElementById('close-icon').classList.add('active');
}
function hideNav() {
    document.querySelector('header ul').classList.remove('active');
    document.getElementById('hamburger-icon').classList.remove('active');
    document.getElementById('close-icon').classList.remove('active');
}

// for the animation 
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});