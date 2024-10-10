window.addEventListener('scroll', function() {
    var searchContainer = document.getElementById('main-search');
    var offerId = document.getElementById('main-offers');
    var sticky = searchContainer.offsetTop;
    const scrollPosition = window.scrollY;
    var blurValue = Math.min(scrollPosition / 50, 20);
    blurValue = blurValue*4;
    console.log(blurValue);
    //offerId.classList.add('bluring');
    offerId.style.filter = `blur(${blurValue}px)`;
    if (scrollPosition > sticky) {
        searchContainer.classList.add('fixed');
    } else {
        searchContainer.classList.remove('fixed');
        offerId.classList.remove('bluring');
    }
});

