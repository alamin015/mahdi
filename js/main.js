
// window.addEventListener('scroll',function(){
//     let header = document.getElementById('header');
//     header.classList.toggle('hello', window.scrollY > 100);
// })

// ScrollOut({
//     targets: '.hero_middle_content'
// })
//


// RESPONSIVE MENU 
$('#barId').click(function(){
    $('.responsive_mobile').addClass('moblieActive');
})

$('.responsive_span').click(function(){
    $('.responsive_mobile').removeClass('moblieActive');
})

$('#img_video').click(function(){
    $('.popUp').addClass('popActive');
    
})

$('.times_icon').click(function(){
    $('.popUp').removeClass('popActive');
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // slideTransition: '1s',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav:false,
    items: 1
});