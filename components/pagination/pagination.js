/**
 * Created by Clint_Batte on 5/7/2015.
 */
angular.module('dellUiComponents')

    .directive('tapToLoad', function() {
        return {
            restrict: 'C',
            link: function($scope, $element, attrs ) {

                $(document).ready(function () {

                    $('.news-pagination li').slice(5).hide();

                    $('#loadmore').jqPagination({
                        max_page: Math.ceil($('.news-pagination li').length / 5),
                        paged: function (page) {
                            $('.news-pagination li').hide();
                            $('.news-pagination li').slice((page - 1) * 5, (page * 5)).fadeIn('slow');
                        }
                    });
                });

            }
        };
    })

    .directive('pagination', function() {
        return {
            restrict: 'C',
            link: function($scope, $element, attrs ) {
                $('.pagination').jqPagination({
                    paged: function(page) {
                    }
                });
            }
        };
    })

    .directive('loadMore', function() {
        return {
            restrict: 'C',
            link: function($scope, $element, attrs ) {
                var options = {
                    lazyLoad: typeof attrs.lazyLoad !== 'undefined' ? attrs.lazyLoad === "true" : false,
                    scrollTarget: typeof attrs.scrollTarget !== 'undefined' ? attrs.scrollTarget : window,
                    fadeIn: typeof attrs.fadeIn !== 'undefined' ? attrs.fadeIn === "true" : true,
                    loadMoreButtonText: typeof attrs.loadMoreButtonText !== 'undefined' ? attrs.loadMoreButtonText : "Load more",
                    loadMoreIncrement: typeof attrs.loadMoreIncrement !== 'undefined' ? parseInt(attrs.loadMoreIncrement) : 5,
                };
                $element.dellUIloadMore(options);
            }
        };
    });
