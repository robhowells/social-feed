var socialFeed = (function ($) {

    var instagramData = [];

    var trimText = function(text) {
        return (text.length > 120) ? text.substring(0, 120) + '...' : text; 
    };

    var renderData = function() {
        $.each(instagramData, function( index, value ) {
            $('.social-feed-wrapper').append(value.imgBlock);      
        });
    };

    var addDataType = function() {

        $.each(instagramData, function(index, value) {
 
            value.dataType = 'instagram';
            value.imgBlock = '<div class="social-feed-block" style="background-image: url(' + value.images.standard_resolution.url + ')">'
                                + '<a class="social-feed-block-link" href="' + value.link + '" target="_blank" data-caption-text="' +  trimText(value.caption.text) +'">'
                                + '</a>'
                            + '</div>'

        });

        renderData();
    };

    var getData = function() {

    /*  Section 1: dummy data set
        ________________________

        Remove this and uncomment Section 2 once you've set up an Instagram API endpoint */

        var instagram = [
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            },
            {
                link: "www.google.com",
                images: {
                    standard_resolution: {
                        url: "http://placehold.it/500x500",
                        width: 500,
                        height: 500
                    }
                },
                caption: {
                    text: "Lorem ipsum caption text",
                },
            }

        ]

        instagramData = instagram;

        addDataType();


    /*  End Section 1
        ________________________

    */


    /*  Section 2: call to API to get real data
        ________________________

        Uncomment this and remove Section 1 once you've set up an Instagram API endpoint and added your access token */

        //var instagram = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=**ACCESSTOKENGOESHERE**';

        /*$.when(

            $.ajax({   
                type: 'GET',
                url: instagram,
                dataType: 'jsonp',
                success: function(instagram) {
                    instagramData = instagram.data.slice(0,8);
                }
            })

        ).then(function() {
            addDataType();
        }); */


        /*  End Section 2
            ________________________

        */

        
    };

    var init = function() {
        getData();
    };

    return {
        init: init
    };

})(jQuery);