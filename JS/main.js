
    // $(".firstLi").click(function() {
    //     $(".dropdown").toggle();
    //   });
    $(".slide").slick({
          
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
      
        
       
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
             
            },
          }
          
         
        ],
      });
