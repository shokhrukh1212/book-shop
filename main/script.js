let container = document.createElement('div');
container.setAttribute('class', 'header');
document.body.appendChild(container);

let h1 = document.createElement('h1');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let button = document.createElement('button');

let h1_text = document.createTextNode('Welcome to our book shop');
let h3_text = document.createTextNode('We provide you with different types of books, what you should do is just read them and use in your life');
let p_text = document.createTextNode('Almost all successful people in the world have something in common which is reading books, read books here and share them with your friends. ');
let p2_text = document.createTextNode('There are many benefits of reading books, including intellectual and psychological capacity increase. Every single book you read offers you endless opportunities of exploring and learning new ideas. When you read, you gain information and knowledge and you have a plethora of other benefits as well.')
let p3_text = document.createTextNode('In ancient times, people still kept on reading novels. Today, some devices allow readers to consume stories on their handheld screens rather than from actual books, making reading convenient and easy. Reading books has been scientifically proven to provide humans with various benefits, including enjoyment, information, and pleasure. ')
let p4_text = document.createTextNode('Reading books can improve your mental and physical health. The benefits of reading books can start in childhood and last forever. ')
let p5_text = document.createTextNode('Because we know you are interested in finding out as much as possible about how your hobby can improve your life, you will find below detailed explanations about each separate benefit, split into relevant categories. ')
let button_text = document.createTextNode('Visit our bookshop');

h1.appendChild(h1_text);
h3.appendChild(h3_text);
p.appendChild(p_text);
p.appendChild(p2_text);
p.appendChild(p3_text);
p.appendChild(p4_text);
p.appendChild(p5_text);
button.appendChild(button_text);

container.appendChild(h1)
container.appendChild(h3)
container.appendChild(p)
container.appendChild(button);
button.addEventListener('click', function() {
    window.open('bookshop.html', "_blank")
})