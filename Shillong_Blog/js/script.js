$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Optional: Add a subtle fade-in effect for sections on scroll
    $(window).on('scroll', function() {
        $('.intro-section, .featured-posts-section, .attraction-card, .culture-section, .gallery-item, .contact-form-section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('visible');
            }
        });
    });

    // Handle contact form submission (basic functionality)
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Show a success message
        $('#form-message').removeClass('d-none').text('Thank you for your message! We will get back to you soon.');
        
        // Clear the form fields
        $('#contactForm')[0].reset();
    });

    // Initial check for visibility on page load
    $(window).trigger('scroll');
});

// Add or update the scroll function in your script.js file
$(window).on('scroll', function() {
    // Add "scrolled" class to header on scroll
    if ($(window).scrollTop() > 50) {
        $('.main-header').addClass('scrolled');
    } else {
        $('.main-header').removeClass('scrolled');
    }
    
    // (Keep your existing code for fade-in effects here)
    $('.intro-section, .featured-posts-section, .attraction-card, .culture-section, .gallery-item, .contact-form-section').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
            $(this).addClass('visible');
        }
    });
});