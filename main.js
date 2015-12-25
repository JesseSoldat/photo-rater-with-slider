
var images = document.getElementById('imgArray');
var rating = document.getElementById('rating');
var btn = document.getElementById('btn');
var range = document.getElementById('range');
var array = ['cat','dog','pig'];
var i = 0;
images.innerHTML = 'cat';

function next(){
  i++;
  images.innerHTML = array[i];
  
    if(i >= array.length) {
      i = 0;
      images.innerHTML = "You have rated all of the images. Click to start over."
      i = -1;
    }
}


btn.addEventListener('click', submit);

var sliderChange = function (value) {

  rating.innerHTML = value;
}
var submit = function() {
 console.log(range.value);
 next();
}