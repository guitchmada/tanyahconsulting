<?php
/*
 * @file
 * Contains \Drupal\atc_homepage\Plugin\Block\ViewBlockListeProjets
 */

namespace Drupal\atc_homepage\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Link;

/**
 * @Block (
 *  id = "ViewBlockListeProjets",
 *  admin_label = @Translation("ViewBlockListeProjets"),
 *  categroy = @Translation("TC")
 * )
 */
class ViewBlockListeProjets extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
   
  	
  	
    $vw = views_embed_view('listing_des_projets', 'block_1', $enfants);
    $renderview = \Drupal::service('renderer')->render($vw);
    
    
    return [
      '#markup' => 'xx<hr />' . $renderview . '<hr />'
    ];
  }

}
