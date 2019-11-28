// =============================== Menu hover ===============================

var menu_items = document.querySelectorAll('.menu__item');

for (let item of menu_items){
  if (item.lastElementChild.className == 'submenu__list'){
    item.querySelector('.submenu__list').onmouseover = (() => item.style.backgroundColor = '#1a1a55');
    item.querySelector('.submenu__list').onmouseout = (() => item.style = null);
  }
}

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

//================================== Product slider =============================

var main_container = document.querySelector('.product .product__slider');
var product_slider_items = main_container.querySelectorAll('.product__inner');
var mp_shift = 0;
var slide_width = main_container.offsetWidth;
var mp_arrow_right = document.querySelector('.p_arrow_right');
var mp_arrow_left = document.querySelector('.p_arrow_left');

mp_arrow_right.onclick = function() {
  mp_shift++;
  if (mp_shift <= product_slider_items.length-1){
    main_container.style.left = -(mp_shift * slide_width) + 'px';
    mp_arrow_left.classList.remove('invisible');
  }
  if (mp_shift == product_slider_items.length-1) {
    mp_arrow_right.classList.add('invisible');
  }
}

mp_arrow_left.onclick = function() {

  if (mp_shift > 0) {
    mp_shift--;
    main_container.style.left = -(mp_shift * slide_width)+'px';
    mp_arrow_right.classList.remove('invisible');
  }
  if (mp_shift == 0){
    mp_arrow_left.classList.add('invisible');
  }
}

var photo_width = 80;
var margin = 29;


for (let product__inner of product_slider_items){
  let main_product_photo = product__inner.querySelector('.product__photo > .photo');
  let product_photo_items = product__inner.querySelectorAll('.slider__container > .photo__slider__item');

  for (let item of product_photo_items) {
    item.onclick = function() {
      main_product_photo.src = item.querySelector('img').src;
      for (let other_item of product_photo_items) {
        other_item.classList.remove('photo__slider__item--active');
      }
      item.classList.add('photo__slider__item--active');
    }
  }

  let container = product__inner.querySelector('.photo__slider .slider__container');

  let max_shift = -(product_photo_items.length - 4) * (photo_width + margin);
  let shift = 0;

  let arrow_right = product__inner.querySelector('.photo__slider > .arrow_right');
  let arrow_left = product__inner.querySelector('.photo__slider > .arrow_left');

  arrow_right.onclick = function() {
    if (shift > max_shift){
      shift = shift - (photo_width + margin);
      container.style.left = shift + 'px';
      if (shift <= max_shift) {
        arrow_right.classList.add('invisible');
        product__inner.querySelector('.photo__slider').style.borderRight = 'none';
      } else {
        arrow_left.classList.remove('invisible');
        arrow_right.classList.remove('invisible');
        product__inner.querySelector('.photo__slider').style = null;
      }
    }
  }

  arrow_left.onclick = function() {
    if (shift < 0) {
      shift = shift + (photo_width + margin);
      container.style.left = shift + 'px';
    }
    if (shift < 0) {
      arrow_left.classList.remove('invisible');
      arrow_right.classList.remove('invisible');
      product__inner.querySelector('.photo__slider').style = null;
    } else {
      arrow_left.classList.add('invisible');
    }
  }

  let color_list_items = product__inner.querySelectorAll('.product__color > .color__list > .color__list__item');
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
}


// =============================== Partners slider  ===============================

var p_container = document.querySelector('.partners_slider > .slider__container');
var p_container_length = p_container.querySelectorAll('.partners_icon').length;

var p_arrow_right = document.querySelector('.our_partners > .container--big > .right_arrow');
var p_arrow_left = document.querySelector('.our_partners > .container--big > .left_arrow');

var p_max_shift = p_container_length - 5;
var p_shift = 0;

var p_width = 170;
var p_margin = 73;

p_arrow_right.onclick = function() {
  if (p_shift < p_max_shift) {
    p_shift++;
    p_container.style.left = - p_shift * (170 + 73) + 'px';
    p_arrow_left.classList.remove('invisible');
  }
  if (p_shift == p_max_shift) {
    p_arrow_right.classList.add('invisible');
  }
}

p_arrow_left.onclick = function() {
  if (p_shift > 0) {
    p_shift--;
    p_container.style.left = - p_shift * (170 + 73) + 'px';
    p_arrow_right.classList.remove('invisible');
  }
  if (p_shift == 0) {
    p_arrow_left.classList.add('invisible');
  }
}

// =============================== Open/Close modal  ===============================
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

var modal_bg = document.querySelector('.modal_background');
var modal_request_call = document.querySelector('#requestCall');
var modal_add_product = document.querySelector('#addProduct');
var modal_order_consultation = document.querySelector('#orderConsultation');

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#requestCall > .modal_header > .close');

var btns_open_add_product = document.querySelectorAll('.add.button');
var btn_close_add_product = document.querySelector('#addProduct > .modal_header > .close');

var btn_open_order_call_phone = document.querySelector('.contact_us > .btns > .call');
var btn_open_order_call_mail = document.querySelector('.contact_us > .btns > .message');
var btn_close_order_call = document.querySelector('#orderConsultation > .modal_header > .close');




btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));

for (let btn of btns_open_add_product) {
  btn.onclick = (() => open(modal_add_product));
}
btn_close_add_product.onclick = (() => close(modal_add_product));

var filter = modal_order_consultation.querySelector('.filter');

btn_open_order_call_mail.onclick = function () {
  modal_order_consultation.querySelector('.modal_body').style.height = '435px';
  modal_order_consultation.querySelector('.order_by_phone').classList.add('invisible');
  modal_order_consultation.querySelector('.order_by_mail').classList.remove('invisible');
  filter.querySelector('.filter__list__item:last-child').classList.add('active');
  filter.querySelector('.filter__list__item:first-child').classList.remove('active');
  open(modal_order_consultation);
};

btn_open_order_call_phone.onclick = function() {
  modal_order_consultation.querySelector('.modal_body').style = null;
  modal_order_consultation.querySelector('.order_by_phone').classList.remove('invisible');
  modal_order_consultation.querySelector('.order_by_mail').classList.add('invisible');
  filter.querySelector('.filter__list__item:last-child').classList.remove('active');
  filter.querySelector('.filter__list__item:first-child').classList.add('active');
  open(modal_order_consultation);
}

filter.querySelector('.filter__list__item:first-child').onclick = function() {
  modal_order_consultation.querySelector('.modal_body').style = null;
  modal_order_consultation.querySelector('.order_by_phone').classList.remove('invisible');
  modal_order_consultation.querySelector('.order_by_mail').classList.add('invisible');
  filter.querySelector('.filter__list__item:last-child').classList.remove('active');
  filter.querySelector('.filter__list__item:first-child').classList.add('active');
}

filter.querySelector('.filter__list__item:last-child').onclick = function() {
    modal_order_consultation.querySelector('.modal_body').style.height = '435px';
  modal_order_consultation.querySelector('.order_by_phone').classList.add('invisible');
  modal_order_consultation.querySelector('.order_by_mail').classList.remove('invisible');
  filter.querySelector('.filter__list__item:last-child').classList.add('active');
  filter.querySelector('.filter__list__item:first-child').classList.remove('active');
}

btn_close_order_call.onclick = (() => close(modal_order_consultation));
