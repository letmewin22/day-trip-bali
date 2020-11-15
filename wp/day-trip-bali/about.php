<?php
/*
Template Name: About
*/
get_header();
?>

<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="about">
<header class="header">
  <div class="header__content">
    <h1><?php echo get_field('заголовок_первый_экран');?></h1>
    <p class="header__description"><?php echo get_field('подзаголовок_первый_экран');?></p>
    <div class="about-info-block">
      <span class="about-info-block__text"><?php echo get_field('текст_на_плашке');?></span>
    </div>
  </div>
  <div class="header__video" style="min-height: 60vh">
    <div class="header__photo" style="background-image: url(<?php echo get_field('картинка_первый_экран');?>);"></div>
  </div>
</header>
<main>
  <section class="section">
    <div class="container section__container">
      <div class="top-content bigger">
        <h2><?php echo get_field('заголовок_второй_экран');?></h2>
        <p><?php echo get_field('текст_второй_экран');?></p>
      </div>
      <div class="bottom-content welcome">
        <img src="<?php echo get_template_directory_uri()?>/img/thumbnails/hor.jpg" data-lazy="<?php echo get_field('горизонтальная_картинка_второй_экран');?>" alt="beach">
        <img src="<?php echo get_template_directory_uri()?>/img/thumbnails/ver.jpg" data-lazy="<?php echo get_field('вертикальная_картинка_второй_экран');?>" alt="beach">
      </div>
      <div class="waves-wrapper">
        <?php include get_theme_file_path( '/components/waves.php' ); ?>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section__container">
      <div class="history-wrapper">
        <div class="history-wrapper__left">
          <img src="<?php echo get_template_directory_uri()?>/img/thumbnails/about-3.jpg" data-lazy="<?php echo get_field('картинка_третий_экран');?>" alt="underwater">
        </div>
        <div class="history-wrapper__right">
          <h2><?php echo get_field('заголовок_третий_экран');?></h2>
          <p><?php echo get_field('текст_третий_экран');?></p>
        </div>
      </div>
    </div>
  </section>
 <section class="section">
		    <div class="container section__container last">
		      <h2><?php echo get_field('заголовок_четвёртый_экран');?></h2>
		      <div class="choose-items">
		        <div class="choose-items__item">
            <?php include get_theme_file_path( '/choose-icons/_choose-icon-1.php' ); ?>
		          <h3><?php echo get_field('заголовок_первое_преимущество');?></h3>
		          <p><?php echo get_field('текст_первое_преимущество');?></p>
		        </div>
		        <div class="choose-items__item">
		          <?php include get_theme_file_path( '/choose-icons/_choose-icon-2.php' ); ?>
		          <h3><?php echo get_field('заголовок_второе_преимущество');?></h3>
		          <p><?php echo get_field('текст_второе_преимущество');?></p>
		        </div>
		        <div class="choose-items__item">
		         <?php include get_theme_file_path( '/choose-icons/_choose-icon-3.php' ); ?>
		          <h3><?php echo get_field('заголовок_третье_преимущество');?></h3>
		          <p><?php echo get_field('текст_третье_преимущество');?></p>
		        </div>
		        <div class="choose-items__item">
		         <?php include get_theme_file_path( '/choose-icons/_choose-icon-4.php' ); ?>
		          <h3><?php echo get_field('заголовок_четвёртое_преимущество');?></h3>
		          <p><?php echo get_field('текст_четвёртое_преимущество');?></p>
		        </div>
		        <div class="choose-items__item">
		         <?php include get_theme_file_path( '/choose-icons/_choose-icon-5.php' ); ?>
		          <h3><?php echo get_field('заголовок_пятое_преимущество');?></h3>
		          <p><?php echo get_field('текст_пятое_преимущество');?></p>
		        </div>
		      </div>
		    </div>
		  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>