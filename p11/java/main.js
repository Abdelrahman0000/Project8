$(document).ready(function(){



    $('.fa-bars').click(function(e){
        e.preventDefault();
      
        $('.nav-dirc').toggleClass('active')
       
    });

    $('.blog .icon .All').click(function(e){
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active')

     $('.blog .box-container .box').fadeIn()
   
  });

  $('.blog .icon .Art').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')

   $('.blog .box-container .box').fadeOut()
   $('.blog .box-container .Ar').fadeIn()
});

$('.blog .icon .Event').click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active')

 $('.blog .box-container .box').fadeOut()
 $('.blog .box-container .Eve').fadeIn()
});


  $('.blog .icon .Architecture').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')

   $('.blog .box-container .box').fadeOut()
   $('.blog .box-container .Archi').fadeIn()
});




$('.blog .icon .Fashion').click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active')

 $('.blog .box-container .box').fadeOut(400)
 $('.blog .box-container .Fash').fadeIn()
});

$(window).on('scroll',function(){
  
  $('.my-feald').toggleClass('active',window.scrollY>0)
})

    $('.fa-filter').click(function(e){
      e.preventDefault();
    
      $('.side-bar2').toggleClass('active')
    });

      $('.side-bar2 .fa-times').click(function(e){
        e.preventDefault();
      
        $('.side-bar2').toggleClass('active')
       


  });
    $('#search-btn').click(function(e){
        e.preventDefault();
       
        $('.search-form').css({display:'flex'})
    })

    $('.search-form i').click(function(e){
        e.preventDefault();
        $('.search-form').fadeOut();
    
    })


    $('.side-bar-logo .fa-pencil-ruler').click(function(e){
        
        e.preventDefault();
        $('.side-bar').toggleClass('active')
    
    })


    $('.side-bar .fa-times').click(function(e){
        
      e.preventDefault();
      $('.side-bar').toggleClass('active')
  
  })

})
var swiper = new Swiper(".chossing",  {
    loop:true,
    grabCursor:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        pagination: {
            el: ".swiper-pagination",
          },
        });
        var swiper = new Swiper(".shopping-cart",  {
            loop:true,
            slidesPerView: 3,  loop:true,
            grabCursor:true,
            spaceBetween: 20,
       
        breakpoints:{
          640: {
            slidesPerView: 1,
          
          },
          768: {
            slidesPerView: 2,
        
          },
          1024: {
            slidesPerView: 3,
           
          }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        pagination: {
            el: ".swiper-pagination",
          },
                });
       
                      var swiper = new Swiper(".product, .mypar",  {
                        loop:true,
                        slidesPerView: 3,  loop:true,
                        grabCursor:true,
                        spaceBetween: 20,
                   
                    breakpoints:{
                      640: {
                        slidesPerView: 1,
                      
                      },
                      768: {
                        slidesPerView: 2,
                    
                      },
                      1024: {
                        slidesPerView: 3,
                       
                      }
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      },
                      
                    pagination: {
                        el: ".swiper-pagination",
                      },
                            });
      
