let header = document.createElement('header');
let header_icon = document.createElement('div');
let book_icon = document.createElement('i');
let book_icon_title = document.createElement('h1');
document.body.appendChild(header);

header_icon.setAttribute('class', 'header-icon');
let title = document.createTextNode('Bookshop');
book_icon_title.appendChild(title);
book_icon.setAttribute('class', "fas fa-book");
header_icon.appendChild(book_icon);
header_icon.appendChild(book_icon_title);
header.appendChild(header_icon);

let ul = document.createElement('ul');
ul.setAttribute('id', 'navbar_list');

let navbar_arr = ['About', 'Books', 'Order'];

for(let e=0; e<navbar_arr.length; e++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.innerHTML = navbar_arr[e];
    a.setAttribute('href', '#');
    li.appendChild(a);
    ul.appendChild(li);
}

header.appendChild(ul);



fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });