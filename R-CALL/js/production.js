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
