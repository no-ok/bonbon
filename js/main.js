$(function() {
  // init main slider on index page
  $('.main-slider').slick({
    autoplay: true,
    speed: 800,
    dots: true,
    arrows: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    nextArrow:'<button class="slick-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66634 13.3334L21.958 13.3334L12.6247 4.00008L14.9997 1.66675L28.333 15.0001L14.9997 28.3334L12.6247 26.0001L21.958 16.6667L1.66634 16.6667L1.66634 13.3334Z"/></svg></button>',
    prevArrow:'<button class="slick-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3337 13.3334L8.04199 13.3334L17.3753 4.00008L15.0003 1.66675L1.66699 15.0001L15.0003 28.3334L17.3753 26.0001L8.04199 16.6667L28.3337 16.6667L28.3337 13.3334Z"/></svg></button>',
  });


  $(document).on('click', '.main-header a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 700);
  });

  $(".link-holder a").on("click", function(e) {
    e.preventDefault();
    const link = $(this).parent().find('.toggle-content').clone();
    $(".modal-body .toggle-content").remove();
    link.appendTo(".modal-body");
  });
});

