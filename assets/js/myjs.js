$(document).ready(function(){
$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  // autoplay: true,
  rows: 2,
  dots: true,
  appendArrows: $('.appendArrows'),
  responsive: [
    
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    
  ],
});

$('.horse-slider').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  dots: true,
  // prevArrow: "<a href='javascript:void(0)' class='.horse-arrow .slick-next'><img src='/assets/image/right.png'></a>",
  // nextArrow: "<a href='javascript:void(0)' class='.horse-arrow .slick-next'><img src='/assets/image/left.png'></a>",
  appendArrows: $('.horse-arrow'),
  appendDots: $('.horse-arrow'),
  //  infinite: true, 
  variableWidth: true, 
  speed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    
  ],
});
$('.clients-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  centerMode: true,
  variableWidth: true,
  speed: 2000,
  dots: true,
  appendArrows: $('.clients-arrow'),
  appendDots: $('.clients-arrow'),
});

// $('.clients-details').click(function (e){
// if($(e.target).attr('class')) {
//         $(this).toggleClass('active')
//     }
// });





// $('.clients-details').click(function (){
//   const $elems = $('.clients-text');
// if ($elems.length) {
// console.log(this);
// $(e.currentTarget)
// }
//  $('.clients-text').toggleClass('active').slideDown(200);
// });
// const $elems = $('.clients-text');
// if ($elems.length) {
//   $(this).toggleClass('active');
// }



// $('.clients-details').click(function (){
//  const $elems = $('.clients-text');
// if ($elems.length) {
//   $($elems, this).toggleClass('active');
// }
  
//   $('.line',this).toggleClass('active_active');
// });

// $('.clients-details').each(function(i){
$('.clients-card').click(function (e){
  // console.log(e.target)
  // let index = $(this).index();
  // console.info(`Вы нажали на ${index}й элемент`);
  $('.clients-text', this).toggleClass('active');
  $('.line',this).toggleClass('active_active');
});
// });
});

