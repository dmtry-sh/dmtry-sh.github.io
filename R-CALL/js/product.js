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

// =============================== Onclick filter__list__item  ===============================

var filter_items = document.querySelectorAll('.filter__list__item');
var panels = document.querySelectorAll('.info-panel > .container--small > *');

for (let panel of panels) {
  alert(panel.innerHTML);
}

var pair = [];

pair.push({'filter': filter_items[0], 'panel': panels[1]});
pair.push({'filter': filter_items[1], 'panel': panels[2]});
pair.push({'filter': filter_items[3], 'panel': panels[3]});
pair.push({'filter': filter_items[4], 'panel': panels[4]});


for (let pair_item of pair) {
  pair_item['filter'].onclick = function() {
    pair_item['filter'].classList.add('active');
    pair_item['panel'].classList.add('visible');
    for (let other_pair of pair) {
      if (pair_item['filter'] != other_pair['filter']) {
        other_pair['filter'].classList.remove('active')
        other_pair['panel'].classList.remove('visible')
      }
    }
  }
}



// =============================== Show panels on filter click  ===============================





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
