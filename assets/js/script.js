
// $(document).ready(function () {
//     $('.websites-slider').owlCarousel({
//         loop: true,
//         margin: 20,
//         nav: false,
//         dots: true,
//         autoplay: false,
//         slideBy: 1,
//         responsive: {
//             0: {
//                 items: 1,
//                 stagePadding: 50
//             },
//             600: {
//                 items: 2,
//                 stagePadding: 50
//             },
//             1000: {
//                 items: 3.5,
//                 stagePadding: 100
//             }
//         }
//     });

//     // Click to scroll right
//     $('.website-card').on('click', function () {
//         $('.websites-slider').trigger('next.owl.carousel');
//     });
// });
$(document).ready(function () {
    var owl = $('.websites-slider');

    // Initialize Owl Carousel
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        slideBy: 1,
        responsive: {
            0: {
                items: 1,
                // stagePadding: 0
            },
            600: {
                items: 2,
                // stagePadding: 50
            },
            1000: {
                items: 3,
                stagePadding: 50
            },
        }
    });

    // Click event for next button
    $('.next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Click event for previous button
    $('.prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});
// testiminial slider 
$(document).ready(function () {
    var owl = $('.testimonial-slider');

    // Initialize Owl Carousel
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        slideBy: 1,
        responsive: {
            0: {
                items: 1,
                // stagePadding: 50
            },
            600: {
                items: 2,
                // stagePadding: 50
            },
            1000: {
                items: 3,
                // stagePadding: 100
            }
        }
    });

    // Click event for next button
    $('.testimonial-next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Click event for previous button
    $('.testimonial-prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});


