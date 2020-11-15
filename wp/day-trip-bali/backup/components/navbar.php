<div class="nav">
  <a href="<?php echo get_site_url();?>/" class="nav__logo">
    <img src="<?php echo get_template_directory_uri()?>/img/logo.svg" alt="">
  </a>
  <nav class="nav__items">
    <div class="nav__wrap--wrapper">
      <ul class='nav__wrapper'>
        <li class="nav__item only-mobile is-current">
          <a href="<?php echo get_site_url();?>/">home</a>
        </li>
        <li class="nav__item">
          <a href="<?php echo get_site_url();?>/about">about</a>
        </li>
        <!-- <li class="nav__item"><a href="#">tours</a></li> -->
        <li class="nav__item dropdown">
          <div class="dropbtn">tours
          <span>&#9662;</span>
          </div>
          <div class="dropdown-content">
          <?php 
            $menuParameters = array(
              'menu'            => 'tourmenu',
              'container'       => false,
              'echo'            => false,
              'items_wrap'      => '%3$s',
              'depth'           => 0,
            );
            echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
             ?>
          </div>
        </li>
        <li class="nav__item dropdown">
          <div class="dropbtn">rentals
          <span>&#9662;</span>
          </div>
          <div class="dropdown-content">
          <?php 
            $menuParameters = array(
              'menu'            => 'rentalsmenu',
              'container'       => false,
              'echo'            => false,
              'items_wrap'      => '%3$s',
              'depth'           => 0,
            );
            echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
             ?>
          </div>
        </li>
        <li class="nav__item">
          <a href="<?php echo get_site_url();?>/contacts">contacts</a>
        </li>
        <li class="nav__item">
          <a href="<?php echo get_site_url();?>/reviews" data-router-disabled>reviews</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="burger">
    <span></span>
  </div>
</div>