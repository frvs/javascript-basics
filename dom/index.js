let element1 = document.getElementById('main');
element1.innerHTML = 'Hello World!!!'

let elements1 = document.getElementsByClassName('code')
let elements2 = document.getElementsByTagName('h2');

elements1[0].innerHTML = element1.innerHTML;

element1.setAttribute('color', 'red')
element1.style.color = 'blue';

document.write('oi por .write()')
let element2 = document.querySelectorAll("h2#main");

let div = document.createElement('div');
let paragraph = document.createElement('p')
paragraph.innerHTML = 'Fui inserido por js!'

div.appendChild(paragraph)
elements1[1].appendChild(div);

console.log(document.scripts)

document.getElementsByTagName('button')[0].onclick = logTitle;

function logTitle() {
    alert(document.title)
}

function uppercase() {
    let el = document.getElementById('name')
}

function displayDate() {
    alert(Date())
}
document.getElementById("name").addEventListener("click", displayDate);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
    }
}