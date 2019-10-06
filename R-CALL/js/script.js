

// =============================== Main slider ===============================
var next_arrow = document.querySelector('.right_arrow');
var prev_arrow = document.querySelector('.left_arrow');
var slides = document.querySelectorAll('.main_title__slider .slide');
var slider = [];

for (i = 0; i < slides.length; i++){
  slider[i] = slides[i].innerHTML;
  slides[i].remove();
}

var current_slide = 0;

function draw_right(n) {
  n = (n + slider.length) % slider.length;
  var slide = document.createElement('div');
  slide.innerHTML = slider[n];
  slide.className = "main_title slide item" + (n+1);
  slide.style.left = 100 + "%";
  document.querySelector('.main_title__slider').appendChild(slide);
}

function draw_center(n) {
  n = (n + slider.length) % slider.length;
  var slide = document.createElement('div');
  slide.innerHTML = slider[n];
  slide.className = "main_title slide item" + (n+1);
  slide.style.left = 0 + "%";
  document.querySelector('.main_title__slider').appendChild(slide);
}

function draw_left(n) {
  n = (n + slider.length) % slider.length;
  var slide = document.createElement('div');
  slide.innerHTML = slider[n];
  slide.className = "main_title slide item" + (n+1);
  slide.style.left = -100 + "%";
  document.querySelector('.main_title__slider').prepend(slide);
}

function initial_draw() {
  draw_left(slider.length - 1);
  draw_center(current_slide);
  draw_right(current_slide + 1);
}

function next() {
  next_arrow.onclick = null;
  clearInterval(timer);
  let visible_slides = document.querySelectorAll('.main_title__slider .slide');

  visible_slides[0].remove();
  visible_slides[1].style.left = "-100%";
  visible_slides[2].style.left = "0%";

  current_slide = (current_slide + 1 + slider.length) % slider.length;
  draw_right(current_slide + 1);

  setTimeout(function(){
    next_arrow.onclick = next;
  }, 1150);

  timer = setInterval(next, 7000);
}

function prev() {
  prev_arrow.onclick = null;
  clearInterval(timer);
  let visible_slides = document.querySelectorAll('.main_title__slider .slide');

  visible_slides[2].remove();
  visible_slides[0].style.left = '0%';
  visible_slides[1].style.left = '100%';

  current_slide = (current_slide - 1 + slider.length) % slider.length;
  draw_left(current_slide - 1);

  setTimeout(function(){
    prev_arrow.onclick = prev;
  }, 1150);

  timer = setInterval(next, 7000);
}

initial_draw();

next_arrow.onclick = next;
prev_arrow.onclick = prev;

timer = setInterval(next, 7000);

// ===============================  ===============================

let tabs_items = document.querySelectorAll('.tabs-item');
let cards = document.querySelectorAll('.card');
let benefits = [];

for (i = 0; i < tabs_items.length; i++) {
  benefits[i] = {tab: tabs_items[i], card: cards[i]};
}

for (let benefit of benefits) {
  benefit.tab.onclick = function() {
        benefit.tab.classList.add('active');
        benefit.card.classList.add('active-card');
    for (let other_benefit of benefits) {
      if (other_benefit.tab.className == benefit.tab.className &&
        other_benefit.tab != benefit.tab) {
        other_benefit.tab.classList.remove('active');
        other_benefit.card.classList.remove('active-card');
      }
    }
  }
}



// ===============================  ===============================

var hover = document.querySelectorAll('.hover');
var hidden = document.querySelectorAll('.hidden');

function hide(hover, hidden) {
  hover.onmouseover = (() => hidden.style.visibility = "hidden");
  hover.onmouseout = (() => hidden.style.visibility = "visible");
};

for (i = 0; i < hover.length; i++){
  hide(hover[i], hidden[i]);
};
