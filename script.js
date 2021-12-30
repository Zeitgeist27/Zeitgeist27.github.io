$(document).ready(function () {
    spy();
    const pelaksanaan = new Date("Jan 7, 2022 00:00:00").getTime();

    let x = setInterval(() => {
        let saatIni = new Date().getTime();
        let pertepatan = pelaksanaan - saatIni;
        let hari = Math.floor(pertepatan / (1000 * 60 * 60 * 24));
        let jam = Math.floor((pertepatan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let menit = Math.floor((pertepatan % (1000 * 60 * 60)) / (1000 * 60));
        let detik = Math.floor((pertepatan % (1000 * 60)) / 1000);

        if (hari < 0 && jam < 0 && menit < 0 && detik < 0) {
            $('#waktu').addClass('d-none');
            $('#sekarang').show();
        } else {
            $('#sekarang').hide();
        }

        $('#hari').html(hari);
        $('#jam').html(jam);
        $('#menit').html(menit);
        $('#detik').html(detik);


    }, 1050);

    $('#galery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },

    });

    let host = document.URL;
    $('.vid').click(function () {
        console.log('oke');
        let url = $(this).data('url');
        $('body').prepend(`<div class="pop"><video class="video" controls><source src="` + host + url + `" type="video/mp4"></video></div>`);
        $('.pop').click(() => {
            $('.pop').remove('.pop');
        })
    });

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            660: {
                slidesPerView: 3,
            },
        }
    });

    $('#putar').click(function () {
        $('.buka').slideUp();
        $('#myVideo')[0].play();
    });
    $('#stop').click(function () {
        if ($('#stop i').attr('class') == 'fas fa-pause') {
            $('#stop i').attr('class', 'fas fa-play');
            $('#myVideo')[0].pause();
        } else {
            $('#stop i').attr('class', 'fas fa-pause');
            $('#myVideo')[0].play();
        }
    });




    $("a.scroll").on('click', function (e) {
        let hash = this.hash;
        if (hash !== "") {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 1000, 'easeInOutExpo');
        }
        e.preventDefault(e);
    });

    $(window).scroll(function () {
        spy();
        galshow();
        wakshow();
    });

    function spy() {
        let offTop = {};
        let i = 0
        $('section').each(function (e) { offTop[$('section')[e].id] = $('section')[e].offsetTop - 200; });
        let position = $(document).scrollTop();
        for (i in offTop) {
            if (offTop[i] <= position) {
                $('a.scroll').addClass('text-white-50');
                $('a.text-white').removeClass('text-white');
                $('a[href="#' + i + '"]').removeClass('text-white-50');
                $('a[href="#' + i + '"]').addClass('text-white');
            }
        }
    }

    // Animation

    function galshow() {
        let position = $(document).scrollTop() + 300;
        if ($('#prewed').offset().top <= position) {
            let delay = 200
            $('#prewed .gal').each(function (i) {
                setTimeout(function () {
                    $('#prewed .gal').eq(i).addClass('gsow');
                }, delay += 200)
            })
        } else {
            $('#prewed .gal').removeClass('gsow');
        }
    }

    function wakshow() {
        let position = $(document).scrollTop() + 400;
        if ($('#waktu').offset().top <= position) {
            let delay = 200
            $('#waktu .gal').each(function (i) {
                setTimeout(function () {
                    $('#waktu .gal').eq(i).addClass('gsow');
                }, delay += 200)
            })
        } else {
            $('#waktu .gal').removeClass('gsow');
        }
    }

});