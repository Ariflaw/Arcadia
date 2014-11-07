 /* --------------------------------------------------------------
        Canvas Dropdown Transition
  -------------------------------------------------------------- */

 (function() {
            var $offCanvas = $('#offcanvas'),
                $dropdown  = $offCanvas.find('.dropdown');

            $dropdown.on('show.bs.dropdown', function(){
                $(this).find('.dropdown-menu').slideDown(350);
            }).on('hide.bs.dropdown', function(){
                $(this).find('.dropdown-menu').slideUp(350);
            });
        })();


 /* --------------------------------------------------------------
        Magin Popup Video
  -------------------------------------------------------------- */

    $('.video-popup').magnificPopup({
        type: 'iframe',

          iframe: {
             markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                      '</div>'
          },
          callbacks: {
            markupParse: function(template, values, item) {
             values.title = item.el.attr('title');
            }
          },
        });



 /* --------------------------------------------------------------
        1 - OWL PROJECT
  -------------------------------------------------------------- */

  $('.owl-project').owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            itens:3
        }
    }
  });


 /* --------------------------------------------------------------
        1 - OWL PARTNER
  -------------------------------------------------------------- */

    $('.owl-partner').owlCarousel({
        loop: true,
        items: 5,
        margin: 25,
        // autoWidth: true,
        responsive: {
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                itens:4
            }
        }
  });

 /* --------------------------------------------------------------
        1 - TESTIMONIAL
  -------------------------------------------------------------- */

    $('.owl-testimonial').owlCarousel({
        loop: true,
        items: 1,
        autoHeight: true,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
  });

