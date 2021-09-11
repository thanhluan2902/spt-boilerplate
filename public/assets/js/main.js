$(document).ready(function () {
    $("#toggle_nav").click(function () {
        if($(window).width() <= 1115) {
            $("#bar").toggleClass("trend");
        }else {
            $(".right_wrap").toggleClass("no_mr");
        }
    });
    $(".main_content").click(function () {
        $("#bar").removeClass("trend");
    });

    $(".event_click").click(function () {
        $(this).toggleClass("active_button");
        $(this).next(".list_item").toggleClass("active");
    });
    $(".item").click(function () {
        $(".item").removeClass("activeItem");
        $(this).toggleClass("activeItem");
    });
});