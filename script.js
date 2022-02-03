
// JavaScript Begin- 87Lines

$(document).ready(function(){

    $(window).scroll(function(){

        // sticky navbar on scroll - Fixed to Top
        if(this.scrollY > 30){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // slide-up Button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show") 
        }

    });

    // slide-up - To move to Home Section from Anywhere
    $('.scroll-up-btn').click(function(){
         $('html').animate({ scrollTop: 0});
         $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    // toggle menu bar of Navbar Sub-Content on Media Queries
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.navbar .menu i').toggleClass("active");
    });


    //  typing animation for Home Section
    var typed = new Typed(".typing",{
          strings:  [ "Entrepreneur", "Web Developer", "Freelancer", "Thinker"],
          typespeed: 100,
          backspeed:60,
          loop: true,
    });

    //  typing animation for About Section
    var typed = new Typed(".typing-2",{
        strings: ["Entrepreneur", "Web Developer", "Freelancer", "Thinker"],
        typespeed: 100,
        backspeed:20,
        loop: true,
  });


    // owl-carousel script start
    $('.carousel').owlCarousel({
         margin :20,
         loop :true,
         autoplay:true,
         autoplayTimeOut :1000,
         autoplayHoverPause :true,
         responsive: {
             0: {
                 items: 1,
                 nav: false
            },

            700: {
                items: 2,
                nav: false
            },

            1000: {
                items: 3,
                nav: false
            }

         }

    });
    // owl-carousel script End
     
});   