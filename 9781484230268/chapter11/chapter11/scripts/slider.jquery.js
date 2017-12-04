(function($) {
    
       $.fn.slider = function(options){
       
           let defaults = {};
           let settings = $.extend({}, defaults, options);
           return this.each( function(){
              
                let $slider = $(this);
                let $sliderList = $slider.children('ul');
                let $sliderItems = $sliderList.children('li');
                let $allButtons = $slider.find('.button');
                let $buttons = {
                    forward: $allButtons.filter('forward'), back: $allButtons.filter('back')
                };
                $allButtons.on('click', function(event){
                    var isBackButton = $(this).hasClass('back');
                    if(!isBackButton && isAtEnd()){
                        //loop to the beginning
                    }
                    animateSlider((isBackButton ? "+" : "-"), 1000)
                    event.preventDefault();
               })


            var animateSlider = function(direction, duration, callback){
                $sliderList.stop(true, true).animate({ 
                    'margin-left': direction + '=300px'
                    }, duration, callback);
                };

            var animateSliderToMargin = function(margin, duration, callback){
                $sliderList.stop(true, true).animate({
                    "margin-left": margin
                }, duration, callback)
            }

            var isAtBeginning = function(){
                return getLeftMargin() === 0;
            }

            var isAtEnd = function(){
                var endMargin = ($sliderItems.length - 1) *
                $sliderItems.first().children('img').width();
                return getLeftMargin() === -endMargin;
            };

            var getLeftMargin = function(){
                return parseInt($sliderList.css('margin-left'), 10)
            }

        

           });


       };





    
 }(jQuery));
   