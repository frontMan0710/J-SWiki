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

    $("#getSecond").click(function () {
        $("body,html").animate({scrollTop: $("#ourBlog").offset().top}, 400)
    })

    var colors = ["#5699F2", "#F345B7"]
    $(".footerListItem a").each(function () {
        $(this).mouseenter(function () {
            var getRandomArrIndex = Math.floor(Math.random() * colors.length)
            $(this).css("color", colors[getRandomArrIndex])
        })
        $(this).mouseleave(function () {
            $(this).css("color", "var(--white-)")
        })
    })
    $("a.card").mouseenter(function () {
        $(this).css({"animation":"hoverUp 0.2s ease", "animation-fill-mode":"forwards"})
    })
    $("a.card").mouseleave(function () {
        $(this).css({"animation":"hoverDown 0.2s ease", "animation-fill-mode":"forwards"})
    })
    $(".lazyLoad").Lazy({
        effect: "fadeIn"
    })
})