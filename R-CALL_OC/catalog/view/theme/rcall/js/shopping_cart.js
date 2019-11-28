var table = document.querySelector('.products-table__table');
var items_sum_element = document.querySelector('.total__sum__number');
var total_sum_element = document.querySelector('.total__payable__number');
var delivery_sum_element = document.querySelector('.total__delivery-sum__number');
var select_delivery_type = document.querySelector('.select_delivery_type');

var items_sum = 0;
var delivery_sum = 0;
var total_sum = 0;


function parse_items_sum(table) {
  items_arr = table.querySelectorAll('.table__item');
  items_sum = 0;
  for (let item of items_arr) {
    item_sum = parseInt(item.querySelector('.item__total').innerHTML.replace(' ',''));
    items_sum += item_sum;
  }
  return items_sum;
}

function insert_sum(sum, element) {
  element.innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.';
}

function change_delivery_sum(select) {
  let idx = select.options.selectedIndex;
  let text = select.options[idx].text;
  document.querySelector('.total__delivery-sum__text').innerHTML = text + ':';
}


function sum(table) {
  insert_sum(parse_items_sum(table), items_sum_element);
  insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
  items_arr = table.querySelectorAll('.table__item');

  if (items_arr.length > 0) {

    for (let item of items_arr) {
      item.querySelector('.trash').onclick = function() {
        item.classList.add('fade-out');
        item.addEventListener('transitionend', function() {
          item.remove();
          insert_sum(parse_items_sum(table), items_sum_element);
          insert_sum(parse_items_sum(table), total_sum_element);
          insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
          if (items_arr.length == 0) {
            table.classList.add('invisible');
            document.querySelector('.products-table__no-items').classList.remove('invisible');
          }
        });

      }

      item.querySelector('.minus').onclick = function() {
        let num = parseInt(item.querySelector('.number').innerHTML);
        let price = item.querySelector('.price').innerHTML;
        price = parseInt(price.replace(' ', ''));
        if (num > 1) {
          num--;
        }
        item.querySelector('.number').innerHTML = num;
        item.querySelector('.item__total').innerHTML = (num*price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.';
        insert_sum(parse_items_sum(table), items_sum_element);
        insert_sum(parse_items_sum(table), total_sum_element);
        insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
      }

      item.querySelector('.plus').onclick = function() {
        let num = Number(item.querySelector('.number').innerHTML);
        let price = item.querySelector('.price').innerHTML;
        price = parseInt(price.replace(' ', ''));
        num++;
        item.querySelector('.number').innerHTML = num;
        item.querySelector('.item__total').innerHTML = (num*price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.'
        insert_sum(parse_items_sum(table), items_sum_element);
        insert_sum(parse_items_sum(table), total_sum_element);
        insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
      }
    }

  }
}

sum(table);

// ============================ validation ===============================




// ========================= open/close modal ===============================

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
