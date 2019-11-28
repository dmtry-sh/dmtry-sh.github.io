<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">

<head>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 

  <title><?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?></title>
  <base href="<?php echo $base; ?>" />

  <?php if ($description) { ?>
    <meta name="description" content="<?php echo $description; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
  <?php } ?>

  <?php if ($keywords) { ?>
    <meta name="keywords" content= "<?php echo $keywords; ?>" />
  <?php } ?>

  <meta property="og:title" content="<?php echo $title; if (isset($_GET['page'])) { echo " - ". ((int) $_GET['page'])." ".$text_page;} ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<?php echo $og_url; ?>" />

  <link href="catalog/view/theme/rcall/css/style.css" rel="stylesheet">
  <link href="catalog/view/theme/rcall/css/all.min.css" rel="stylesheet">
  <?php foreach ($styles as $style) { ?>
  <link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
  <?php } ?>

  <script src="catalog/view/javascript/common.js" type="text/javascript"></script>
  <?php foreach ($links as $link) { ?>
  <link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
  <?php } ?>
  <?php foreach ($scripts as $script) { ?>
  <script src="<?php echo $script; ?>" type="text/javascript"></script>
  <?php } ?>

  <?php foreach ($analytics as $analytic) { ?>
  <?php echo $analytic; ?>
  <?php } ?>

</head>


<body <?php echo $class; ?>>
<header>

<div class="sidebar--top">
  <div class="container--small">
    <a href="<?php echo $contact; ?>" class="dealers">Дилеры в вашем городе</a>
    <div class="social">
      <a href="#" class="vk"></a>
      <a href="#" class="fb"></a>
      <a href="#" class="youtube"></a>
    </div>
    <a href="#" class="account">Вход</a>
    <a href="#" class="partners">Стать партнёром</a>
  </div>
</div>

<div class="info">
  <div class="container--small">
    <div class="logo">
      <?php if ($logo) { ?>
        <?php if ($home == $og_url) { ?>
          <img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>"/>
        <?php } else { ?>
          <a href="<?php echo $home; ?>">
            <img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>"/>
          </a>
        <?php } ?>
      <?php } else { ?>
        <h1><a href="<?php echo $home; ?>"><?php echo $name; ?></a></h1>
      <?php } ?>
    </div>
    <div class="phone">
      <span class="phone__inner"><?php echo $telephone; ?></span>
      <span class="free">(звонок из России бесплатный)</span>
      <a href="#" class="call">Заказать звонок</a>
    </div>
    <?php echo $cart; ?>
    <a href="#" class="test-drive button">
        Бесплатный тест-драйв
    </a>
  </div>
</div>

<?php if ($categories) { ?>
  <nav class="menu">
    <div class="container--small">
      <ul class="menu__list">
        <li class="menu__item"><a href="<?php echo $home?>">Главная</a></li>
        <?php foreach ($categories as $category) { ?>
          <?php if ($category['children']) { ?>
            <li class="menu__item">
              <span><?php echo $category['name']; ?></span>
              <?php foreach (array_chunk($category['children'], ceil(count($category['children']) / $category['column'])) as $children) { ?>
                <ul class="submenu__list">
                  <?php foreach ($children as $child) { ?>
                    <li class="submenu__item"><a href="<?php echo $child['href']; ?>"><?php echo $child['name']; ?></a></li>
                  <?php } ?>
                </ul>
              <?php } ?>
            </li>
          <?php } else { ?>
            <li class="menu__item"><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></li>
          <?php } ?>
        <?php } ?>
        <li class="menu__item"><a href="<?php echo $contact?>">Контакты</a></li>
      </ul>
      </div>
    </nav>
<?php } ?>

</header>