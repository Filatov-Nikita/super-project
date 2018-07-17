window.onload = function () {
    var el = document.getElementById('lines');
    setTimeout(() => {
        el.style.transform = 'translateX(0)';
    }, 500);
    var text = document.querySelector('.textBlock__subtitle');
    text.addEventListener('mouseover', function () {
        el.style.transform = 'translateX(40px)';
    });
    text.addEventListener('mouseout', function () {
         el.style.transform = 'translateX(0)'
    })
}

$(function(){
    var links = $('.scroll');
    links.on('click', function (e) {
       e.preventDefault(); 
       link = $(this);
       var target = link.attr('href');
       $('html, body').stop(true).animate({
       scrollTop: $(target).offset().top
       }, 700);
    });
});

