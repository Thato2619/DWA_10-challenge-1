let minus = document.querySelector('.minus');
let reset = document.querySelector('.reset');
let add = document.querySelector('.add');

//functionality the enables the user to subtract by1 when clicking the '-' button
minus.addEventListener('click' , () => {
    let counter = document.querySelector('.counter-count');
    let result = parseInt(counter.innerHTML) - 1

    counter.innerText = result;
})


//functionality the enables the user to add 1 when clicking the '+' button
add.addEventListener('click', () => {
    let counter = document.querySelector('.counter-count');
    let result = parseInt(counter.innerHTML) + 1

    counter.innerText = result;
})


//functionality the enables the user to reset to '0' when clicking the 'reset' button
reset.addEventListener('click', () => {
    let counter = document.querySelector('.counter-count');
    counter.innerHTML = 0;
})