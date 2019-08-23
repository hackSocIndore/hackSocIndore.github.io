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
	
  // Smooth scrolling
  var scrollLink = $('.scroll');  
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 66.86
    }, 1000 );
  });
});