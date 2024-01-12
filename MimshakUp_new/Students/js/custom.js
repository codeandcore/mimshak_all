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
    
    var owl = $(".slider");
    owl.owlCarousel({
        center: false,
        nav: true,
        rtl: true,
        //items: 7,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: false,
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',
        mouseDrag: true
    });
    var get_current_index = $('.owl-carousel.owl-rtl .owl-item a.current').parent().index() - 1;
    owl.trigger('to.owl.carousel', [get_current_index, 0])


    $(document).click(function () {
        $(".moreanchor").removeClass('open');
        $(".more_list").hide();
        $(".more_edit").hide();
    });
    $('.edit_toggle').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_edit').hide()
        }
        else {
            $('.edit_toggle').removeClass('open');
            $(this).addClass("open");
            $('.more_edit').hide()
            $(this).siblings('.more_edit').toggle();
        }
        e.stopPropagation();
    });

    $('.more1 .moreanchor').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_list').hide()
        }
        else {
            $('.more1 .moreanchor').removeClass('open');
            $(this).addClass("open");
            $('.more_list').hide()
            $(this).siblings('.more_list').toggle();
        }
        e.stopPropagation();
    });
    $('.more a').click(function (e) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.more_list').hide()
        }
        else {
            $('.more a').removeClass('open');
            $(this).addClass("open");
            $('.more_list').hide()
            $(this).siblings('.more_list').toggle();
        }
        e.stopPropagation();
    });

    $('.edit_list .edit').click(function (e) {
        $(this).siblings('.more_list').toggle()
        e.stopPropagation();
        $(".side_anc .more_list").hide();
    });

    $(function () {
        $(".sortable").sortable();
        $(".sortable").disableSelection();
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 40) {
            $('header').addClass('fixed_header');
        }
        else {
            $('header').removeClass('fixed_header');
        }
    });
    $(".movesA").hide();
    $(".movesa").show();
    $(".tab li a").click(function () {
        var type = $(this).data("type");
        $(".movesA").hide();
        $(".moves" + type).show();
        $(".tab li a").removeClass("active");
        $(this).addClass("active");
        $(".moves" + type).find(".accord_body:first").addClass('tabbody');
        $(".tabbody").show();
        $(".slider").trigger('refresh.owl.carousel');
        owl.trigger('to.owl.carousel', [get_current_index, 0]);
    });

    $('.slider a').click(function () {
        $('.body_open .slider a').removeClass("current");
        $(this).addClass("current");
        $('.student_normal .slider a').removeClass("current");
        $(this).addClass("current");
    });
    $(".notification_main > a").click(function (e) {
        $(".sub-dropdown").show();
        e.stopPropagation();
    });

    $(".sub-dropdown").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".sub-dropdown").hide();
    });


    $(".mimsha_body .stepA").hide();
    $(".mimsha_body .step1").show();
    $(".mimsha_body .slider a").click(function () {
        var type = $(this).data("type");
        $(".stepA").hide();
        $(".step" + type).show();
        $(".mimsha_body .slider a").removeClass("current");
        $(this).addClass("current");
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

    $("a.affi_text").click(function (event) {
        event.stopPropagation();
        $(this).next(".affi_list").show();
        $(this).next(".affiliation_students").show();
        /*  $('#division_groups').slideUp();
        $('#create_new_groups').slideUp();*/
    });

    $(".affi_list li").click(function () {
        var listval_new = $(this).text();
        $(this).parents(".affi_list").prev(".affi_text").find(".affiWrite").text(listval_new);
        $(".affi_list").hide();
    });
    $(".affiliation_students ul li").click(function () {
        var listval_new = $(this).children('span').text();
        $(this).parents(".affiliation_students").prev(".affi_text").find(".affiWrite").text(listval_new);
        $(".affi_list").hide();

    });

    $('.affiliation_students ul li').click(function () {
        $('#division_groups').hide();
        $('#create_new_groups').hide();
        var _ket = $(this).children('span').attr('data-text')
        $('#' + _ket).show();

    });

    $(window).click(function () {
        $(".status_list").hide();
    });


    /* $('.accord_head ').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.accord_body').slideUp();
            $(".slider").trigger('refresh.owl.carousel');
            $(".slider").trigger('to.owl.carousel', [3, 0])
            $(this).removeClass('accord_open');
            $(this).next('.accord_body').removeClass("body_open");
        }
        else if ($('.accord_body').hasClass("tabbody")) {
            $('.accord_body').hide();
            $('.accord_body').removeClass("tabbody");
        }
        else {
            $('.open_arrow').removeClass('active');
            $(".accord_head").removeClass('accord_open');
            $(".accord_body").removeClass('body_open');
            $(this).addClass('active');
            $(this).addClass('accord_open');
            $('.accord_body').slideUp();
            $(this).next('.accord_body').addClass("body_open");
            $(this).next('.accord_body').slideToggle();
            $(".slider").trigger('refresh.owl.carousel');
            owl.trigger('to.owl.carousel', [get_current_index, 0]);
        }
        $(".body_open .stepA").hide();
        $(".body_open .step1").show();
        $(".body_open .slider a").click(function () {
            var type = $(this).data("type");
            $(".stepA").hide();
            $(".step" + type).fadeIn();
            $(".body_open .slider a").removeClass("current");
            $(this).addClass("current");
        });
    });*/


    $('.accord_head:not(.not_click)').click(function () {
        $('.open_arrow').toggleClass('active');
        $(this).toggleClass('accord_open');
        $(this).next('.accord_body').toggleClass("body_open");
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(".slider").trigger('refresh.owl.carousel');
            $(".slider").trigger('to.owl.carousel', [3, 0])
        }
        else if ($('.accord_body').hasClass("tabbody")) {
            $('.accord_body').hide();
            $('.accord_body').removeClass("tabbody");
        }
        else {
            /*$('.open_arrow').removeClass('active');
            $(".accord_head").removeClass('accord_open');
            $(".accord_body").removeClass('body_open');*/
            $(this).addClass('active');
            /*$(this).addClass('accord_open');
            $(this).next('.accord_body').addClass("body_open");*/
            $(".slider").trigger('refresh.owl.carousel');
            owl.trigger('to.owl.carousel', [get_current_index, 0]);
        }
        $(".mimsha_body .stepA").hide();
        $(".mimsha_body .step1").show();
        $(".mimsha_body .slider a").click(function () {
            var type = $(this).data("type");
            $(".stepA").hide();
            $(".step" + type).fadeIn();
            $(".mimsha_body .slider a").removeClass("current");
            $(this).addClass("current");
        });
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



    $(document).click(function () {
        $(".first_drop").hide();
    });
    $('.catalog_more').click(function (e) {
        $('.first_drop').hide();
        e.stopPropagation();
        $(this).next('.first_drop').toggle();
    })
    $('.heart').click(function () {
        if ($(this).hasClass('heartred')) {
            $(this).removeClass('heartred');
        }
        else {
            $(this).addClass('heartred');
        }
    });
    $('.search input').keyup(function () {
        if ($(this).val().length > 0) {
            $(this).parent('.search').addClass('warning');
            $(this).next('img').attr('src', 'image/closegrey.svg')
            $(this).next('img').addClass('closetext')
        }
        else {
            $(this).parent('.search').removeClass('warning');
            $(this).next('img').attr('src', 'image/search.svg')
            $(this).next('img').removeClass('closetext')
        }
    });
    $(document).on('click', '.closetext', function () {
        $(this).prev().val("")
        $(this).attr('src', 'image/search.svg').removeClass('closetext');
        $(this).parent('.search').removeClass('warning');
    });
    $('.checkdiv input').click(function () {
        if ($('.checkdiv input').is(':checked')) {
            $(this).parents('.adding_res').find('.toggleSec').hide();
            $(this).parents('.adding_res').find('.input_field').show();
        }
        else {
            $(this).parents('.adding_res').find('.toggleSec').show();
            $(this).parents('.adding_res').find('.input_field').hide();
        }
    });

    $('.acc_list .acc_drop li input').click(function () {
        if ($(this).is(':checked')) {
            $('.cancel_filters').css('display', 'block')
        }

        if ($('.acc_list .acc_drop li input').is(':checked') == 0) {
            $('.cancel_filters').css('display', 'none')
        }
    });
    $('.cancel_filters').click(function () {
        $('.cancel_filters').css('display', 'none')
        $('.acc_list .acc_drop li input:checked').trigger('click');
    });

    $('.sending_mail').click(function () {
        $(this).hide();
        $(this).next('.green_btn').show();
    });
    $('.puzzle p img').click(function () {
        $('.puzzle').hide();
    });

    $('.chat-close').click(function () {
        $('.chat_main.active').removeClass('active');
    });

    $('.chat-button > a').click(function () {
        $('.chat_main').addClass('active');
    });

    $('.techer-drawer-close').click(function () {
        $('.techer-drawer.active').removeClass('active');
    });

    $('.greyone > div,.more1>a').click(function () {
        $('.techer-drawer').addClass('active');
    });

    $('.chat-profile').click(function () {
        $('.bottom-bar > ul').hide();
        $('.chat-back').show();
        $('.chat-accordion >  #chat_accordion').hide();
        $('.chat-accordion >  .chat-screen').show();
    });

    $('.chat-back span').click(function () {
        $('.bottom-bar > ul').show();
        $('.chat-back').hide();
        $('.chat-accordion > #chat_accordion').show();
        $('.chat-accordion > .chat-screen').hide();
    });


    var owl2 = $(".myclass_slider");
    owl2.owlCarousel({
        center: false,
        nav: true,
        items: 7,
        rtl: true,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: true,
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',

    });
    var owl3 = $(".catalog_slider_in");
    owl3.owlCarousel({
        center: false,
        nav: true,
        items: 6,
        rtl: true,
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        },
        singleItem: true,
        loop: false,
        dots: false,
        autoWidth: true,
        slideTransition: 'linear',

    });
    $('.copy_link').click(function () {
        $(this).next('.green_btn').show();
    });

    $('.linkclick').click(function () {
        $('.addlink').show();
        $('.addlink2').show();
        $('.main_modal').hide();
        $('.main_modal2').hide();
    });
    $('.fileclick').click(function () {
        $('.addfile').show();
        $('.addfile2').show();
        $('.main_modal').hide();
        $('.main_modal2').hide();
    });
    $('.forwardarrow').click(function () {
        $('.main_modal').show();
        $('.main_modal2').show();
        $(this).parent().hide();
    });

    $(".setA").hide();
    $(".setx").show();
    $(".tab1 a").click(function () {
        var type = $(this).data("type");
        $(".setA").hide();
        $(".set" + type).fadeIn();
        $(".tab1 a").removeClass("active");
        $(this).addClass("active");
    });

    $('.setacc_head').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.setacc_body').slideUp();
        }
        else {
            $('.setacc_head').removeClass('active');
            $(this).addClass('active');
            $('.setacc_body').slideUp();
            $(this).next('.setacc_body').slideToggle();
        }
    });
    $('.studentgroup li img').click(function () {
        $(this).parent('li').hide(50);
    });
    $('.student_list li').click(function () {
        $(this).toggleClass('active')
    });


    $('.classdrop p').click(function () {
        $(this).siblings('.classdrop ul').toggle();
    });
    $('.classdrop li').click(function () {
        var droplist = $(this).text();
        $(this).parent('ul').siblings('.classdrop p').children('span').text(droplist);
        $(this).parent('ul').hide();
    });
    $(".dashA").hide();
    $(".dasha").show();
    $(".dashtab a").click(function () {
        var type = $(this).data("type");
        $(".dashA").hide();
        $(".dash" + type).fadeIn();
        $(".dashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".dash2tabA").hide();
    $(".dash2taba").show();
    $(".dash2tab a").click(function () {
        var type = $(this).data("type");
        $(".dash2tabA").hide();
        $(".dash2tab" + type).fadeIn();
        $(".dash2tab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".filedashA").hide();
    $(".filedashx").show();
    $(".fildashtab a").click(function () {
        var type = $(this).data("type");
        $(".filedashA").hide();
        $(".filedash" + type).fadeIn();
        $(".fildashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".file2dashA").hide();
    $(".file2dashx").show();
    $(".fil2dashtab a").click(function () {
        var type = $(this).data("type");
        $(".file2dashA").hide();
        $(".file2dash" + type).fadeIn();
        $(".fil2dashtab a").removeClass("active");
        $(this).addClass("active");
    });
    $(".file3dashA").hide();
    $(".file3dashx").show();
    $(".fil3dashtab a").click(function () {
        var type = $(this).data("type");
        $(".file3dashA").hide();
        $(".file3dash" + type).fadeIn();
        $(".fil3dashtab a").removeClass("active");
        $(this).addClass("active");
    });
});


// e.stopPropagation();
$('.more_list li a[data-target="#share_flow"]').click(function (e) {
    $('.moreanchor').removeClass('open');
    $('#share_flow').modal('show');
    e.stopPropagation();
});

/*$('.more_list li a').click(function(e){    
    e.stopPropagation();
});*/

/*$('.accord .group_edit .more_edit li a').click(function(e){
    $('.accord .group_edit .edit_popup').removeClass('open');
    $('#areaofstudy').modal('show');
    e.stopPropagation();
}); */

$('.accord.edit_mode .more_list .student_group_opne').click(function (e) {
    $('.moreanchor').removeClass('open');
    $('#areaofstudy').modal('show');
    e.stopPropagation();
});

$('.accord.edit_mode .more_list .division_group').click(function (e) {
    $('.moreanchor').removeClass('open');
    $('#automatic_group').modal('show');
    e.stopPropagation();
});

// on click slide toggle
// $('.chat-button a').click(function(){
//    $('.slide_toggle').addClass('active');
// });

// $('.slide_toggle .close_panel').click(function(){
//     $('.slide_toggle').removeClass('active');
// });

// custome select generate
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// chat js
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "image/orange_smile.svg";
const PERSON_IMG = "image/blue_smile.svg";
const BOT_NAME = "אורנה וילניץ’";
const PERSON_NAME = "דני הורוביץ";

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";

    botResponse();
});

function appendMessage(name, img, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
<div class="msg ${side}-msg">


<div class="msg-bubble">
<div class="msg-info d-flex align-items-center justify-content-between">          
<div class="msg-info-name align-items-center d-flex"><div class="msg-info-name-img" style="background-image: url(${img})"></div> ${name}</div>
<div class="msg-info-time">${formatDate(new Date())}</div>
</div>

<div class="msg-text">${text}</div>
</div>
</div>
`;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
}

// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).on('click','.chat_main .chat-accordion .chat_accord .chat_accord_head',function(e){
    $(this).next().toggleClass('body_open');
});