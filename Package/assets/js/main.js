// // ;
// // (function($) {
// //     $(document).ready(function() {
// //         /*-------------------------------------------------------------------------------
// //         javaScript for header
// //         -------------------------------------------------------------------------------*/
// //         $('.navbar-toggler').on('click', function () {
// //             $('.offcanvas-wraper, .navbar-toggler, .mobile-header').toggleClass('active')
// //         })

// //         $(function () {
// //             var header = $('.header-area, .mobile-header')
// //             $(window).scroll(function () {
// //             var scroll = $(window).scrollTop()
      
// //             if (scroll >= 50) {
// //                 header.addClass('sticky')
// //             } else {
// //                 header.removeClass('sticky')
// //             }
// //             })
// //         })

// //         /*-------------------------------------------------------------------------------
// //         testimonial Slider 
// //         -------------------------------------------------------------------------------*/
// //         $('.banner-slider').slick({
// //             slidesToShow: 1,
// //             slidesToScroll: 1,
// //             dots: false,
// //             arrows: true,
// //             prevArrow: '<svg class="prev" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
// //             nextArrow: '<svg class="next" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>',
// //             fade: false,
// //             autoplay: false,
// //             speed: 1000
// //         });

// //         /*-------------------------------------------------------------------------------
// //         Product Details Slider 
// //         -------------------------------------------------------------------------------*/
// //         $('.big-thumbnail-slider').slick({
// //             slidesToShow: 1,
// //             slidesToScroll: 1,
// //             arrows: false,
// //             fade: true,
// //             asNavFor: '.product-details-thumb-nav'
// //         });
// //         $('.product-details-thumb-nav').slick({
// //             slidesToShow: 3,
// //             slidesToScroll: 1,
// //             asNavFor: '.big-thumbnail-slider',
// //             dots: true,
// //             centerMode: true,
// //             focusOnSelect: true
// //         });
        

// //         const slider_input = document.getElementById('slider_input'),
// //         slider_thumb = document.getElementById('slider_thumb'),
// //         slider_line = document.getElementById('slider_line');

// //         function showSliderValue() {
// //             // Clear the content of slider_thumb
// //             slider_thumb.innerHTML = '';

// //             // Create a span element
// //             const spanElement = document.createElement('span');

// //             // Set the content of the span element to the slider value
// //             spanElement.innerHTML = slider_input.value;

// //             // Append the span element to the slider_thumb
// //             slider_thumb.appendChild(spanElement);

// //             // Calculate position and set styles
// //             const bulletPosition = (slider_input.value / slider_input.max),
// //                     space = slider_input.offsetWidth - slider_thumb.offsetWidth;

// //             slider_thumb.style.left = (bulletPosition * space) + 'px';
// //             slider_line.style.width = slider_input.value + '%';
// //         }

// //         // Initial call to showSliderValue
// //         showSliderValue();

// //         // Add event listeners
// //         window.addEventListener("resize", showSliderValue);
// //         slider_input.addEventListener('input', showSliderValue, false);



// //         let minusBtn = document.getElementById("minus-btn");
// //         let count = document.getElementById("count");
// //         let plusBtn = document.getElementById("plus-btn");

// //         let countNum = 0;
// //         count.innerHTML = countNum;

// //         minusBtn.addEventListener("click", () => {
// //             if (countNum > 0) {
// //                 countNum -= 1;
// //                 count.innerHTML = countNum;
// //             }
// //         });

// //         plusBtn.addEventListener("click", () => {
// //             countNum += 1;
// //             count.innerHTML = countNum;
// //         });



// //     });
// // }(jQuery));












// (function($) {
//     $(document).ready(function() {
//         // Header Functionality
//         // Countdown Timer Functionality
//         function setupCountdownTimers() {
//             function cdtd(targetDate, targetElement) {
//                 // ... (Your existing countdown timer logic)
//             }

