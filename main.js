
var images = document.getElementById('imgArray');
var count = document.getElementById('count');
var rating = document.getElementById('rating');
var btn = document.getElementById('btn');
var range = document.getElementById('range');
var anchor = document.getElementById('anchor');

var array = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg"];

var countNum = ['5','4','3','2','1'];
var i = 0;
var c = 0;

  images.setAttribute("src", "img/01.jpg");



function next(){
  i++;

  images.setAttribute("src", array[i]);
  
    if(i >= array.length) {
      i = 0;
      images.setAttribute("src", "img/play.png");
      i = -1;
      console.log(range.value);
      btn.innerHTML = "Try Again";
      btn.setAttribute("disabled", true);

      setInterval(function(){
        count.innerHTML = countNum[c];
        c++;
      }, 1000);

      setTimeout(function(){ 
        location.reload(); 

      }, 5000); 
      return
    }  
}

btn.addEventListener('click', submit);

var sliderChange = function (value) {

  rating.innerHTML = value;

}

var array2 = ['Yellowstone','France','Dolphins','Afghanistan','Animal Minds','Inca','Solar System'];
var a = 0;

var submit = function() {
 
    // var imgName = images.src.slice(-6, -4);
 
    var element = document.createElement('h3');
    element.setAttribute("style", "margin-top: 20px;");
    var text = document.createTextNode(array2[a]+": "+ range.value);
    element.appendChild(text);
    anchor.appendChild(element);
    a++;

 next();
}