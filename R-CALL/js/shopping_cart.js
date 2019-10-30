//================================ table__item ===============================

var table_items = document.querySelectorAll('.table__item');

for (let item of table_items) {
    item.querySelector('.trash').onclick = function() {
      item.classList.add('fade-out');
      item.addEventListener('transitionend', function() {
        item.remove();
      })
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

    }

    item.querySelector('.plus').onclick = function() {
      let num = Number(item.querySelector('.number').innerHTML);
      let price = item.querySelector('.price').innerHTML;
      price = parseInt(price.replace(' ', ''));
      num++;
      item.querySelector('.number').innerHTML = num;
      item.querySelector('.item__total').innerHTML = (num*price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.'
    }


}
