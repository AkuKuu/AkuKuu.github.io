/*Counter*/    
jQuery(document).ready(function($) {
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });
/*Navbar*/
 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

/*After scroll change background*/

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
         $("nav").addClass("changeColor")
      }
      if ($(this).scrollTop() < 900) {
         $("nav").removeClass("changeColor")
      }
   });
});
/*Scroll to div*/
$(document).ready(function () {
  $('.Arrow').click(function() {
  $('html, body').animate({
    scrollTop: $(".SecondSection").offset().top
  }, 1000)
}), 
      $('.Start').click(function (){
    $('html, body').animate({
      scrollTop: $(".Start2").offset().top
    }, 1000)
  }),
  $('.About').click(function (){
    $('html, body').animate({
      scrollTop: $(".About2").offset().top
    }, 1000)
  }),
  $('.Projects').click(function (){
    $('html, body').animate({
      scrollTop: $(".Projects2").offset().top
    }, 1000)
  }),
    $('.Team').click(function (){
    $('html, body').animate({
      scrollTop: $(".Team2").offset().top
    }, 1000)
  }),
    $('.Contact').click(function (){
    $('html, body').animate({
      scrollTop: $(".Contact2").offset().top
    }, 1000)
  })
});