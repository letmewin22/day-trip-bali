
<div class="tours-preview-wrapper">
      <?php   
        $args = array(
            'post_type' => 'tour_carousel',
            'posts_per_page' => 25
        );    
        $my_query = new WP_Query( $args ); 
        if ( $my_query->have_posts() ) {
            while ( $my_query->have_posts() ) {
                $my_query->the_post();
                ?>
                  <a href="<?php echo get_field('ссылка_на_страницу_тура');?>" class="tour-preview">
                    <div class="tour-img-wrapper" data-bglazy="<?php echo get_field('изображение_для_тура');?>">
                    </div>
                    <h3 class="tour-preview-h3"><?php echo get_field('название_тура');?></h3>
                  </a>
                <?php             
            }            
        }       
        wp_reset_postdata();             
    ?> 
    </div>



