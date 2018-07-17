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


