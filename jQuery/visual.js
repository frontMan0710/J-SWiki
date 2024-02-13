$(function () {
    if($(window).width() > 1920) {
        $("header").css({"height":"75px"})
        $("main").css({"padding-top":"75px"})
        $("h1").css({"font-size":"48px"})
        $("h2").css({"font-size":"36px"})
        $("h3, p, span, li, a").css({"font-size":"20px"})
        $("footer").css({"padding":"37px 0 37px 0"})
        $(".second, .third").css({"padding-bottom":"79px"})
    } else {
        $("header").css({"height":"4.68vw"})
        $("main").css({"padding-top":"4.68vw"})
        $("h1").css({"font-size":"2.5vw"})
        $("h2").css({"font-size":"1.87vw"})
        $("h3, p, span, li, a").css({"font-size":"1.04vw"})
        $(".second, .third").css({"padding-bottom":"4.11vw"})
    }
})