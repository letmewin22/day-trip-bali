<?php
/*
Template Name: Tour
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="tour">
		<header class="header tour-header" style="background-image: url(<?php echo get_field('картинка_на_первом_экране');?>);">
  <div class="container header__container">
    <div class="tour-header__tour-content">
      <h1 class="tour-h1"><?php echo get_field('заголовок_на_первом_экране');?></h1>
      <a target="_blank" href="https://book.peek.com/s/6b7acbcc-9830-4d86-98c9-a58a7cfeb8b4/Exjq2?gaClientId=2088613688.1576840929" class="button">
        <span class="form-button">Book now</span>
        <div class="button__bg"></div>
      </a>
    </div>
  </div>
  <div class="white-block">
    <div class="white-block__item first">
      <img src="<?php echo get_template_directory_uri()?>/img/tour-icons/days.svg" alt="calendar">
      <span><?php echo get_field('продолжительность_тура');?></span>
    </div>
    <div class="white-block__item">
      <img src="<?php echo get_template_directory_uri()?>/img/tour-icons/time.svg" alt="clock">
      <span><?php echo get_field('время_тура');?></span>
    </div>
    <div class="white-block__item">
      <img src="<?php echo get_template_directory_uri()?>/img/tour-icons/price.svg" alt="money-bag">
      <span><?php echo get_field('стоимость_тура');?></span>
    </div>
  </div>
</header>
<main>
  <section class="section">
    <div class="container last">
      <div class="tabs">
        <div class="tabs__scroll-wrap">
          <div class="tabs__nav tabs-nav">
            <div class="tabs-nav__item is-active" data-tab-name="tab-1">About</div>
            <div class="tabs-nav__item" data-tab-name="tab-2">Programm</div>
            <div class="tabs-nav__item" data-tab-name="tab-3">Price</div>
            <div class="tabs-nav__item" data-tab-name="tab-4">Photos</div>
          </div>
        </div>
        <div class="tabs__content">
          <div class="tab is-active tab-1">
            <?php include get_theme_file_path( '/components/tabs/tab-1.php' ); ?>
          </div>
          <div class="tab tab-2">
            <?php include get_theme_file_path( '/components/tabs/tab-2.php' ); ?>
          </div>
          <div class="tab tab-3">
            <?php include get_theme_file_path( '/components/tabs/tab-3.php' ); ?>
          </div>
          <div class="tab tab-4">
            <?php include get_theme_file_path( '/components/tabs/tab-4.php' ); ?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="footer tour-footer">
  <div class="container section__container footer__container">
    <div class="main-footer__content">
      <div class="main-footer__content__left-content">
        <h2><?php echo get_field('заголовок_футер');?></h2>
        <p><?php echo get_field('текст_футер');?></p>
      </div>
      <div class="main-footer__content__right-content">
        <div class="main-footer__content__left-content__contacts-items float-right">
          <a href="tel:<?php echo preg_replace('/\D+/', '', get_option('theme_contact_tel1'));?>"><?php echo get_option('theme_contact_tel1');?> (WhatsApp)</a>
          <a href="mailto:<?php echo get_option('site_email');?>"><?php echo get_option('site_email');?></a>
          <div class="social-media">
            <a href="<?php echo get_option('site_insta');?>"><img src="<?php echo get_template_directory_uri()?>/img/insta.svg" alt=""></a>
            <a href="<?php echo get_option('site_fb');?>"><img src="<?php echo get_template_directory_uri()?>/img/fb.svg" alt=""></a>
          </div>
          <a target="_blank" href="https://book.peek.com/s/6b7acbcc-9830-4d86-98c9-a58a7cfeb8b4/Exjq2?gaClientId=2088613688.1576840929" class="button footer-btn">
            <span class="form-button">Book now</span>
            <div class="button__bg"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<?php get_footer(); ?>