$(function () {
    if($(window).width() > 1920) {
        $("header").css({"height":"75px"})
        $("main").css({"padding-top":"75px"})
        $("h1").css({"font-size":"48px"})
        $("h2").css({"font-size":"36px"})
        $("h3, p, span, li, a").css({"font-size":"20px"})
        $("footer").css({"padding":"37px 0 37px 0"})
        $("section").css({"padding-bottom":"79px"})
    } else if($(window).width() <= 1920 && $(window).width() >= 1024) {
        $("header").css({"height":"4.68vw"})
        $("main").css({"padding-top":"4.68vw"})
        $("h1").css({"font-size":"2.5vw"})
        $("h2").css({"font-size":"1.87vw"})
        $(".sectionTitle").css({"max-height":"144px", "height":"7.5vw"})
        $("h3, p, span, li, a").css({"font-size":"1.04vw"})
        $("footer").css({"padding":"1.92vw 0 1.92vw 0"})
        $("section").css({"padding-bottom":"4.11vw"})
    } if ($(window).width() <= 1023 && $(window).width() >= 768) {
        $("header").css({"height":"8.79vw"})
        $("main").css({"padding-top":"8.79vw"})
        $("h1").css({"font-size":"4.69vw"})
        $("h2").css({"font-size":"3.51vw"})
        $(".sectionTitle").css({"max-height":"144px", "height":"14.07vw"})
        $("h3, p, span, li, a").css({"font-size":"1.95vw"})
        $("footer").css({"padding":"3.61vw 0 3.61vw 0"})
        $("section").css({"padding-bottom":"7.72vw"})
    } if ($(window).width() <= 767 && $(window).width() >= 425) {
        $("header").css({"height":"11.73vw"})
        $("main").css({"padding-top":"11.73vw"})
        $("h1").css({"font-size":"6.25vw"})
        $("h2").css({"font-size":"4.69vw"})
        $(".sectionTitle").css({"max-height":"144px", "height":"18.77vw"})
        $("h3, p, span, li, a").css({"font-size":"2.6vw"})
        $("footer").css({"padding":"6.12vw 0 6.12vw 0"})
        $("section").css({"padding-bottom":"7.72vw"})
    } if ($(window).width() <= 424 && $(window).width() >= 320) {
        $("header").css({"height":"17.68vw"})
        $("main").css({"padding-top":"17.68vw"})
        $("h1").css({"font-size":"5.66vw"})
        $("h2").css({"font-size":"5,62vw"})
        $(".sectionTitle").css({"max-height":"144px", "height":"33.96vw"})
        $("h3, p, span, li, a").css({"font-size":"4.71vw"})
        $("footer").css({"padding":"8.72vw 0 8.72vw 0"})
        $("section").css({"padding-bottom":"18.63vw"})
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
})