var rating = document.getElementById('rating');
var btn = document.getElementById('btn');
var range = document.getElementById('range');

btn.addEventListener('click', submit);

var sliderChange = function (value) {

  rating.innerHTML = value;
}
var submit = function() {
  
 console.log(range.value);
}