const form = document.getElementById('order_form');
const username = document.getElementById('name');
const surname = document.getElementById('surname');
const date = document.getElementById('date');
const street = document.getElementById('street');
const house = document.getElementById('house');
const flat = document.getElementById('flat');
const button = document.getElementById('submitButton')

const elements = document.getElementsByTagName('input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

elements.forEach(elem => elem.addEventListener('keyup', (e) => {
    const value = e.currentTarget.value;

    button.disabled = false;

    if(value === '') {
        button.disabled = true;
    }        
}))