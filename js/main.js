$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".back-to-top").addClass("show");
  } else {
    $(".back-to-top").removeClass("show");
  }
});

function switchSection(id) {
  $('.menu-link').removeClass('menu-link-active');
  $(`.menu-link.${id}`).addClass('menu-link-active');

  $('section[class^="section"]').removeClass('section-active');
  $(`.${id}`).addClass('section-active');
}
