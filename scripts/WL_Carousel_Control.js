// Animate first Slide....
let WL_Carousel_Selector = document.querySelector('#WL_Carousel_Sec'),
    WL_Bkgrnd_Size = '105%';
    
gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
gsap.to('.active',{duration:2,backgroundSize:'100%',ease:'none'})

// Animate Other Slides....
WL_Carousel_Selector.addEventListener('slid.bs.carousel', function(event) {
    // console.log("carousel do something");
    gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
    gsap.to('.active',{duration:2,backgroundSize:'100%',ease:'none'})
});