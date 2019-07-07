$(function() {
    $(document).scroll(function() {
        var $nav = $("#nav-bar")
        var $navSupportedContent = $("#navbarSupportedContent")
        var isShown = $navSupportedContent.attr("class").includes(" show")
        if(!isShown)
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
    })
    $("#toggler").click(() => {
        var $nav = $("#nav-bar")
        if ($(this).scrollTop() < $nav.height()) {
            $nav.toggleClass("scrolled")
        }
    })
})
