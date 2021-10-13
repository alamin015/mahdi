const leftArrow = '<img src="../../img/leftArrow (1).png" alt="leftArrow">';
const rightArrow = '<img src="../../img/leftArrow (2).png" alt="rightArrow">';


    $('.owl-product').owlCarousel({
        loop:true,
        margin:0,
        mouseDrag: true,
        nav: true,
        navText: [
            leftArrow,rightArrow
        ],
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            600:{
                items:3
            },            
            960:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });


//   CATEGORY CAROUSEL JQUERY CODE START HERE
    
    $('.owl_category').owlCarousel({

        loop:true,
        margin:0,
        mouseDrag: true,
        nav: true,
        navText: [
            leftArrow,rightArrow
        ],
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            600:{
                items:3
            }
        }
    });


// WHAT CLIENT SAY ABOUT US---------------------------------
$('.client_carousel').owlCarousel({

    loop:true,
    margin:0,
    mouseDrag: true,
    nav: true,
    navText: [
        leftArrow,rightArrow
    ],
    autoplay: true,
    autoplayTimeout: 8000,
    dots: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        // 500:{
        //     items:2
        // },
        600:{
            items:2
        }
    }
});

// NEW CATEGORY

$('.new_product').owlCarousel({
    loop:true,
    margin:0,
    mouseDrag: true,
    nav: true,
    navText: [
        leftArrow,rightArrow
    ],
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1024:{
            items:4
        }
    }
});






