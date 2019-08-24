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
	
  var temp = $("#nav-bar").css("height");
  var nav_height = Number(temp.substring(0, temp.length-2));
  
  // Smooth scrolling
  var scrollLink = $('.scroll');  
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - nav_height
    }, 1000 );
  });

  // Navbar Links Toggeling
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - (nav_height+5);
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  });
});