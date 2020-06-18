<?php
get_header();
?>
<?php include get_theme_file_path( '/components/svg-sprite.php' ); ?>
<div class="site-wrapper" data-router-wrapper>
  <div data-router-view="tour">
    <div class="white-block">
      <div data-move="tour-header__tour-content,1,1140" class="container white-block__container full-size">
        <div class="white-block__items">
          <?php
                    $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                    foreach ($terms as $term):
                      $args = ['post_type' => 'info', 'posts_per_page' => 3, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                      $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
          <div class="white-block__item">
            <img src="<?php echo get_template_directory_uri(); echo icons(get_field('icon'))?>" alt="calendar">
            <span><?php echo get_field('text');?></span>
          </div>
          <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
        </div>
      </div>
      <div class="white-block__btns">
      <a href="<?php  echo get_field('booking_link');?>" class="white-block__btn ripple-btn">
        Book now
        <svg class="ripple-btn__ripple">
          <use height="100" width="100" xlink:href="#ripply-scott" class="js-ripple"></use>
        </svg>
      </a>
      <a target='_blank' rel='noreferer noopener' href="https://wa.me/<?php echo preg_replace('/\D+/', '', get_option('theme_contact_tel1'));?>?text=Hi!%20I%20want%20to%20have%20more%20info%20about%20boat%20advenutre%20" class="white-block__btn white-block__btn--green ripple-btn">
        WhatsApp
        <svg class="ripple-btn__ripple ripple-btn__ripple--green">
          <use height="100" width="100" xlink:href="#ripply-scott" class="js-ripple"></use>
        </svg>
      </a>
    </div>
    </div>
    <header class="tour-header">
      <div class="container tour-header__container full-size">
        <div class="tour-header__tour-content">
          <h1 class="tour-h1"><?php echo get_field('заголовок_на_первом_экране');?></h1>
        </div>
      </div>
      <div class="tour-header__img"
        style="background-image: url(<?php echo get_field('картинка_на_первом_экране');?>);">
        <div class="tour-header__video-btn">
          <img src="<?php echo get_template_directory_uri()?>/video/video-button.svg" alt="play-btn">
        </div>
      </div>
    </header>
    <main>
      <section class="section about-tour-section">
        <div class="container section__container full-size about-tour-section__container last">
          <div class="about-tour-section__left">
            <h2><?php echo get_field('заголовок_о_туре');?></h2>
            <div class="about-tour-section__text">
              <?php echo get_field('текст_о_туре');?>
            </div>
          </div>
          <div class="about-tour-section__right">
            <div class="about-tour-section__img"
              style="background-image: url(<?php echo get_field('картинка_о_туре'); ?>)"></div>
          </div>
        </div>
      </section>
      <section class="section details-section">
        <div class="container details-section__container full-size">
          <div class="details-section__top">
            <h2>Itinerary</h2>
          </div>
          <div class="details-section__bottom">
            <div class="details-section__left">
              <div class="details-section__items">
                <?php
                    $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                    foreach ($terms as $term):
                      $args = ['post_type' => 'tour_program', 'posts_per_page' => 105, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                      $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
                <div class="details-section__item show">
                  <div class="details-section__item-container">
                    <div class="details-section__item-left"><?php echo get_field('time');?></div>
                    <div class="details-section__item-right"><?php echo get_field('description');?></div>
                  </div>
                  <div class="details-section__item-line"></div>
                </div>
                <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
                <div class="details-section__more-btn">view more</div>
              </div>
            </div>
            <div class="details-section__right">
              <div class="details-section__img"
                style="background-image: url(<?php echo get_field('details_image')[sizes][large]; ?>)"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section gallery-section">
        <div class="container section__container gallery-section__container full-size">
          <div class="gallery-section__top">
            <div class="gallery-section__left">
              <h2>Gallery</h2>
              <!-- <div class="gallery-section__view-more">view more (<span>20</span> photos)</div> -->
            </div>
            <div class="gallery-section__right">
              <nav class="gallery-section__nav">
                <div class="gallery-section__nav-item gallery-section__nav-item--left">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.53223 3.18C6.8047 2.89801 7.25818 2.89801 7.54017 3.18C7.81264 3.45247 7.81264 3.90595 7.54017 4.17778L2.42934 9.28861H19.2944C19.6875 9.28924 20 9.60172 20 9.99486C20 10.388 19.6875 10.7106 19.2944 10.7106H2.42934L7.54017 15.8119C7.81264 16.0939 7.81264 16.5481 7.54017 16.8199C7.25818 17.1019 6.80407 17.1019 6.53223 16.8199L0.211496 10.4992C-0.0704975 10.2267 -0.0704975 9.77321 0.211496 9.50137L6.53223 3.18Z"
                      fill="#292B33" />
                  </svg>
                </div>
                <div class="gallery-section__nav-item gallery-section__nav-item--right">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.4678 3.18C13.1953 2.89801 12.7418 2.89801 12.4598 3.18C12.1874 3.45247 12.1874 3.90595 12.4598 4.17778L17.5707 9.28861H0.705621C0.31248 9.28924 0 9.60172 0 9.99486C0 10.388 0.31248 10.7106 0.705621 10.7106H17.5707L12.4598 15.8119C12.1874 16.0939 12.1874 16.5481 12.4598 16.8199C12.7418 17.1019 13.1959 17.1019 13.4678 16.8199L19.7885 10.4992C20.0705 10.2267 20.0705 9.77321 19.7885 9.50137L13.4678 3.18Z"
                      fill="#292B33" />
                  </svg>
                </div>
              </nav>
            </div>
          </div>
          <div class="gallery-section__bottom">
            <div class="gallery-section__gallery">
              <!-- Slider main container -->
              <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <?php
                    $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                    foreach ($terms as $term):
                      $args = ['post_type' => 'gallery_tours', 'posts_per_page' => 105, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                      $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
                  <div class="swiper-slide" style="background-image: url(<?php echo get_field('картинка_для_тура');?>)">
                  </div>
                  <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section list-section">
        <div class="container section__container list-section__container full-size">
          <div class="list-section__left">
            <h2>Package includes</h2>
            <div class="list-section__left-items">
            <?php
                    $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                    foreach ($terms as $term):
                      $args = ['post_type' => 'price_tours', 'posts_per_page' => 20, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                      $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
              <div class="list-section__left-item">
                <div class="list-section__item-icon"><?php include get_theme_file_path( '/components/check.php' ); ?>
                </div>
                <div class="list-section__item-text"><?php echo get_field('текст'); ?></div>
              </div>
              <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
            </div>

          </div>
          <div class="list-section__right">
            <h2>Additional Services</h2>
            <div class="list-section__right-items">
              <?php
              $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                foreach ($terms as $term):
                  $args = ['post_type' => 'additional_service', 'posts_per_page' => 105, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                    $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
              <div class="list-section__right-item">
                <div class="list-section__item-text"><?php echo get_field('текст');?></div>
                <div class="list-section__item-bold"><?php echo get_field('price');?></div>
              </div>
              <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
            </div>
          </div>
        </div>
      </section>
      <section class="section tour-list">
        <div class="container section__container tour-list__container choose full-size">
          <div class="top-content__choose tour-list__content">
            <h2>Available boats for this adventure</h2>
          </div>
          <div class="bottom-content bottom-content__marign">
            <div class="tours-preview-wrapper" style="opacity: 0">
              <?php
                  $terms = get_terms(['taxonomy' => 'tourslider_tax', 'name' => get_the_title() , 'pad_counts' => 1, 'parent' => 0, 'hide_empty' => false, 'post_per_page' => 125 ]);
                    foreach ($terms as $term):
                      $args = ['post_type' => 'yachts', 'posts_per_page' => 20, 'orderby' => 'id', 'order' => 'ASC', 'tax_query' => [['taxonomy' => 'tourslider_tax', 'field' => 'term_id', 'terms' => $term->term_id, 'include_children' => false, ], ], ];
                      $posts_with_term = new WP_Query($args);
                      while ($posts_with_term->have_posts()):
                          $posts_with_term->the_post(); ?>
              <a href="<?php the_permalink();?>" class="tour-preview">
                <div class="tour-img-wrapper tour-list__img-wrapper" data-bglazy="<?php echo get_field('превью_тура')[sizes][large];?>">
                  <?php if (get_field('sale', get_the_ID()) !== '') { ?>
                  <div class="tour-triger"><?php echo get_field('sale');?></div>
                  <?php 
                              }
                            ?>
                </div>
                <div class="tour-info">
                  <div class="tour-top-info">
                    <div class="tour-top-info-left">
                      <p><?php echo get_field('preview_price');?></p>
                    </div>
                  </div>
                  <h3 class="tour-preview-h3"><?php echo the_title();?></h3>
                  <p class="tour-desc"><?php $desc = get_field('текст_о_туре'); echo wp_trim_words($desc, 15, '...');?>
                  </p>
                </div>
              </a>
              <?php
                      endwhile;
                      wp_reset_postdata();
                  endforeach;
                  ?>
            </div>
          </div>
        </div>
      </section>
      <section class="section tour-list tour-list--bg">
        <div class="container section__container tour-list__container choose full-size">
          <div class="top-content__choose tour-list__content">
            <h2>Other tours</h2>
          </div>
          <div class="bottom-content bottom-content__marign">
            <div class="tours-preview-wrapper" style="opacity: 0">
              <?php
                global $post;
                $current_category = get_the_category(); 
              $args = array(
                  'cat' => $current_category[0]->cat_ID,
                  'post__not_in'   => array($post->ID),
                  'post_type' => 'tours',
                  'posts_per_page' => 20
              );    
              $my_query = new WP_Query( $args ); 
              if ( $my_query->have_posts() ) {
                  while ( $my_query->have_posts() ) {
                      $my_query->the_post();
                      ?>
              <a href="<?php the_permalink();?>" class="tour-preview">
                <div class="tour-img-wrapper tour-list__img-wrapper" data-bglazy="<?php echo get_field('превью_тура')[sizes][large];?>">
                  <?php if (get_field('sale', get_the_ID()) !== '') { ?>
                  <div class="tour-triger"><?php echo get_field('sale');?></div>
                  <?php 
                    }
                  ?>
                </div>
                <div class="tour-info">
                  <div class="tour-top-info">
                    <div class="tour-top-info-left">
                      <p><?php echo get_field('preview_price');?></p>
                    </div>
                  </div>
                  <h3 class="tour-preview-h3"><?php echo the_title();?></h3>
                  <p class="tour-desc"><?php $desc = get_field('текст_о_туре'); echo wp_trim_words($desc, 15, '...');?>
                  </p>
                </div>
              </a>
              <?php             
                    }            
                  }      
                wp_reset_postdata(); 
                ?>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="video-pop-up">
    <div class="video-pop-up__content">
      <div class="video-pop-up__video" id="pop-up-video">
        <iframe data-src="<?php echo get_field('video');?>" id="ytv" width="100%" height="100%" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
    <?php include get_theme_file_path( '/components/footer.php' ); ?>
    <?php get_footer(); ?>