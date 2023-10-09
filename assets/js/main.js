(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	}); 



  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    smartSpeed: 1000,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>'
    ],
    nav: true,
    dots: false
  });

  // owlCarousel
  $(".brand_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="far fa-arrow-left"></i>',
      '<i class="far fa-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

  // owlCarousel
  $(".clg_slider").owlCarousel({
    loop: true,
    margin: 70,
    items: 5,
    stagePadding: 150,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }
    }
  });

  // owlCarousel
  $(".clg_slider2").owlCarousel({
    loop: true,
    margin: 50,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      767: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  $('.select').niceSelect();
  $('.program_select select').niceSelect();


  $('.gallery_blk a').magnificPopup({
    type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
        enabled:true
      },
  
      zoom: {
      enabled: true, 
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      opener: function(openerElement) {
  
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
  });




 
})(jQuery);
