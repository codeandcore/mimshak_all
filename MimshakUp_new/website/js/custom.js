$(document).ready(function () {

    // loader js
    $(window).on('load', function () {
        setTimeout(removeLoader); //wait for page load PLUS two seconds.
    });
    function removeLoader() {
        $("#loadingDiv").fadeOut(500, function () {
            // fadeOut complete. Remove the loading div
            $("#loadingDiv").remove(); //makes page more lightweight 

            $('.animate_block').each(function (i) {
                var row = $(this);
                setTimeout(function () {
                    row.addClass('showanim');
                }, 400 * i);
            });
        });
    }
    //loader js end


    var owl = $(".qslide");
    owl.owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        rtl: true,
        nav: true,
        dots: false,
        mouseDrag: false,
    });


    $('.logo-slider').owlCarousel({
        loop: true,
        items: 7,
        rtl: true,
        margin: 10,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });

    (function () {
        'use strict';
        window.addEventListener('load', function () {
            if ($('#needs-validation').length > 0) {
                var form = document.getElementById('needs-validation');
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            }
            else{
                
            }
        }, false);
    })();

    $('.filter').click(function () {
        $('.catalog_body').addClass('openbody');
        $('.catalog_rht').addClass('openfilter');
    });
    $('.close_fil,.close_mob').click(function () {
        $('.catalog_body').removeClass('openbody');
        $('.catalog_rht').removeClass('openfilter');
    });
    $('.search_mob').click(function () {
        $('.search').addClass('search_open');
    });
    $('.close_mobile').click(function () {
        $('.search').removeClass('search_open');
    });
    $(".menu").click(function (events) {
        events.stopPropagation();
        $('nav').addClass('navopen');
    });
    $(".close_nav").click(function () {
        $('nav').removeClass('navopen');
    });
    $(".status a").click(function (event) {
        event.stopPropagation();
        $(this).next(".status_list").show();
    });
    $(".status_list li").click(function () {
        var listval = $(this).text();
        $(this).parent(".status_list").prev(".statustext").children(".statuswrite").text(listval);
        $(".status_list").hide();
    });


    // catalogpage
    $('.acc_list>span').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).next('.acc_drop').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().toggleClass('active')
            $(this).next('.acc_drop').toggle();
        }
    });
    
    $('.new_acc_list span').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).next('.new_acc_drop').hide();
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().toggleClass('active')
            $(this).next('.new_acc_drop').toggle();
        }
    });
    
    
    
    
    
    $('.search input').keyup(function () {
        if ($(this).val().length > 0) {
            $(this).parent('.search').addClass('warning');
            $(this).next('img').attr('src', 'image/closegrey.png')
            $(this).next('img').addClass('closetext')
        }
        else {
            $(this).parent('.search').removeClass('warning');
            $(this).next('img').attr('src', 'image/search.svg')
            $(this).next('img').removeClass('closetext')
        }
    });

    $('.catalog_rht .blue-btn').click(function () {
        $(".filter img").attr('src', 'image/funnel-blue.svg');
        $('.catalog_body').removeClass('openbody');
        $('.catalog_rht').removeClass('openfilter');
    });
    $(window).click(function () {
        $(".status_list").hide();
        $("nav").removeClass('navopen');
    });
    $(document).on('click', '.closetext', function () {
        $(this).prev().val("")
        $(this).attr('src', 'image/search.svg').removeClass('closetext');
        $(this).parent('.search').removeClass('warning');
        $('.search').removeClass('search_open');
    });

    /* Animation one */
    var paramsconst = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'js/animation.json'
    };
    var animcons = lottie.loadAnimation(paramsconst);

    jQuery('#lottie').hover(function () {
        animcons.play();
    }, function () {
        animcons.stop()
    });

    /* Animation two */
    var paramsconst1 = {
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'js/animation2.json'
    };
    var animcons1 = lottie.loadAnimation(paramsconst1);

    jQuery('#lottie2').hover(function () {
        animcons1.play();
    }, function () {
        animcons1.stop()
    });

    /* Animation three */
    var paramsconst2 = {
        container: document.getElementById('lottie3'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'js/animation3.json'
    };
    var animcons2 = lottie.loadAnimation(paramsconst2);

    jQuery('#lottie3').hover(function () {
        animcons2.play();
    }, function () {
        animcons2.stop()
    });



});



