/**
 * Created by Clint_Batte on 8/6/2015.
 */

angular.module('dellUiComponents')

    .directive('contentGallery', function($timeout,$rootScope){
        // Runs during compile
        return {
            restrict: 'C',
            link: function($scope, $element, iAttrs, controller ) {

                    $element.find('.content-gallery-show-more').on('click',function(e){
                        e.preventDefault();
                        var $this = $(this);
                        $this.toggleClass('content-gallery-show-more');
                        if($this.hasClass('content-gallery-show-more')){
                            $this.text('See More');
                        } else {
                            $this.text('See Less');
                        }


                        var parentLi = $(e.currentTarget).parents('li')[0],
                            allListItems = $element.find('li'),
                            rowWidth= 0,
                            rowMaxWidth = Math.abs($('.container').css('width').replace(/px/,'')),
                            targetFound,
                            done,
                            content;

                        $element.find('.open').removeClass('open');
                        $element.find('li.details-container').remove();
                        $(parentLi).addClass('open');

                        _.each(allListItems,function(i){
                            if(!done) {
                                var itemWidth = Math.abs(($(i).css('width')).replace(/px/, ''));
                                if (!targetFound) {
                                    targetFound = $(i).hasClass('open');
                                    content = $(i).find('.content-gallery-details').html();
                                }
                                rowWidth = rowWidth + itemWidth;
                                console.log("item width", itemWidth, rowWidth, rowMaxWidth);

                                if (rowWidth >= rowMaxWidth) {
                                    if (targetFound) {
                                        console.log("Found target and inserting!!!");
                                        $(i).after('<li class="col-xs-12 details-container"><span class="close"><i class="icon-ui-close"></i></span>'+content+'</li>');
                                        $('.details-container .close').on('click',function(e){
                                            e.preventDefault();
                                            $element.find('.open').removeClass('open');
                                            $element.find('li.details-container').remove();
                                        });
                                        $('.details-container').on('click',function(e){
                                            e.preventDefault();
                                            $element.find('.open').removeClass('open');
                                            $element.find('li.details-container').remove();
                                        });
                                        //$('.content-gallery-show-more').on('click',function(e){
                                        //    e.preventDefault();
                                        //    $element.find('.open').removeClass('open');
                                        //    $element.find('li.details-container').remove();
                                        //});
                                        done = true;
                                    } else {

                                        rowWidth = 0;
                                    }

                                }
                            }
                        });


                    });
                    console.log('++++++++++++++++++++ It Fired',$scope, $element, iAttrs, controller );

            }
        };
    });
