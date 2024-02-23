  $('.slider-one').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              autoplay:true,
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              autoplay:true,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  $('.slider-two').slick({
        autoplay: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              autoplay:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              autoplay:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  $('.slider-three').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });