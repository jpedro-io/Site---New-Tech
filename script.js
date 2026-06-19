const track = document.getElementById('track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

btnNext.addEventListener('click', () => {
    track.scrollBy({ left: 320, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -320, behavior: 'smooth' });
});