// on scroll load animation
(function ($) {
    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);
var win = $(window);
var allMods = $("#lottiefree");
var allMods2 = $("#lottiefree1");
var allMods3 = $("#lottiefree2");

var params = {
    container: document.getElementById('lottiefree'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/Body_GREEN_Part_Animation_v3.json'
};


var params1 = {
    container: document.getElementById('lottiefree1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/Body_GREEN_Part_Animation_v2.json'
};


var params2 = {
    container: document.getElementById('lottiefree2'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/Body_ORANGE_Part_Animation_v3.json'
};

  $('.acc_list .acc_drop li input').click(function () {
        if ($(this).is(':checked')) {
            $('.cancel_filters').css('display','block')
        } 

        if ($('.acc_list .acc_drop li input').is(':checked') == 0) {
            $('.cancel_filters').css('display','none')
        }
    });
    $('.cancel_filters').click(function () {
        $('.cancel_filters').css('display','none')
        $('.acc_list .acc_drop li input:checked').trigger('click');        
    }); 


win.scroll(function (event) {
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            if (!el.hasClass('done')) {
                el.addClass('done');
                var anim = lottie.loadAnimation(params);
                jQuery('#lottiefree').load(function () {
                    anim.play();
                    console.log('play')
                });
            }
        }
    });

    allMods2.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            if (!el.hasClass('done')) {
                el.addClass('done');
                var anim1 = lottie.loadAnimation(params1);
                jQuery('#lottiefree1').load(function () {
                    anim1.play();
                    console.log('play')
                });
            }
        }
    });

    allMods3.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            if (!el.hasClass('done')) {
                el.addClass('done');
                var anim2 = lottie.loadAnimation(params2);
                jQuery('#lottiefree2').load(function () {
                    anim2.play();
                    console.log('play')
                });
            }
        }
    });
});





// on scroll load animation end

var lastOffset = null;
function checkDirection(offset) {
    if (!lastOffset) {
        lastOffset = offset;
        return;
    }

    var dir = [];
    if (offset.y < lastOffset.y) {
        dir[0] = 'up';
    } else if (offset.y > lastOffset.y) {
        dir[0] = 'down';
    } else {
        dir[0] = 'still';
    }

    if (offset.x < lastOffset.x) {
        dir[1] = 'left';
    } else if (offset.x > lastOffset.x) {
        dir[1] = 'right';
    } else {
        dir[1] = 'still';
    }

    lastOffset = offset;
    switch (dir[0]) {
        case 'up':
        case 'down':
        case 'still':
    }
    switch (dir[1]) {
        case 'left':
        case 'right':
        case 'still':
    }
    return dir;
}
// mobileview
// if ($(window).width() < 768) {
//     jQuery(window).on('load', function () {
//         var params = {
//             container: document.getElementById('lottiefree'),
//             renderer: 'svg',
//             loop: false,
//             autoplay: true,
//             path: 'js/Body_Blue_Part_Animation_v2.json'
//         };
//         var anim = lottie.loadAnimation(params);
//         jQuery('#lottiefree').load(function () {
//             anim.play();
//         });
//         setTimeout(function () {
//             $('#lottiefree').addClass('foropcatity');
//         }, 3000);
//     });
//     var params1 = {
//         container: document.getElementById('lottiefree1'),
//         renderer: 'svg',
//         loop: false,
//         autoplay: true,
//         path: 'js/Body_GREEN_Part_Animation_v2.json'
//     };
//     var anim1 = lottie.loadAnimation(params1);
//     jQuery('#lottiefree1').load(function () {
//         anim1.play()
//     });
//     setTimeout(function () {
//         $('#lottiefree1').addClass('foropcatity');
//     }, 3000);
//     var params2 = {
//         container: document.getElementById('lottiefree2'),
//         renderer: 'svg',
//         loop: false,
//         autoplay: true,
//         path: 'js/Body_ORANGE_Part_Animation_v3.json'
//     };
//     var anim2 = lottie.loadAnimation(params2);
//     jQuery('#lottiefree2').load(function () {
//         anim2.play()
//     });
//     setTimeout(function () {
//         $('#lottiefree2').addClass('foropcatity');
//     }, 3000);
// }

