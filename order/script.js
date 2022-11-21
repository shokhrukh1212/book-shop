let books_arr = JSON.parse(localStorage.getItem('books'));
console.log(books_arr)

for(let i=0; i<books_arr.length; i++)
console.log(books_arr[i]);


let container = document.getElementById('container');
let total = document.getElementById('total');
let sum = 0;

document.body.appendChild(container);


let getInformation = async function() {
    let response = await fetch('../main/books.json')
    let book_info = await response.json();


    let order_button = document.createElement('button');
        order_button.setAttribute('class', 'order_button');

    for(let i=0; i<books_arr.length; i++) {
        let child_div = document.createElement('div');
        child_div.setAttribute('class', 'child_div');
        let img = document.createElement('img');
        let bookInfo = document.createElement('div');
        bookInfo.setAttribute('class', 'book_info')
        let name = document.createElement('h3');
        let title = document.createElement('h1');
        let price = document.createElement('p');
        let button = document.createElement('button');

        button.innerHTML = 'x';
        order_button.innerHTML = 'Confirm order';

        let img_src = `../main/${book_info[books_arr[i]].imageLink}`;
        img.src = img_src;
        child_div.appendChild(img);

        let name_title = document.createTextNode(book_info[books_arr[i]].author);
        let book_title = document.createTextNode(book_info[books_arr[i]].title);
        let price_title = document.createTextNode(`$${book_info[books_arr[i]].price}`);
        
        name.appendChild(name_title);
        title.appendChild(book_title);
        price.appendChild(price_title);

        bookInfo.appendChild(name);
        bookInfo.appendChild(title);
        bookInfo.appendChild(price);

        child_div.appendChild(bookInfo);

        child_div.appendChild(button);
        
        container.appendChild(child_div);
        container.appendChild(order_button);

        sum += book_info[books_arr[i]].price;


        function totalPrice() {
            total.innerHTML = 'total: ' + `$${sum}`;
        }


        button.addEventListener('click', function() {
            container.removeChild(child_div);
            sum -= book_info[books_arr[i]].price;
            totalPrice();

            if(sum == 0) {
                order_button.style.display = 'none'
            }
        })

        totalPrice();


        order_button.addEventListener('click', () => {
            window.open('registration.html')
        })
        
    };
}

getInformation();