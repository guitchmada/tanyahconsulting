(function ($) {
	
	//On surcharge juste avec le zposition: 'front', le responsive menu
	Drupal.behaviors.responsive_menu_mmenu = {
		    attach: function (context) {
		    
	    	
		    	
		      $(context).find('body').once('responsive-menu-mmenu').each(function() {
		    	 
		        if (typeof($.mmenu) != 'undefined') {
		        	
		          // Get the position and theme options from Drupal settings.
		          var position = drupalSettings.responsive_menu.position;
		          var theme = drupalSettings.responsive_menu.theme;

		          // Set up the off canvas menu.
		          $('#off-canvas').mmenu({
		        	  extensions: [theme, 'effect-slide-menu'],
		        
		            offCanvas: {
		              zposition: 'front',
		              position: position
		            },});

		         
		        }
		      });
		    }
		  };

  
	
	
$(document).ready(function () {
	//var $listMenu = $('.menu--main li');
	
	
	var position = drupalSettings.responsive_menu.position;
    var theme = drupalSettings.responsive_menu.theme;
	$('#off-canvas').mmenu({
        extensions: [theme, 'effect-slide-menu'],
        offCanvas: {
          zposition: 'front',
          position: position
        },
        keyboardNavigation: {
          enable: true,
          enhance: true
        },
        screenReader: {
          aria: true,
          text: true
        }
      }, {
        clone: false
      });
   
});

})(jQuery);
