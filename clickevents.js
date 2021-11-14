/* jshint esversion: 6 */
var button = document.getElementById("first"); 
button.addEventListener("click", function () {   
let x = `<h3 id="Foo">Foo</h3>`;
  document.body.innerHTML += x;
  console.log(event.target.value);
})
var button = document.getElementById("second"); 
button.addEventListener("click", function () {   
let x = `<h3 id="Bar">Bar</h3>`;
  document.body.innerHTML += x;
  console.log(event.target.value);
})

var button = document.getElementById("third"); 
button.addEventListener("click", function () {   
let x = `<h2 id="FooBar">FooBar</h2>`;
document.body.innerHTML += x;
  console.log(event.target.value);
})





