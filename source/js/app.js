"use strict"

var TWEEN = require("tween.js");
var Siema = require("siema");
var slideImages = document.querySelectorAll(".siema > img");
const mySiema = new Siema({
	perPage: {
		768: 1,
		769: 2,
		1200: 3
	},
  loop: true
});

// slideshow
var aleft = document.querySelector("#arrow-right");
var aright = document.querySelector("#arrow-left");
var slidePause = 3000;
var advance = true;
var wait = 0;

aright.addEventListener("click", function() {
  mySiema.prev();
  window.delta = 0;
  wait = 15;
});
aleft.addEventListener("click", function() {
  mySiema.next();
  window.delta = 0;
  wait = 15;
});

function advanceSlideShow() {
  setTimeout(function() {
    slideNext();
  }, slidePause);
}

function slideNext() {
  if ((window.delta / 100 / 60 / 60)> wait) {
    mySiema.next();
  }
  advanceSlideShow();
}

advanceSlideShow();



var d = document.getElementById("d");
var s = document.getElementById("s");
var g = document.getElementById("g");
var n = document.getElementById("n");

var d_coord = {y: 0};
var d_to = "-100";
var s_coord = {y: 0};
var s_to = "-100";
var g_coord = {y: 0};
var g_to = "-100";
var n_coord = {y: 0};
var n_to = "-100";

var d_tween = new TWEEN.Tween(d_coord)
  .to({ y: d_to}, 1000)
  .onUpdate(function() {
    d.style.transform = "translateY(" + d_coord.y + "%)";
  })
  .onComplete(function() {
    d_to = randRange(0, d.children.length, d_coord.y)
    n_tween.to({y: n_to}, 1000);
  });

var s_tween = new TWEEN.Tween(s_coord)
  .to({ y: s_to}, 1000)
  .onUpdate(function() {
    s.style.transform = "translateY(" + s_coord.y + "%)";
  })
  .onComplete(function() {
    s_to = randRange(0, s.children.length , s_coord.y);
    d_tween.to({y: d_to}, 1000);
  });

var g_tween = new TWEEN.Tween(g_coord)
  .to({ y: g_to}, 1000)
  .onUpdate(function() {
    g.style.transform = "translateY(" + g_coord.y + "%)";
  })
  .onComplete(function() {
    g_to = randRange(0, g.children.length, g_coord.y);
    s_tween.to({y: s_to}, 1000);
  });

var n_tween = new TWEEN.Tween(n_coord)
  .to({ y: n_to}, 1000)
  .onUpdate(function() {
    n.style.transform = "translateY(" + n_coord.y + "%)";
  })
  .onComplete(function() {
    n_to = randRange(0,  n.children.length, n_coord.y);
    g_tween.to({y: g_to}, 1000);
  });

function randRange(min, max, curr_pos) {
  var modifier = "-";
  if(Math.random() < .5) {
    modifier = "+";
  }
  if(curr_pos+100 > 0) {
    modifier = "-";
  }
  if(curr_pos-100 <= -max*100) {
    modifier = "+";
  }
  return modifier + 100;
}


requestAnimationFrame(animate);

window.delta = 0;
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
  window.delta += time;
}

var letter_list = [] 

function loadLetters(letter, amount, el) {
	for(var i = 0; i < amount; i++) {
		//var el = document.createElement("div");
		var newNode = document.createElement("div");
		newNode.style.backgroundImage = "url(./images/letters/"+ letter +"/" + letter + "-" + i + ".png)";
    newNode.className = "letter";
		el.insertBefore(newNode , null);
		letter_list.push(el);
	}
}

loadLetters("d", 9, d);
loadLetters("s", 11, s);
loadLetters("g", 9, g);
loadLetters("n", 12, n);
d_tween.easing(TWEEN.Easing.Quadratic.In);
s_tween.easing(TWEEN.Easing.Quadratic.In);
g_tween.easing(TWEEN.Easing.Quadratic.In);
n_tween.easing(TWEEN.Easing.Quadratic.In);

d_tween.delay(300);
s_tween.delay(300);
g_tween.delay(300);
n_tween.delay(300);

d_tween.chain(s_tween);
s_tween.chain(g_tween);
g_tween.chain(n_tween);
n_tween.chain(d_tween);

d_tween.start();

var map = document.querySelector("#map");
var nav = document.querySelector("nav");
addEventListener("scroll", function() {
  var mapTop = map.getBoundingClientRect().top; 
  var mapBottom = map.getBoundingClientRect().bottom; 
  var navTop = nav.getBoundingClientRect().top;
  var navBottom = nav.getBoundingClientRect().bottom;

  if(mapTop < navBottom & mapBottom > navTop ) {
    nav.id = "white-text"; 
  } else {
    nav.id ="";
  }
});
