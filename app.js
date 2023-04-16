const body = document.querySelector('.app');
const switch_mode = document.querySelector('.switch-mode i');

let mode = localStorage.getItem('darkmode');

if(mode == 'true') {
    body.classList.add('dark');
    switch_mode.className = 'fa-regular fa-sun'
}

switch_mode.addEventListener('click', () => {
    switch_mode.classList.toggle('fa-moon')
    switch_mode.classList.toggle('fa-sun')
    let mode =  body.classList.toggle('dark')
    
    localStorage.setItem('darkmode', mode)
})