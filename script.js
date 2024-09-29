$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times'); // Change icon
    });
});
$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.menu').toggleClass('active'); // Toggle the active class
        $(this).find('i').toggleClass('fa-bars fa-times'); // Change icon
    });

    // Close the menu when clicking on a menu item
    $('.menu li a').click(function () {
        $('.menu').removeClass('active');
        $('.hamburger i').removeClass('fa-times').addClass('fa-bars'); // Reset icon
    });
});


    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    document.querySelector('.menu-btn').addEventListener('click', function() {
        const menu = document.querySelector('.navbar .menu');
        menu.classList.toggle('active'); // Toggle the 'active' class
        this.classList.toggle('active'); // Optionally change the icon
    });
    

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});