<?php
/*
Template Name: Main
*/
get_header();
?>
<?php include get_theme_file_path( '/components/svg-sprite.php' ); ?>
<div class="site-wrapper" data-router-wrapper>
  <div data-router-view="main">
		<header class="header">
    <div class="header__content">
      <h1><?php echo get_field('заголовок_первый_экран');?></h1>
      <p class="header__description"><?php echo get_field('подзаголовок_первый_экран');?></p>
      <div class="header__info-block info-block">
        <span class="info-block__text">Ready for adventure?</span>
        <a href="<?php echo get_field('cheсk_calendar_link');?>" class="info-block__btn">
          <span>Check calendar</span>
          <svg class="info-block__btn-riple">
            <use height="100" width="100" xlink:href="#ripply-scott" class="js-ripple"></use>
          </svg>
        </a>
      </div>
    </div>
    <div data-video-src="<?php echo get_template_directory_uri()?>/video/video.mp4" data-poster-pc="<?php echo get_template_directory_uri()?>/img/main-poster-pc.jpg" data-poster-mob="<?php echo get_template_directory_uri()?>/img/main-poster.jpg" data-mob-btn="<?php echo get_template_directory_uri()?>/video/video-button.svg" class="header__video" style="min-height: 60vh"></div>
  </header>
    <main>
      <section class="section">
        <div class="container section__container">
          <div class="top-content">
            <h2><?php echo get_field('заголовок_второй_экран');?></h2>
            <p><?php echo get_field('текст_второй_экран');?></p>
          </div>
          <div class="bottom-content welcome">
            <img src="<?php echo get_template_directory_uri()?>/img/thumbnails/hor.jpg"
              data-lazy="<?php echo get_field('горизонтальная_картинка_второй_экран');?>" alt="beach">
            <img src="<?php echo get_template_directory_uri()?>/img/thumbnails/ver.jpg"
              data-lazy="<?php echo get_field('вертикальная_картинка_второй_экран');?>" alt="beach">
          </div>
          <div class="waves-wrapper">
            <?php include get_theme_file_path( '/components/waves.php' ); ?>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container section__container choose">
          <div class="top-content__choose">
            <h2>Tours</h2>
          </div>
          <div class="bottom-content bottom-content__marign">
            <div class="tours-preview-wrapper" style="opacity: 0">
            <?php  
          $args = array(
              'post_type' => 'tours',
              'posts_per_page' => 20
          );    
          $my_query = new WP_Query( $args ); 
          if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
                  ?>
              <a href="<?php the_permalink();?>" class="tour-preview">
                <div class="tour-img-wrapper" data-bglazy="<?php echo get_field('превью_тура')[sizes][large];?>">
                <?php if (get_field('sale') !== '') { ?> 
                  <div class="tour-triger"><?php echo get_field('sale');?></div><?php }?>
                </div>
                <div class="tour-info">
                  <div class="tour-top-info">
                    <div class="tour-top-info-left">
                      <p><?php echo get_field('preview_price');?></p>
                    </div>
                  </div>
                  <h3 class="tour-preview-h3"><?php echo the_title();?></h3>
                  <p class="tour-desc"><?php $desc = get_field('текст_о_туре'); echo wp_trim_words($desc, 15, '...');?></p>
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
			<section class="section">
      <div class="container section__container choose last">
        <div class="top-content__choose">
          <h2>Boats</h2>
        </div>
        <div class="bottom-content bottom-content__marign">
          <div class="tours-preview-wrapper" style="opacity: 0">
          <?php  
          $args = array(
              'post_type' => 'yachts',
              'posts_per_page' => 20
          );    
          $my_query = new WP_Query( $args ); 
          if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
                  ?>
              <a href="<?php the_permalink();?>" class="tour-preview">
                <div class="tour-img-wrapper" data-bglazy="<?php echo get_field('превью_тура')[sizes][large];?>">
                <?php if (get_field('sale') !== '') { ?> 
                  <div class="tour-triger"><?php echo get_field('sale');?></div><?php }?>
                </div>
                <div class="tour-info">
                  <div class="tour-top-info">
                    <div class="tour-top-info-left">
                      <p><?php echo get_field('preview_price');?></p>
                    </div>
                  </div>
                  <h3 class="tour-preview-h3"><?php echo the_title();?></h3>
                  <p class="tour-desc"><?php $desc = get_field('текст_о_туре'); echo wp_trim_words($desc, 15, '...');?></p>
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
    <?php include get_theme_file_path( '/components/footer.php' ); ?>

    <?php get_footer(); ?>