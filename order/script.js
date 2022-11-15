let books_arr = JSON.parse(localStorage.getItem('books'));
console.log(books_arr)
for(let i=0; i<books_arr.length; i++)
console.log(Array.from(books_arr[i]));


let container = document.getElementById('container');

let child_book = document.getElementsByClassName('child');

let getInformation = async function() {
    let response = await fetch('../main/books.json')
    let book_info = await response.json();

    for(let i=0; i<books_arr.length; i++) {
        let child_div = document.createElement('div');
        let img = document.createElement('img');
        let bookInfo = document.createElement('div');
        let name = document.createElement('h3');
        let title = document.createElement('h1');
        let price = document.createElement('p');
        let button = document.createElement('button');

        // let img_src = `../main/${book_info[books_arr[i]].imageLink}`;
        // img.src = img_src;
        child_div.appendChild(img);

        let name_title = document.createTextNode(book_info[books_arr[i]].author);
        let book_title = document.createTextNode(book_info[books_arr[i]].title);
        let price_title = document.createTextNode(book_info[books_arr[i]].price);
        name.appendChild(name_title);
        name.appendChild(book_title);
        name.appendChild(price_title);

        bookInfo.appendChild(name);
        bookInfo.appendChild(title);
        bookInfo.appendChild(price);

        child_div.appendChild(bookInfo);

        child_div.appendChild(button);
        document.body.appendChild(child_div);

        console.log(i)
    };
}

getInformation();