//             // Example usage:
//             cdtd("February 18, 2024", "#drawTimer");
//             cdtd("February 28, 2024", "#productTimer1");
//             cdtd("March 15, 2024", "#productTimer2");
//             cdtd("March 16, 2024", "#productTimer3");
//             cdtd("March 16, 2024", "#productTimer4");
//             cdtd("March 16, 2024", "#productTimer5");
//             cdtd("March 28, 2024", "#productTimer6");
//         }

//         // Initialize Functions
//         setupQuantityCounter();
//         setupCountdownTimers();
//     });
// })(jQuery);


;
(function ($) {
    const THEME = {
        init() {
            this.headerSticky();
            this.sliders();
            this.customSliderRange();
            this.setupQuantityCounter();
            this.setupCountdownTimers();
        },
    
        headerSticky() {  
            $('.navbar-toggler').on('click', function () {
                $('.offcanvas-wraper, .navbar-toggler, .mobile-header').toggleClass('active');
            });

            var header = $('.header-area, .mobile-header');
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });

            $('.anonymous-close').on('click', function () {
                $('.anonymous-bar').hide();
            });
        },
    
        sliders() {
            /*-------------------------------------------------------------------------------
            Banner Slider 
            -------------------------------------------------------------------------------*/
            if($('.slick-slider').length){
                var $slider = $('.slick-slider');
                $slider.each(function () {
                    $(this).slick({
                        prevArrow: $(this).data('prev') ? $(this).data('prev') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path></svg>',
                        nextArrow: $(this).data('next') ? $(this).data('next') : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>',
                        speed: 1000
                    });
                })
            }

            
            /*-------------------------------------------------------------------------------
            Product Details Slider 
            -------------------------------------------------------------------------------*/
            if($('.big-thumbnail-slider').length){
                $('.big-thumbnail-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.product-details-thumb-nav'
                });
            }
            if($('.product-details-thumb-nav').length){
                $('.product-details-thumb-nav').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.big-thumbnail-slider',
                    dots: true,
                    focusOnSelect: true
                });
            }

        },

        customSliderRange() {
            const $slider_wrapper = $('.range-slider');
            const $slider_input = $slider_wrapper.find('.range-slider_input');
            const $slider_thumb = $slider_wrapper.find('.range-slider_thumb');
            const $slider_line = $slider_wrapper.find('.range-slider_line-fill');
        
            // Check if the required elements exist
            if ($slider_input.length === 0 || $slider_thumb.length === 0 || $slider_line.length === 0) {
                return;
            }
        
            function showSliderValue() {
                const value = $slider_input.val();
                const max = $slider_input.prop('max');
                const percentage = (value / max) * 100;
                
                // Adjust the left position of the thumb
                const thumbWidth = $slider_thumb.width();
                const space = $slider_input.width() - thumbWidth;
                const leftPosition = (percentage / 100) * space;
        
                // Set the left position and width
                $slider_thumb.css('left', leftPosition + 'px');
                $slider_line.css('width', percentage + '%');
        
                // Display the value inside the thumb
                $slider_thumb.html(`<span>${value}</span>`);
            }
        
            showSliderValue();
        
            $(window).on("resize", showSliderValue);
            $slider_input.on('input', showSliderValue);
        },
        
        
        setupQuantityCounter() {
            let QuantityMinus = document.querySelectorAll('[quantity-minus]');
            let QuantityPlus = document.querySelectorAll('[quantity-plus]');
        
            // Check if the required elements exist
            if (QuantityMinus.length === 0 || QuantityPlus.length === 0) {
                return;
            }
        
            QuantityMinus.forEach(button => {
                button.addEventListener("click", function() {
                    let targetId = this.getAttribute('quantity-minus');
                    let InputField = document.querySelector('[quantity-target="' + targetId + '"]');
                    if (InputField && InputField.value > 0) {
                        InputField.value = parseInt(InputField.value, 10) - 1;
                    }
                });
            });
        
            QuantityPlus.forEach(button => {
                button.addEventListener("click", function() {
                    let targetId = this.getAttribute('quantity-plus');
                    let InputField = document.querySelector('[quantity-target="' + targetId + '"]');
                    if (InputField) {
                        InputField.value = parseInt(InputField.value, 10) + 1;
                    }
                });
            });
        },
        
        setupCountdownTimers() {
            if ($('.time-countdown').length) {
                $('.time-countdown').each(function () {
                    var $that = $(this);
                    var $date = $(this).data('date');
        
                    function countdown(targetDate, targetElement) {
                        var now = new Date();
                        var endDate = new Date(targetDate + " 23:59:59");
                        var timeDiff = endDate.getTime() - now.getTime();
                        var seconds = Math.floor(timeDiff / 1000);
                        var minutes = Math.floor(seconds / 60);
                        var hours = Math.floor(minutes / 60);
                        var days = Math.floor(hours / 24);
        
                        hours %= 24;
                        minutes %= 60;
                        seconds %= 60;
        
                        if (targetElement.find('.timer--days')) {
                            targetElement.find('.timer--days').html(days);
                        }
                        if (targetElement.find('.timer--hours')) {
                            targetElement.find('.timer--hours').html(hours);
                        }
                        if (targetElement.find('.timer--mins')) {
                            targetElement.find('.timer--mins').html(minutes);
                        }
                        if (targetElement.find('.timer--secs')) {
                            targetElement.find('.timer--secs').html(seconds);
                        }
        
                        // Update the timer every second
                        setTimeout(function () {
                            countdown(targetDate, targetElement);
                        }, 1000);
                    }
        
                    // Initial call to start the countdown
                    countdown($date, $that);
                });
            }
        }
        
        
        

    };
  
    $(document).ready(function () {
      THEME.init();    
    });


    var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
    $(document).ready(function(){
        var option = '<option value="day">Day</option>';
        var selectedDay="day";
        for (var i=1;i <= Days[0];i++){ //add option days
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $('#day').append(option);
        $('#day').val(selectedDay);

        var option = '<option value="month">Month</option>';
        var selectedMon ="month";
        for (var i=1;i <= 12;i++){
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $('#month').append(option);
        $('#month').val(selectedMon);

        var option = '<option value="month">Month</option>';
        var selectedMon ="month";
        for (var i=1;i <= 12;i++){
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $('#month2').append(option);
        $('#month2').val(selectedMon);
    
        var d = new Date();
        var option = '<option value="year">Year</option>';
        selectedYear ="year";
        for (var i=1930;i <= d.getFullYear();i++){// years start i
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $('#year').append(option);
        $('#year').val(selectedYear);
    });
    function isLeapYear(year) {
        year = parseInt(year);
        if (year % 4 != 0) {
            return false;
        } else if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        } else {
            return true;
        }
    }

    function change_year(select)
    {
        if( isLeapYear( $(select).val() ) )
        {
                Days[1] = 29;
                
        }
        else {
            Days[1] = 28;
        }
        if( $("#month").val() == 2)
                {
                    var day = $('#day');
                    var val = $(day).val();
                    $(day).empty();
                    var option = '<option value="day">Day</option>';
                    for (var i=1;i <= Days[1];i++){ //add option days
                            option += '<option value="'+ i + '">' + i + '</option>';
                }
                    $(day).append(option);
                    if( val > Days[ month ] )
                    {
                            val = 1;
                    }
                    $(day).val(val);
                }
    }

    function change_month(select) {
        var day = $('#day');
        var val = $(day).val();
        $(day).empty();
        var option = '<option value="day">Day</option>';
        var month = parseInt( $(select).val() ) - 1;
        for (var i=1;i <= Days[ month ];i++){ //add option days
            option += '<option value="'+ i + '">' + i + '</option>';
        }
        $(day).append(option);
        if( val > Days[ month ] )
        {
            val = 1;
        }
        $(day).val(val);
    }
  
  })(jQuery);