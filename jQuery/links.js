$(function () {
    $("#getSecond").click(function () {
        $('body,html').animate({scrollTop: $("#ourBlog").offset().top}, 400)
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
})