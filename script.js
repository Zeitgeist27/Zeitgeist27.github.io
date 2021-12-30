$(document).ready(function () {
    spy();
    galshow();
    wakshow();
    samshow();
    mempelai();
    acara();
    ucapan();
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

    setTimeout(function () {
        $('#putar').css('transition', '1s').css('opacity', '0').delay(8000).html('Buka Undangan').css('transition', '1s').css('opacity', '1');
        $('#putar').removeAttr('disabled')
        $('#putar').click(function () {
            $('.buka').slideUp();
            $('#myVideo')[0].play();
            samshow();
        });
    }, 1500, 'easeInOutExpo')


    $('.was-validated').keyup(function () {
        let name = $('input[name="nama"]').val();
        let msg = $('textarea').val();
        if (name != '') {
            $('.name-validate').fadeOut();
        }else{
            $('.name-validate').fadeIn();
        }
        if (msg != '') {
            $('.msg-validate').fadeOut();
        }else{
            $('.msg-validate').fadeIn();
        }
    });

    $('#kirim').click(function () {
        $(this).addClass('d-none');
        $('#load').removeClass('d-none');
    });

    $('button.close').click(function () {
        $('.alert').removeClass('show');
    });


    const scriptURL = 'https://script.google.com/macros/s/AKfycbxFc2IJ3f-3PpLGtuBAP_4EwI0Ia2lVWgLW85j1GLn-CdXltSME-FhlDrTFth8DDgd1/exec'
    const form = document.forms['form-contact']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            $('.alert').addClass('show');
            $('#load').addClass('d-none');
            $('#kirim').removeClass('d-none');
            form.reset();
        })
        .catch(error => {
            $('.alert').addClass('alert-danger');
            $('.subjek').html('Maaf!');
            $('.alert-msg').addClass('Pesan anda tidak berhasil saya sampaikan');
            $('.alert').addClass('show');
            $('#load').addClass('d-none');
            $('#kirim').removeClass('d-none');
        })
    })

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
            }, 100, 'easeInOutExpo');
        }
        e.preventDefault(e);
    });

    $(window).scroll(function () {
        spy();
        galshow();
        wakshow();
        samshow();
        mempelai();
        acara();
        ucapan();
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

    function samshow() {
        let position = $(document).scrollTop() + 400;
        if ($('#samshow').offset().top <= position) {
            let delay = 100
            $('#samshow .gal').each(function (i) {
                setTimeout(function () {
                    $('#samshow .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        }
    }

    function galshow() {
        let position = $(document).scrollTop() + 300;
        if ($('#prewed').offset().top <= position) {
            let delay = 100
            $('#prewed .gal').each(function (i) {
                setTimeout(function () {
                    $('#prewed .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        } else {
            $('#prewed .gal').removeClass('gsow');
        }
    }

    function wakshow() {
        let position = $(document).scrollTop() + 400;
        if ($('#waktu').offset().top <= position) {
            let delay = 100
            $('#waktu .gal').each(function (i) {
                setTimeout(function () {
                    $('#waktu .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        } else {
            $('#waktu .gal').removeClass('gsow');
        }
    }

    function mempelai() {
        let position = $(document).scrollTop() + 400;
        if ($('#mempalai').offset().top <= position) {
            let delay = 100
            $('#mempalai .gal').each(function (i) {
                setTimeout(function () {
                    $('#mempalai .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        } else {
            $('#mempalai .gal').removeClass('gsow');
        }
    }

    function acara() {
        let position = $(document).scrollTop() + 400;
        if ($('#acara').offset().top <= position) {
            let delay = 100
            $('#acara .gal').each(function (i) {
                setTimeout(function () {
                    $('#acara .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        } else {
            $('#acara .gal').removeClass('gsow');
        }
    }

    function ucapan() {
        let position = $(document).scrollTop() + 400;
        if ($('#acara').offset().top <= position) {
            let delay = 100
            $('#acara .gal').each(function (i) {
                setTimeout(function () {
                    $('#acara .gal').eq(i).addClass('gsow');
                }, delay += 100)
            })
        } else {
            $('#acara .gal').removeClass('gsow');
        }
    }

});
