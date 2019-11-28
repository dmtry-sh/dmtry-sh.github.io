<footer class="footer">
  <div class="container--small">
    <div class="footer_content">
      <div class="contacts">
        <span class="head">Наши контакты</span>
        <span class="address">Россия, Ростов-на-Дону,
        ул.&nbsp;Зорге, д.999</span>
        <a href="<?php echo $contact; ?>" class="show_map">Посмотреть на карте</a>
        <span class="mail_sale">info@r-call.ru - продажа оборудования</span>
        <span class="support">support@r-call.ru - технические вопросы</span>
        <span class="phone_sale">+7(863)256-40-98 - продажа оборудования</span>
        <span class="phone_support">+7(863)275-95-05 - технические вопросы</span>
        <div class="f_social">
          <span>Мы в соцсетях:</span>
          <a href="#" class="vk"></a>
          <a href="#" class="fb"></a>
          <a href="#" class="youtube"></a>
        </div>
      </div>
      <div class="clients_info">
        <span class="head">Информация для клиентов</span>
        <div class="lists">
          <ul class="list_left">
            <li><a href="<?php echo $home; ?>">Главная</a></li>
            <li><a href="">Продукция</a></li>
            <li><a href="">Решения</a></li>
            <li><a href="">Гарантия</a></li>
            <li><a href="">Доставка и оплата</a></li>
            <li><a href="">Поддержка</a></li>
            <li><a href="">О компании</a></li>
            <li><a href="<?php echo $contact; ?>">Контакты</a></li>
            <li><a href="<?php echo $sitemap; ?>">Карта сайта</a></li>
            <li><a href="">Положение об обработке персональных данных</a></li>
          </ul>
          <ul class="list_right">
            <li><a href="">Кнопка вызова секретаря</a></li>
            <li><a href="">Кнопка вызова персонала</a></li>
            <li><a href="">Система вызова персонала</a></li>
            <li><a href="">Беспроводная система вызова</a></li>
            <li><a href="">Кнопка вызова для инвалидов</a></li>
            <li><a href="">Кнопка вызова официанта</a></li>
            <li><a href="">Кнопка: система вызова медперсонала</a></li>
            <li><a href="">Система вызова официантов</a></li>
            <li><a href="">Пейджер персонала: официанта и медсестры</a></li>
          </ul>
        </div>
      </div>
      <div class="contact_form">
        <span class="head">Напишите нам</span>
        <form class="questions_form" action="">
          <input class="input_name" type="text" name="name" placeholder="Имя" required>
          <div class="name_icon"></div>
          <input class="input_mail" type="email" name="mail" placeholder="Почта" required>
          <div class="mail_icon"></div>
          <textarea class="input_message" name="message" placeholder="Ваше сообщение" required></textarea>
          <div class="message_icon"></div>
          <input class="button" type="submit" value="Отправить сообщение">
        </form>
      </div>
    </div>
  </div>

<div class="copyrights">
  <span>Copyright © 2005 - 2018</span>&nbsp;<span class="underline">R-CALL -
    система вызова нового поколения</span><span>. Все права защищены.</span>
</div>
</footer>


<!--====================== Modal ======================-->
<div id="requestCall" class="modal">
    <div class="modal_header">
      <span>Заказать обратный звонок</span>
      <div class="close"></div>
    </div>
    <div class="modal_body">
      <form class="modal_form" action="">
        <div class="wrapper">
          <div class="input_name">
            <label for="name">Имя</label>
            <input type="text" id="r_name" class="name" name="name" placeholder="Иванов Иван">
          </div>
          <div class="input_phone">
            <label for="phone">Телефон</label>
            <input type="text" id="r_phone" class="phone" name="phone" placeholder="8 (800) 800 80 80">
          </div>
        </div>
      <span class="contact_data">Ваши контактные данные в безопасности и не
      будут переданы третьим лицам</span>
      <div class="wrapper">
        <div class="agreement">
          <input id="r_agreement" class="checkbox" type="checkbox" name="agreement">
          <label for="r_agreement">Я даю согласие на обработку моих персональных
          данных</label>
        </div>
        <input class="button" type="submit" value="Отправить">
      </form>
      </div>
    </div>
</div>

<div id="addProduct" class="modal">
  <div class="modal_header">
    <span>Товар добавлен в корзину</span>
    <div class="close"></div>
  </div>
  <div class="modal_body">
    <div class="product">
      <img src="img/product_big.png" alt="" class="product_img">
      <div class="product_info">
        <span class="title bold">Кнопка вызова КСЛ-2</span>
        <span class="color">(темный дуб, под золото)</span>
      </div>
      <div class="price">
        <div class="left">
          <span>Количество:</span>
          <span class="bold">Итого:</span>
        </div>
        <div class="right">
            <span class="number">10 шт.</span>
            <span class="price bold">19 500 руб.</span>
        </div>
      </div>
    </div>
    <div class="order">
      <a href="shopping_cart.html" class="order_btn button">Оформить заказ</a>
    </div>
  </div>
</div>


<div id="orderConsultation" class="modal">
  <div class="modal_header">
    <span>Заказать консультацию</span>
    <div class="close"></div>
  </div>
  <div class="modal_body">
    <div class="filter">
      <span class="filter__list__item active">По телефону</span>
      <span class="filter__list__item">По e-mail</span>
    </div>

    <form class="order_by_phone">
      <div class="wrapper">
        <div class="left">
          <label for="op_name">Имя</label>
          <input id="op_name" type="text" class="order_input" placeholder="Иванов Иван">
        </div>
        <div class="right">
          <label for="op_phone">Телефон</label>
          <input id="op_phone" type="text" class="order_input" placeholder="8 (800) 800 800 80">
        </div>
      </div>
      <span class="agreement__text">Ваши контактные данные в безопасности и не
        будут переданы третьим лицам</span>
      <div class="wrapper">
        <div class="left">
          <input id="op_agreement" type="checkbox">
          <label class="o_agreement_label" for="op_agreement">Я даю согласие на обработку моих персональных данных</label>
        </div>
        <div class="right">
          <input type="submit" class="o_submit button" value="Заказать">
        </div>
      </div>
    </form>

    <form class="order_by_mail invisible">
      <div class="wrapper">
        <div class="left">
          <label for="om_name">Имя</label>
          <input id="om_name" type="text" class="order_input" placeholder="Иванов Иван">
        </div>
        <div class="right">
          <label for="om_phone">Телефон</label>
          <input id="om_phone" type="text" class="order_input" placeholder="8 (800) 800 800 80">
        </div>
      </div>
      <div class="message">
        <label for="om_message">Ваш вопрос</label>
        <input id="om_message" type="text" class="order_input" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elitquis">
      </div>
      <span class="agreement__text">Ваши контактные данные в безопасности и не
        будут переданы третьим лицам</span>
      <div class="wrapper">
        <div class="left">
          <input id="om_agreement" type="checkbox">
          <label class="o_agreement_label" for="om_agreement">Я даю согласие на обработку моих персональных данных</label>
        </div>
        <div class="right">
          <input type="submit" class="o_submit button" value="Заказать">
        </div>
      </div>
    </form>

  </div>
</div>

<div class="modal_background"></div>


<script src="js/script.js"></script>
</body>
</html>