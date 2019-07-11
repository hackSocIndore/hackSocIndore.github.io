$(function () {
    var $nav = $("#nav-bar");
    $(document).scroll(function () {
        var $navSupportedContent = $("#navbarSupportedContent");
        var isShown = $navSupportedContent.attr("class").includes(" show");
        if(!isShown)
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
    $("#toggler").click(() => {
        if ($(this).scrollTop() < $nav.height()) {
            $nav.toggleClass("scrolled");
        }
    });
});