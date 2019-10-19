// =============================== Menu hover ===============================

var menu_items = document.querySelectorAll('.menu__item');

for (let item of menu_items){
  if (item.lastElementChild.className == 'submenu__list'){
    item.querySelector('.submenu__list').onmouseover = (() => item.style.backgroundColor = '#1a1a55');
    item.querySelector('.submenu__list').onmouseout = (() => item.style = null);

  }
}


// =============================== showcase__panel__photo  ===============================

var photo_containers = document.getElementsByClassName('panel__item__photo');

for (let item of photo_containers) {
  item.querySelector('.arrow_right').onclick = function() {
    let container = item.querySelector('.panel__item__photo__container');
    let min_shift = -(container.querySelectorAll('img').length - 1);
    let photo_width = container.querySelector('img').width;
    let shift = 0;

    if (container.style.left != '') {
      shift = parseInt(container.style.left)/photo_width;
    }

    if (shift > min_shift) {
      shift--;
      container.style.left = shift*photo_width + 'px';

      if (shift != 0) {
        item.querySelector('.arrow_left').classList.remove('unactive');
      }
      if (shift == min_shift) {
        item.querySelector('.arrow_right').classList.add('unactive');
      }
    }
  }

  item.querySelector('.arrow_left').onclick = function() {
    let container = item.querySelector('.panel__item__photo__container');
    let max_shift = 0;
    let min_shift = -(container.querySelectorAll('img').length - 1);
    let photo_width = container.querySelector('img').width;
    let shift = 0;

    if (container.style.left != '') {
      shift = parseInt(container.style.left)/photo_width;
    }

    if (shift < max_shift) {
      shift++;
      container.style.left = shift*photo_width + 'px';
    }

    if (shift == max_shift) {
      item.querySelector('.arrow_left').classList.add('unactive');
    }

    if (shift != min_shift) {
      item.querySelector('.arrow_right').classList.remove('unactive');
    }
  }
}
// =============================== showcase__panel__item__count  ===============================

var counters = document.getElementsByClassName('panel__item__count');

for (let item of counters) {
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
