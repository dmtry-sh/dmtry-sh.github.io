// =============================== Menu hover ===============================

var menu_items = document.querySelectorAll('.menu__item');

for (let item of menu_items){
  if (item.lastElementChild.className == 'submenu__list'){
    item.querySelector('.submenu__list').onmouseover = (() => item.style.backgroundColor = '#1a1a55');
    item.querySelector('.submenu__list').onmouseout = (() => item.style = null);

  }
}

// =============================== Open/Close modal  ===============================

var modal_bg = document.querySelector('.modal_background');
var modal_request_call = document.querySelector('#openRequestCall');
var order_consultation = document.querySelector('#openOrderConsultation');

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#openRequestCall > .modal_header > .close');


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

var modal_order_consultation = document.querySelector('#orderConsultation');

var btn_open_order_call_phone = document.querySelector('.contact_us > .btns > .call');
var btn_open_order_call_mail = document.querySelector('.contact_us > .btns > .message');
var btn_close_order_call = document.querySelector('#orderConsultation > .modal_header > .close');

btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));

vvar filter = modal_order_consultation.querySelector('.filter');

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
