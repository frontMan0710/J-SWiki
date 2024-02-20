$(function () {
    $("a.card").mouseenter(function () {
        $(this).css({"animation":"hoverUp 0.2s ease", "animation-fill-mode":"forwards"})
    })
    $("a.card").mouseleave(function () {
        $(this).css({"animation":"hoverDown 0.2s ease", "animation-fill-mode":"forwards"})
    })
})
$(window).scroll(function () {
    var jqoffset = $(".third").offset().top
    var scssoffset = $("footer").offset().top

    if ($(window).scrollTop() + $(window).height() > jqoffset) {
        $("body").addClass("jq-scrollbar");
    } else {
        $("body").removeClass("jq-scrollbar")
    } if ($(window).scrollTop() + $(window).height() > scssoffset) {
        $("body").addClass("scss-scrollbar");
    } else {
        $("body").removeClass("scss-scrollbar");
    }
})
$(".lazyLoad").Lazy({
    scrollDirection: "vertical",
    effect: "show"
})