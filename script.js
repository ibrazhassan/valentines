$(document).ready(function () {
    $('.valentines').hover(function () {
        $('.card').css('top', '-90px');
    }, function () {
        $('.card').css('top', '5px');
    });

    $('.card').on('transitionend', function () {
        $('body').addClass('fade-out');
        setTimeout(function () {
            window.location.href = 'willyoubemyvalentine.html';
        }, 2000);
    });

    $('.yes-btn').click(function () {
        alert('Yay! ❤️');
    });

    $('.no-btn').click(function () {
        alert('Oh no! 💔');
    });
});

