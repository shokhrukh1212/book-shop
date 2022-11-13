let header = document.createElement('header');
let header_icon = document.createElement('div');
let book_icon = document.createElement('i');
let book_icon_title = document.createElement('h1');

document.body.appendChild(header);

/* header icon section */
header_icon.setAttribute('class', 'header-icon');
let title = document.createTextNode('Bookshop');
book_icon_title.appendChild(title);
book_icon.setAttribute('class', "fas fa-book");
header_icon.appendChild(book_icon);
header_icon.appendChild(book_icon_title);
header.appendChild(header_icon);

/*ul element*/
let ul = document.createElement('ul');
ul.setAttribute('id', 'navbar_list');

let navbar_arr = ['About', 'Books', 'Order', 'Useful'];

for(let e=0; e<navbar_arr.length; e++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.innerHTML = navbar_arr[e];
    a.setAttribute('href', '#');
    li.appendChild(a);
    ul.appendChild(li);
}

header.appendChild(ul);





/* starting main page */

let container = document.createElement('div');
let content = document.createElement('div');

/* left and right icons */
let left_icon = document.createElement('div');
let right_icon = document.createElement('div');
let left = document.createElement('i');
let right = document.createElement('i');
left.setAttribute('class', 'fas fa-solid fa-chevrons-left');
right.setAttribute('class', 'fa-solid fa-chevrons-right');
left_icon.setAttribute('class', 'left_icon');
right_icon.setAttribute('class', 'right_icon');
left_icon.appendChild(left);
right_icon.appendChild(right);


container.setAttribute('class', 'container');
content.setAttribute('class', 'content');


document.body.appendChild(container);
container.appendChild(left_icon);
container.appendChild(content);
container.appendChild(right_icon);




let sizeOfBook;
let index = 0;
let getInfo = async function() {
    let response = await fetch('books.json') //path to the file with json data
    let book_info = await response.json();
    sizeOfBook = book_info.length;

    for(let i=0; i<book_info.length; i++) {

        let content_container = document.createElement('div');
        let images = document.createElement('div');
        let book_information = document.createElement('div');

        content_container.setAttribute('class', 'content-container')
        images.setAttribute('class', 'images');
        book_information.setAttribute('class', 'book_information');

        let image = document.createElement('img');
        image.setAttribute('src', book_info[i].imageLink);
        images.appendChild(image);

        let author = document.createElement('h1');
        let book_name = document.createElement('h3');
        let price = document.createElement('p');
        let button_more = document.createElement('button');
        let button_bag = document.createElement('button');
        author.textContent = book_info[i].author;
        book_name.textContent = book_info[i].title;
        price.textContent = `$${book_info[i].price}`;
        button_more.innerHTML = 'show more';
        button_bag.innerHTML = 'add bag';

        book_information.appendChild(author);
        book_information.appendChild(book_name);
        book_information.appendChild(price);
        book_information.appendChild(button_bag);
        book_information.appendChild(button_more);

        content_container.appendChild(images);
        content_container.appendChild(book_information);

        content.appendChild(content_container);

        for(let j=0; j<book_info.length; j++) {
            content_container.classList.remove('active');
        }

        if(index == i) content_container.classList.add('active');


        console.log(index)
    }
}

getInfo();

/* ------------------------------------------------------------ */
let total_length = sizeOfBook;
left_icon.addEventListener('click', function() {
    next('left');
})


right_icon.addEventListener('click', function() {
    next('right');
})

function next(direction) {
    if(direction=='right') {
        index++;
        if(index == total_length) {
            index = 0;
        }
    }
    getInfo();
}