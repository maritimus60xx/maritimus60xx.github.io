$(document).ready(function(){


/*************************header__slider**********************************/


// var headerBgImage = ['media/bg/header__bg--1.jpg', 'media/bg/header__bg--2.jpg'], i=1;
//     function sliderHeader(){
 
//         if(i > (headerBgImage.length-1)){
//             $('.header__bg').animate({'opacity':'0'},0,function(){
//                 i=1;
//                 $('.header__bg').css({'background-image':'url('+headerBgImage[0]+')'});
//             });
//             $('.header__bg').animate({'opacity':'1'},0);
//         }else{
//             $('.header__bg').animate({'opacity':'0'},0,function(){
//                 $('.header__bg').css({'background-image':'url('+headerBgImage[i]+')'});
//                 i++;
//             });
//             $('.header__bg').animate({'opacity':'1'},0);
//         }
         
//     }
//     var intervalSliderHeader = setInterval(sliderHeader,7000);

/****************************************************************************/

/*******************************first__equipment__slider*****************************/

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  asNavFor: '.slider__nav'
});
$('.slider__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider',
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
});

/************************second__equipment__slider***************************/

 $('.slider--second').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  asNavFor: '.slider__nav--second'
});
$('.slider__nav--second').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider--second',
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
});

/**************************************************************************/

/**************************MODAL************************************/

  var modal = $('.modal');
  var button = $('.header__btn');
  var buttonSecond = $('.price__btn');
  var close = $('.modal__esc');


  button.on('click', function (event) {
    event.preventDefault();
    $(modal).fadeIn("normal");
  });

  buttonSecond.on('click', function (event) {
    event.preventDefault();
    $(modal).fadeIn("normal");
  });

  close.on('click', function (event) {
    event.preventDefault();
    $(modal).fadeOut("normal");
  });

  $(document).keydown(function(event){
      if (event.keyCode === 27) { 
      $(modal).fadeOut("normal");
    };
  });

  $("body").on('click', function (event) {
    if(!$(event.target).closest(".modal__block, .modal__content, .header__btn, .price__btn").length) {
      $("body").find(modal).fadeOut("normal");
    }
  });

/****************************MODAL__ENDS*****************************/

/*****************************header__btn__down__scroll************************/

var scrollDown = $(".header__mark");
var main = $(".main");
var offset = main.offset();


scrollDown.on('click', function(event) {
  event.preventDefault();
    $('html, body').animate({scrollTop: offset.top }, 1000);

});

});