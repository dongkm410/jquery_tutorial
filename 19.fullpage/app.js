$(function () {
  $('.fullpage').fullpage({
    navigation: true,
    anchors: ['page1', 'page2', 'page3', 'page4'],
    menu: '.nav',
  });

  $('.bars').on('click', function () {
    $('.nav').toggleClass('active');

    if ($(this).find('i').hasClass('xi-bars')) {
      $(this).find('i').attr('class', 'xi-angle-left');
    } else {
      $(this).find('i').attr('class', 'xi-bars');
    }
  });
});
