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
let images = document.createElement('div');
let book_information = document.createElement('div');
let left_icon = document.createElement('div');
let right_icon = document.createElement('div');
let icon = document.createElement('i');
container.setAttribute('class', 'container');
content.setAttribute('class', 'content');
images.setAttribute('class', 'images');
book_information.setAttribute('class', 'book_information')

document.body.appendChild(container);
content.appendChild(images);
content.appendChild(book_information);
container.appendChild(content);


/* book information here starts */

let getInfo = async function() {
    let book_info;
    let response = await fetch('books.json') //path to the file with json data
    book_info = await response.json();
    for(let i=0; i<book_info.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', book_info[i].imageLink);
        images.appendChild(image);


        let author = book_info[i].author;
        let book_name = book_info[i].title;
        let price = `$${book_info[i].price}`;

        book_information.innerHTML += `
                <h1>${author}</h1>
                <h3>${book_name}</h3>
                <p>${price}</p>
                <button>show more</button>
                <button>add bag</button>
        `;

        book_information = ''
        
        // let show_more = document.createElement('button');
        // let add_bag = document.createElement('button');
        // let show_more_title = document.createTextNode('show more');
        // let add_bag_title = document.createTextNode('add bag');

        // show_more.appendChild(show_more_title);
        // add_bag.appendChild(add_bag_title);


        // /* setting info to these variables */
        // author_title = document.createTextNode(``);
        // book_name_title = document.createTextNode('book_info[i].author')
        // author.appendChild(author_title);
        // book_name.appendChild();
        // price.appendChild();



        /* adding these elements to the content page */
        // book_information.appendChild(author);
        // book_information.appendChild(book_name);
        // book_information.appendChild(price);
        // book_information.appendChild(show_more);
        // book_information.appendChild(add_bag);


        console.log(book_info[i].author)
        console.log(book_info[i].title)
        console.log(book_info[i].price)
    }
}

getInfo();