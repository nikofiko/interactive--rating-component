const btns = document.querySelectorAll('.rate');
const submit = document.querySelector('.submit')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const dynamic = document.querySelector('.dynamic-number')

let lastChoice;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        lastChoice = btn.innerHTML;
    })
})

submit.addEventListener('click', () => {
    first.style.display = 'none';
    second.style.display = 'block';

    dynamic.innerHTML = lastChoice;
})
