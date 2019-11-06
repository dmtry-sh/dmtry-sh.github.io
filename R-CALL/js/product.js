// =============================== showcase__panel__item__count  ===============================

var item = document.querySelector('.items-amount__count')

item.querySelector('.minus').onclick = function() {
  let num = Number(item.querySelector('.number').innerHTML);
  if (num > 0) {
    num--;
  }
  item.querySelector('.number').innerHTML = num;
}

item.querySelector('.plus').onclick = function() {
  let num = Number(item.querySelector('.number').innerHTML);
  num++;
  item.querySelector('.number').innerHTML = num;
}

// =============================== photo slider ===============================

var main_photo = document.querySelector('.product-description__photo > img');
var photos = document.querySelectorAll('.photo__slider__item');
for (let photo of photos) {
  photo.onclick = function() {
    for (let other_photo of photos) {
      if (other_photo.classList.contains('photo__slider__item--active')) {
        other_photo.classList.remove('photo__slider__item--active');
      }
    }
    photo.classList.add('photo__slider__item--active');
    main_photo.src = photo.querySelector('img').src;
  }
}

var container = document.querySelector('.slider__container');
var photo_width = 80;
var margin = 29;
var max_shift = -(photos.length - 4) * (photo_width + margin);

shift = 0;

var arrow_right = document.querySelector('.arrow_right');
var arrow_left = document.querySelector('.arrow_left');

arrow_right.onclick = function() {
  if (shift > max_shift){
    shift = shift - (photo_width + margin);
    container.style.left = shift + 'px';
    if (shift <= max_shift) {
      arrow_right.classList.add('invisible');
      document.querySelector('.photo__slider').style.borderRight = 'none';
    } else {
      arrow_left.classList.remove('invisible');
      arrow_right.classList.remove('invisible');
      document.querySelector('.photo__slider').style = null;
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
    document.querySelector('.photo__slider').style = null;
  } else {
    arrow_left.classList.add('invisible');
  }
}


// =============================== Onclick filter__list__item  ===============================

var filter_items = document.querySelectorAll('.filter__list__item');
var panels = document.querySelectorAll('.info-panel > .container--small > *');
var pair = [];

pair.push({'filter': filter_items[0], 'panel': panels[1]});
pair.push({'filter': filter_items[1], 'panel': panels[2]});
pair.push({'filter': filter_items[3], 'panel': panels[3]});
pair.push({'filter': filter_items[4], 'panel': panels[4]});


for (let pair_item of pair) {
  pair_item['filter'].onclick = function() {
    pair_item['filter'].classList.add('active');
    pair_item['panel'].classList.add('relative');
    pair_item['panel'].classList.add('visible');

    for (let other_pair of pair) {
      if (pair_item['filter'] != other_pair['filter']) {
        other_pair['filter'].classList.remove('active')
        other_pair['panel'].classList.remove('visible')
        other_pair['panel'].classList.remove('relative')
      }
    }
  }
}
// =============================== Color list item onclick ===============================

var color_list_items = document.querySelectorAll('.choose-color > .choose-color__panel > .color__panel__item');
for (let item of color_list_items){
  item.onclick = function () {
    item.classList.add('color__list__item--active');
    item.querySelector('.color__name').classList.add('active');
    for (let other_item of color_list_items) {
      if (other_item.classList.contains('color__list__item--active')&&
      other_item.className != item.className) {
        other_item.classList.remove('color__list__item--active');
        other_item.querySelector('.color__name').classList.remove('active');
      }
    }
  }
}

var sensor_colors = document.querySelectorAll('.choose-sensor > .choose-color__panel > .color__panel__item');
for (let item of sensor_colors){
  item.onclick = function () {
    item.classList.add('color__list__item--active');
    item.querySelector('.color__name').classList.add('active');
    for (let other_item of sensor_colors) {
      if (other_item.classList.contains('color__list__item--active')&&
      other_item.className != item.className) {
        other_item.classList.remove('color__list__item--active');
        other_item.querySelector('.color__name').classList.remove('active');
      }
    }
  }
}

// =============================== Review slider ===============================

var review_container = document.querySelector('.reviews__slider__container');
var review_arrow_right = document.querySelector('.nav-buttons > .fa-angle-right');
var review_arrow_left = document.querySelector('.nav-buttons > .fa-angle-left');
var max_review_shift = -(document.querySelectorAll('.review__slider__item').length - 1);
var review_shift = 0;
var slide_width = 705;

review_arrow_right.onclick = function() {
  if (review_shift > max_review_shift){
    review_shift--;
    review_container.style.left = review_shift * slide_width + 'px';
  }
}

review_arrow_left.onclick = function() {
  if (review_shift < 0) {
    review_shift++;
    review_container.style.left = review_shift * slide_width + 'px';
  }
}



// =============================== Open/Close modal ===============================

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
var modal_order_consultation = document.querySelector('#orderConsultation');
var modal_add_product = document.querySelector('#addProduct');

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#requestCall > .modal_header > .close');

var btn_open_add_product = document.querySelector('.items-amount__buy.button');
var btn_close_add_product = document.querySelector('#addProduct > .modal_header > .close');

var btn_open_order_call_phone = document.querySelector('.contact_us > .btns > .call');
var btn_open_order_call_mail = document.querySelector('.contact_us > .btns > .message');
var btn_close_order_call = document.querySelector('#orderConsultation > .modal_header > .close');

btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));

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



btn_open_add_product.onclick = (() => open(modal_add_product));
btn_close_add_product.onclick = (() => close(modal_add_product));
