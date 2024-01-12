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
    
    $(document).on('click', '.user_select_edit .status_list li', function(){
        $(this).parent('.status_list').css('display','none');
        $(this).remove();
        var _ket = $(this).html(); 
        $('.wall_list_output').append('<li>'+_ket +'</li>');
    });

    $(document).on('click', '.wall_list_output li img', function(){
        $(this).parents('li').remove();
        var _ket1 = $(this).parents('li').html(); 
        $('.user_select_edit .status_list').append('<li>'+_ket1 +'</li>');
    });

    $(".status a").click(function (event) {
        event.stopPropagation();
        $(this).next(".status_list").show();
        $(this).addClass('text');
    });
    $(".status_list li").click(function () {
        var listval = $(this).text();
        $(this).parent(".status_list").prev(".statustext").children("span").text(listval);
        $(".status_list").hide();
        $(".status a").removeClass('text');
    });
    /*if ($('.status a').hasClass('text') ) {
        $('html').on('click', function() {
            $(".status a").removeClass('text');
            $(".status_list").hide();
        });
    }*/

    $(document).click(function (e) {
        if(!$(e.target).closest('.status a').length){
            $(".status a").removeClass('text');
            $(".status_list").hide();
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
    $(document).on('click', '.closetext', function(){
        $(this).prev().val("")
        $(this).attr('src', 'image/search.svg').removeClass('closetext');
        $(this).parent('.search').removeClass('warning');
    });

    // $(".right_table .tbody ul li").click(function(){
    //     $(this).toggleClass("active");
    // });
    // $(".left_table .tbody ul li .removed_icon").click(function(){
    //     $(this).toggleClass("active");
    // });


    $(".status_list li").click(function () {
        var listval = $(this).text();
        $(this).parent(".status_list").prev(".statustext").children("span").text(listval);
        $(".status_list").hide();
        $(".status a").removeClass('text');
    });



});




