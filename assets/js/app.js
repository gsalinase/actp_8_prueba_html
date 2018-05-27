$(document).ready(function() {

  // OWL carousel settings

  $('.owl-carousel').owlCarousel({
    margin: 100,
    stagePadding: 70,
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        567:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

});
