// =============================== Menu hover ===============================

var menu_items = document.querySelectorAll('.menu__item');

for (let item of menu_items){
  if (item.lastElementChild.className == 'submenu__list'){
    item.querySelector('.submenu__list').onmouseover = (() => item.style.backgroundColor = '#1a1a55');
    item.querySelector('.submenu__list').onmouseout = (() => item.style = null);

  }
}
// =============================== Hide/show on last benefit item hover  ===============================

var hover_item = document.querySelector('.items__block:last-child');
var hide_item = document.querySelectorAll('.items__block')[1];

hover_item.onmouseover = (() => hide_item.style.visibility = 'hidden');
hover_item.onmouseout = (() => hide_item.style = null);

// =============================== Onclick filter__list__item  ===============================

var filter_items = document.querySelectorAll('.filter__list__item');

for (let item of filter_items) {
  item.onclick = function() {
    item.classList.add('active');
    for (let other_item of filter_items) {
      if (other_item.className == item.className &&
      other_item.innerHTML != item.innerHTML) {
        other_item.classList.remove('active');
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
var modal_order_consultation = document.querySelector('#orderConsultation');
var modal_add_product = document.querySelector('#addProduct');

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#requestCall > .modal_header > .close');

var btn_open_order_call_phone = document.querySelector('.contact_us > .btns > .call');
var btn_open_order_call_mail = document.querySelector('.contact_us > .btns > .message');
var btn_close_order_call = document.querySelector('#orderConsultation > .modal_header > .close');

var btns_open_add_product = document.querySelectorAll('.panel__item__buy.button');
var btn_close_add_product = document.querySelector('#addProduct > .modal_header > .close');

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


for (let btn of btns_open_add_product) {
  btn.onclick = (() => open(modal_add_product));
}

btn_close_add_product.onclick = (() => close(modal_add_product));
