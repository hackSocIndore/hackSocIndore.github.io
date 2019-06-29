$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        var $text = $(".text-white");
        $text.toggleClass('dark', $(this).scrollTop() > $nav.height())
    });
});