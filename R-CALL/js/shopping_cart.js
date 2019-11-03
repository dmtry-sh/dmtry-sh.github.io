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
  switch (idx) {
    case 0:
      delivery_sum = 0;
      insert_sum(delivery_sum, delivery_sum_element);
      insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
      break;
    case 1:
      delivery_sum = 700;
      insert_sum(delivery_sum, delivery_sum_element);
      insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
      break;
    case 2:
      delivery_sum = 1200;
      insert_sum(delivery_sum, delivery_sum_element);
      insert_sum(parse_items_sum(table) + delivery_sum, total_sum_element);
      break;
  }
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



window.onload = sum(table);
