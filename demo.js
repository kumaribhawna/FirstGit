// console.log("git demo"); 4

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = "Goodbye"
// // headerTitle.innerHTML = "<h3>Hello</h3>"
//  headerTitle.style.borderBottom = "solid 3px #000";

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= "hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

//get element by tag name
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= "hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }


// query selector
// var header =  document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type= "submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color="red"

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden'

//Queryselector All

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent="Hello"

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for(var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor="green";
    even[i].style.backgroundColor =  "#ccc";
}