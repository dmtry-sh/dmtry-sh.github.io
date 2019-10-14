

// =============================== Main slider ===============================
var next_arrow = document.querySelector('.main_title__slider > .right_arrow');
var prev_arrow = document.querySelector('.main_title__slider > .left_arrow');
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

// =============================== Tabs Slider ===============================

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



// =============================== Hide prev benefits item ===============================

var hover = document.querySelectorAll('.hover');
var hidden = document.querySelectorAll('.hidden');

function hide(hover, hidden) {
  hover.onmouseover = (() => hidden.style.visibility = 'hidden');
  hover.onmouseout = (() => hidden.style.visibility = 'visible');
};

for (i = 0; i < hover.length; i++){
  hide(hover[i], hidden[i]);
};
//================================== Product color__list__item =======================

var color_list_items = document.querySelectorAll('.product__color > .color__list > .color__list__item');
for (let item of color_list_items){
  item.onclick = function () {
    item.classList.add('color__list__item--active');
    for (let other_item of color_list_items) {
      if (other_item.classList.contains('color__list__item--active')&&
      other_item.className != item.className) {
        other_item.classList.remove('color__list__item--active');
      }
    }
  }
}

//================================== product__list__item  active =======================

var main_product_photo = document.querySelector('.product__photo > .photo');
var product_photo_items = document.querySelectorAll('.product__list > .product__list__item');
for (let item of product_photo_items) {
  item.onclick = function() {
    item.classList.add('product__list__item--active');
    main_product_photo.src = item.querySelector('img').src;
    for (let other_item of product_photo_items) {
      if (other_item.querySelector('img').src != item.querySelector('img').src) {
        other_item.classList.remove('product__list__item--active');
      }
    }
  }
}




// =============================== Open/Close modal  ===============================

var modal_bg = document.querySelector('.modal_background');
var modal_request_call = document.querySelector('#openRequestCall');
var modal_add_product = document.querySelector('#openAddProduct');
var order_consultation = document.querySelector('#openOrderConsultation');

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#openRequestCall > .modal_header > .close');

var btn_open_add_product = document.querySelector('.add.button');
var btn_close_add_product = document.querySelector('#openAddProduct > .modal_header > .close');

function open(modal) {
  modal_bg.style.opacity = '0.878';
  modal_bg.style.visibility = 'visible';

  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
  modal.style.pointerEvents = 'auto';
}

function close(modal) {
  modal_bg.style = null;
  modal.style = null;
}

btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));

btn_open_add_product.onclick = (() => open(modal_add_product));
btn_close_add_product.onclick = (() => close(modal_add_product));
