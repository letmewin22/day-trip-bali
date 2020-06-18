<footer class="footer">
  <div class="container section__container footer__container full-size">
    <div class="footer__cols-wrapper">
      <div class="footer__col-1">
        <h4>If you have any questions please contact us:</h4>
        <a target='_blank' rel='noreferer noopener' href="https://wa.me/<?php echo preg_replace('/\D+/', '', get_option('theme_contact_tel1'));?>?text=Hi!%20I%20want%20to%20have%20more%20info%20about%20boat%20advenutre%20"><?php echo get_option('theme_contact_tel1');?> (WhatsApp)</a>
        <a href="mailto:<?php echo get_option('site_email');?>"><?php echo get_option('site_email');?></a>
      </div>
      <div class="footer__r-cols">
        <div class="footer__col-2">
          <h4>Explore</h4>
          <nav class="footer__nav">
            <ul>
              <li class="footer__nav-item">
                <a href="<?php echo get_site_url();?>/about">about</a>
              </li>
              <li class="footer__nav-item dropdown">
                <div class="dropbtn">tours</div>
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
              <li class="footer__nav-item dropdown">
                <div class="dropbtn">rentals</div>
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
              <li class="footer__nav-item">
                <a href="<?php echo get_site_url();?>/contacts">contacts</a>
              </li>
              <li class="footer__nav-item">
                <a href="<?php echo get_site_url();?>/reviews">reviews</a>
              </li>
            </ul>
          </nav>

        </div>
        <div class="footer__col-3">
          <h4>Join us</h4>
          <a target="_blank" href="<?php echo get_option('site_insta');?>">facebook</a>
          <a target="_blank" href="<?php echo get_option('site_fb');?>">instagram</a>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="container full-size">
    <div class="footer__bottom">
      <div class="footer__c">2020. (с) DayTripBali</div>
      <a href="https://emotion-agency.com" target="_blank" rel="noreferer noopener" class="footer__e">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6331 7.26861C12.5773 4.05623 9.37714 1.34812 6.23282 1.79636C4.80021 2.0018 3.59085 2.59945 2.54895 3.60799C2.25126 3.88814 1.97218 4.0002 1.65588 3.66402C1.15354 3.15975 1.0233 2.69283 1.33959 2.37533C2.82803 0.993262 4.52112 0.0781074 6.58633 0.00340096C9.32133 -0.0713055 11.461 1.08664 13.0238 3.29049C15.1262 6.27874 14.9216 10.4623 12.5773 13.2638C9.06085 17.4474 2.80942 16.4575 0.632585 11.3588C0.223265 10.3689 0 9.34171 0 8.27714C0 7.62346 0.20466 7.36199 0.855851 7.28728C1.09772 7.24993 1.33959 7.26861 1.58146 7.26861C5.07929 7.26861 8.57711 7.26861 12.0749 7.26861C12.261 7.26861 12.4284 7.26861 12.6331 7.26861ZM1.82333 8.85612C2.08381 11.7883 4.59555 14.179 7.31194 14.1416C9.86089 14.0856 12.3912 11.5456 12.5587 8.85612C8.98643 8.85612 5.43279 8.85612 1.82333 8.85612Z" fill="white"/>
        </svg>
        <span>made by emotiON</span>
      </a>
    </div>
  </div>
</footer>