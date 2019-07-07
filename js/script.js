$(function() {
    $(document).scroll(function() {
        var $nav = $('.fixed-top')
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
        var $text = $('.text-white')
        $text.toggleClass('dark', $(this).scrollTop() > $nav.height())
    })
    $('.navbar-toggler').click(() => {
        var $nav = $('.fixed-top')
        var $text = $('.text-white')
        if ($(this).scrollTop() < $nav.height()) {
            $nav.toggleClass('scrolled')
            $text.toggleClass('dark')
        }
    })
})
