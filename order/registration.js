const container = document.getElementById('container');
const form = document.getElementById('order_form');
const date = document.getElementById('date');
const flat = document.getElementById('flat');
const street = document.getElementById('street');
const house = document.getElementById('house');
const button = document.getElementById('submitButton');

const elements = form.getElementsByTagName('input');


//checking all inputs
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('keyup', (e) => {
        const value = e.currentTarget.value;

    if(value === '') {
        button.disabled = true;
    }
    });
}


//checking flat number with regular expressions
flat.addEventListener('keyup', (e) => {
    const value = e.currentTarget.value;
    const check = /\d([0-9 | -?])*/;
    const check2 = /[a-zA-Z]/;


    if(check.test(value) && !check2.test(value)) {
        button.disabled = false;
        button.style.opacity = 1;
        button.addEventListener('mouseover', () => {
            button.style.background = 'linear-gradient(35deg, #FFCCCC, #CCFFFF)';
            button.style.cursor = 'pointer'
        })
    } else {
        button.disabled = true;
        button.style.opacity = 0.5;
    }
})


//adding today to date input
const newDate = new Date();
const today = newDate.getDate();
const month = newDate.getMonth()+1;
date.setAttribute('min', `2022-${month}-${today}`);



//when Complete button clicks

button.addEventListener('click', () => {
    const summary = document.createElement('div');
    const p = document.createElement('p');
    const close = document.createElement('button')

    summary.setAttribute('class', 'summary');
    close.innerText = 'close'

    p.innerHTML += `
        <h1>Congratulations</h1>
        The order was created. <br>
        Delivery address is ${street.value} <br>
        Delivery date is ${date.value} street<br>
        House ${house.value} <br>
        Flat ${flat.value}
    `;

    summary.appendChild(p);
    summary.appendChild(close)
    container.appendChild(summary);

    close.addEventListener('click', () => {
        summary.style.display = 'none'
    })
})