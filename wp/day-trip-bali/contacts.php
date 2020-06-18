<?php
/*
Template Name: Contacts
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
  <div data-router-view="contacts">
    <div class="page-contacts">
      <div class="page-contacts-wrapper page-contacts__wrapper">
        <div class="page-contacts-wrapper__left">
          <img src="<?php echo get_field('картинка_контакты');?>" alt="contacts">
        </div>
        <div class="page-contacts-wrapper__right">
          <div class="page-contacts-wrapper__text">
            <h2>Contacts</h2>
            <p><?php echo get_field('подзаголовок_контакты');?></p>
          </div>
          <div class="page-contacts__contacts-items with-margin">
            <a href="tel:<?php echo preg_replace('/\D+/', '', get_option('theme_contact_tel1'));?>"><?php echo get_option('theme_contact_tel1');?>
              (WhatsApp)</a>
            <a href="mailto:<?php echo get_option('site_email');?>"><?php echo get_option('site_email');?></a>
            <div class="social-media">
              <a class="dif-soc" href="<?php echo get_option('site_insta');?>"><img
                  src="<?php echo get_template_directory_uri()?>/img/insta.svg" alt=""></a>
              <a class="dif-soc" href="<?php echo get_option('site_fb');?>"><img
                  src="<?php echo get_template_directory_uri()?>/img/fb.svg" alt=""></a>
            </div>
          </div>
          <a target="_blank"
            href="https://book.peek.com/s/6b7acbcc-9830-4d86-98c9-a58a7cfeb8b4/Exjq2?gaClientId=2088613688.1576840929"
            class="button">
            <span class="form-button">Book tour</span>
            <div class="button__bg"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



<?php get_footer(); ?>