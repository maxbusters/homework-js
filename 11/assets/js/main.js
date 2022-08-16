$(function () {
  $(".intro__slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    
  });

  $(".arrivals__slider").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.arrivals__prev'), 
    nextArrow: $('.arrivals__next'),
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          
        }
      }
    ]
  })

  $(".brands__slider").slick({
    infinite: true,
    arrows: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: $('.brands__prev'), 
    nextArrow: $('.brands__next'),
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 738,
        settings: {
          arrows: false,
          slidesToShow: 2,
          mobileFirst:true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          
        }
      }
    ]
  })
  
  
  $(".next").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "-active.png");
    });
  }, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("-active.png", ".png");
    });
  })
  $(".prev").css({transform: 'scale(-1, 1)'})
  $(".prev").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "-active.png");
    });
  }, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("-active.png", ".png");
    });
  })
});
