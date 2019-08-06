$(function() {
    var mobileImage = ["img/event_posters/posterMob2.webp", "img/event_posters/bodygit.webp", "img/event_posters/slide1mob.webp", "img/event_posters/posterMob1.webp"];
    var desktopImage = ["img/event_posters/New_Project.png", "img/event_posters/slide3_1.webp", "img/event_posters/git871.webp", "img/event_posters/slide1.webp", "img/event_posters/poster1.webp"];

    var $nav = $("#nav-bar");
    var carousel = $(".carousel-inner");
    var carouselIndicators = $(".carousel-indicators");

    $(document).scroll(function() {
        var $navSupportedContent = $("#navbarSupportedContent");
        var isShown = $navSupportedContent.attr("class").includes(" show");
        if (!isShown) $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
    $("#toggler").click(() => {
        if ($(this).scrollTop() < $nav.height()) {
            $nav.toggleClass("scrolled");
        }
    });
    var updateCarousel = imageList => {
        carousel.empty();
        var carouselItems = imageList
            .map((src, i) => {
                if (i === 0) return '<div class="carousel-item active"><img src=' + src + ' width="100%" /></div>';
                return '<div class="carousel-item"><img src=' + src + ' width="100%" /></div>';
            })
            .join("");
        var indicators = imageList
            .map((_, i) => {
                if (i === 0) return '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
                return '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
            })
            .join("");
        carousel.html(carouselItems);
        carouselIndicators.html(indicators);
    };
    var onresizecheck = () => {
        if (screen.width <= 800 || $(window).width() <= 800) {
            updateCarousel(mobileImage);
        } else {
            updateCarousel(desktopImage);
        }
    };
    onresizecheck();
    $(window).resize(onresizecheck);
});
