let numbers = sessionStorage.getItem('numbers');
console.log(numbers)
let books = sessionStorage.getItem('books');
console.log(books)
let container = document.getElementById('container');
for(let i=0; i<numbers; i++) {
    container.innerHTML += `
    <div class="child">
    <img src="" alt="">
    <div class='book_info'>
        <h3>Me</h3>
        <h1>The epic of era</h1>
        <p>price: </p>
    </div>
    <button>X</button>
</div>
    `
};

let child_book = document.getElementsByClassName('child');

