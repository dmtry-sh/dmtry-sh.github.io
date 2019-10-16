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

btn_open_request_call.onclick = (() => open(modal_request_call));
btn_close_request_call.onclick = (() => close(modal_request_call));
