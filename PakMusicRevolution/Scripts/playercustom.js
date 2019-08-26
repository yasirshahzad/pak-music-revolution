

    $(".example").musicPlayer({
        elements: ['artwork', 'information', 'controls', 'progress', 'time', 'volume'], // ==> This will display in  the order it is inserted
        //elements: [ 'controls' , 'information', 'artwork', 'progress', 'time', 'volume' ],
        //controlElements: ['backward', 'play', 'forward', 'stop'],
        //timeElements: ['current', 'duration'],
        //timeSeparator: " : ", // ==> Only used if two elements in timeElements option
        //infoElements: [  'title', 'artist' ],

        //volume: 10,
        //autoPlay: true,
        //loop: true,

        onPlay: function () {
            $('body').css('background', 'black');
        },
        onPause: function () {
            $('body').css('background', 'green');
        },
        onStop: function () {
            $('body').css('background', '#141942');
        },
        onFwd: function () {
            $('body').css('background', 'white');
        },
        onRew: function () {
            $('body').css('background', 'blue');
        },
        volumeChanged: function () {
            $('body').css('background', 'red');
        },
        progressChanged: function () {
            $('body').css('background', 'orange');
        },
        trackClicked: function () {
            $('body').css('background', 'brown');
        },
        onMute: function () {
            $('body').css('background', 'grey');
        },
    });

$('.example3 .playlist').on('init', function (event, slick) {

    $(".example3").musicPlayer({
        playlistItemSelector: '.slick-slide:not(.slick-cloned) .song-item',
        elements: ['artwork', 'information', 'controls', 'progress', 'time', 'volume'], // ==> This will display in  the order it is inserted
        //elements: [ 'controls' , 'information', 'artwork', 'progress', 'time', 'volume' ],
        //controlElements: ['backward', 'play', 'forward', 'stop'],
        //timeElements: ['current', 'duration'],
        //timeSeparator: " : ", // ==> Only used if two elements in timeElements option
        //infoElements: [  'title', 'artist' ],

        //volume: 10,
        autoPlay: true,
        loop: true,

        onPlay: function () {
            $('body').css('background', 'black');
        },
        onPause: function () {
            $('body').css('background', 'green');
        },
        onStop: function () {
            $('body').css('background', '#141942');
        },
        onFwd: function () {
            $('body').css('background', 'white');
            slideToActive();
        },
        onRew: function () {
            $('body').css('background', 'blue');
            slideToActive();
        },
        volumeChanged: function () {
            $('body').css('background', 'red');
        },
        seeked: function () {
            $('body').css('background', 'orange');
        },
        trackClicked: function () {
            $('body').css('background', 'brown');
        },
        onMute: function () {
            $('body').css('background', 'grey');
        },

    });

});
//slick slider initialisation
$(".example3 .playlist").slick({
    arrows: true,
    dots: true
});

slideToActive = function () {
    var slideIndex = $('.slick-slide:not(.slick-cloned) .song-item.active').closest('.slick-slide').attr('data-slick-index');
    $('.example .playlist').slick('slickGoTo', slideIndex);
}

$('.slick-dots button').click(function () {
    var index = $(this).text() - 1;
    index = '[data-slick-index="' + index + '"]';
    $('.slick-slide:not(.slick-cloned)' + index + ' .song-item a').click();
});

$(".example2").musicPlayer({
    //volume: 10,
    //elements: ['artwork', 'controls', 'progress', 'time', 'volume'],
    //playerAbovePlaylist: false,
    // autoPlay: true,
    // loop: true,
    onLoad: function () {
        //Add Audio player
        plElem = "<div class='pl'></div>";
        $('.example2').find('.player').append(plElem);
        // show playlist
        $('.pl').click(function (e) {
            e.preventDefault();
            $('.example2').find('.playlist').toggleClass("hidden");
        });
    },

});






