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

var btn_open_request_call = document.querySelector('.phone .call');
var btn_close_request_call = document.querySelector('#requestCall > .modal_header > .close');

var btn_open_order_call_phone = document.querySelector('.contact_us > .btns > .call');
var btn_open_order_call_mail = document.querySelector('.contact_us > .btns > .message');
var btn_close_order_call = document.querySelector('#orderConsultation > .modal_header > .close');

btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));

btn_open_order_call_mail.onclick = (() => open(modal_order_consultation));
btn_open_order_call_phone.onclick = (() => open(modal_order_consultation));
btn_close_order_call.onclick = (() => close(modal_order_consultation));
