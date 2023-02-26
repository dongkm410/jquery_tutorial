$(function(){

    const moreBtn = $('.more_btn')
    const closeBtn = $('.close_btn')
    const dimm = $('.dimm')
    const modal = $('.modal')

    $('.more_btn').click(function(){
        $('.dimm').show;
        $('.modal').show;
    })

    $('.close_btn').click(function(){
        $('.dimm').hide;
        $('.modal').hide;
    })
  
  });