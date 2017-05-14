"use strict"

var TWEEN = require("tween.js");
var boid = require("boids");

var boidCount = 31; 
var flock = boid({
  boids: boidCount,              // The amount of boids to use 
  speedLimit: 1.1,          // Max steps to take per tick 
  accelerationLimit: .1,   // Max acceleration per tick 
  separationDistance: 80, // Radius at which boids avoid others 
  alignmentDistance: 80, // Radius at which boids align with others 
  choesionDistance: 200,  // Radius at which boids approach others 
  separationForce: .65,  // Speed to avoid at 
  alignmentForce: 10,   // Speed to align with other boids 
  choesionForce: 1000,     // Speed to move towards other boids 
  attractors: [ [300, 500, 1000, .1, ]]
})



function randRange(min, max) {
  var modifier = "-";
  if(Math.random() < .5) {
    modifier = "+";
  }
  return modifier + 200;
}

var d = document.getElementById("d");
var s = document.getElementById("s");
var g = document.getElementById("g");
var n = document.getElementById("n");

var d_coord = {y: 0};
var d_to = "+200";
var s_coord = {y: 0};
var s_to = "+200";
var g_coord = {y: 0};
var g_to = "+200";
var n_coord = {y: 0};
var n_to = "+200";

var d_tween = new TWEEN.Tween(d_coord)
  .to({ y: d_to}, 1000)
  .onUpdate(function() {
    d.style.backgroundPositionY = d_coord.y + "px";
  })
  .onComplete(function() {
    d_to = randRange(1, 3)
    n_tween.to({y: n_to}, 1000);
  });

var s_tween = new TWEEN.Tween(s_coord)
  .to({ y: s_to}, 1000)
  .onUpdate(function() {
    s.style.backgroundPositionY = s_coord.y + "px";
  })
  .onComplete(function() {
    s_to = randRange(1, 3);
    d_tween.to({y: d_to}, 1000);
  });

var g_tween = new TWEEN.Tween(g_coord)
  .to({ y: g_to}, 1000)
  .onUpdate(function() {
    g.style.backgroundPositionY = g_coord.y + "px";
  })
  .onComplete(function() {
    g_to = randRange(1, 3);
    s_tween.to({y: s_to}, 1000);
  });

var n_tween = new TWEEN.Tween(n_coord)
  .to({ y: n_to}, 1000)
  .onUpdate(function() {
    n.style.backgroundPositionY = n_coord.y + "px";
  })
  .onComplete(function() {
    n_to = randRange(1, 3);
    g_tween.to({y: g_to}, 1000);
  });


requestAnimationFrame(animate);

function animate(time) {
	flock.tick();
	update_flock();
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

var letter_list = [] 

function loadLetters(letter, amount) {
	for(var i = 0; i < amount; i++) {
		var el = document.createElement("div");
		var childEl = document.createElement("div");
		el.className = "no-height";
		el.className = "letter";
		childEl.style.backgroundImage = "url(./images/letters/"+ letter +"/" + letter + "-" + i + ".png)";
		el.appendChild(childEl);
		document.body.appendChild(el);		
		letter_list.push(el);
	}
}
loadLetters("d", 7);
loadLetters("g", 8);
loadLetters("n", 9);
loadLetters("s", 7);

function update_flock() {
	for(var i = 0; i < flock.boids.length; i++) {
	  letter_list[i].style.left= flock.boids[i][0];
	  letter_list[i].style.top= flock.boids[i][1];
	}	
}

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
