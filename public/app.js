const section = document.querySelector('section')
const overlay = document.querySelector('.overlay')
const showBtn = document.querySelector('.show-modal')
const closeBtn = document.querySelector('.close-btn');

showBtn.addEventListener('click', () =>{
    section.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    section.classList.remove('active');
});

overlay.addEventListener('click', () =>{
    section.classList.remove('active');
});

