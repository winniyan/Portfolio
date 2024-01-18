const logoLink = document.querySelector('.logo a');

logoLink.addEventListener('mouseover', function() {
    this.textContent = 'yan_w';
});

logoLink.addEventListener('mouseout', function() {
    this.textContent = 'yan';
});