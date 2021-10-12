const WL_mediaQuery = window.matchMedia('(min-width: 768px)');
let WL_Carousel_Selector = document.querySelector('#WL_Carousel_Sec'),
    WL_Ani_duration = 2,
    WL_Bkgrnd_Size, WL_Bkgrnd_Final;

if (WL_mediaQuery.matches) {
    // Then trigger an alert
    console.log('Desktop!')
    WL_Bkgrnd_Size = '105%';
    WL_Bkgrnd_Final = '100%';
}else{
    console.log('Mobile!')
    WL_Bkgrnd_Size = '300%';
    WL_Bkgrnd_Final = '220%';
}

    gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
    gsap.to('.active',{duration:WL_Ani_duration,backgroundSize:WL_Bkgrnd_Final,ease:'none'})

    // Animate Other Slides....
    WL_Carousel_Selector.addEventListener('slid.bs.carousel', function(event) {
        // console.log("carousel do something");
        gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
        gsap.to('.active',{duration:WL_Ani_duration,backgroundSize:WL_Bkgrnd_Final,ease:'none'})
    });




// if (WL_mediaQuery.matches) {
//     // Then trigger an alert
//     console.log('Desktop!')
//     // Animate first Slide....

//     let WL_Bkgrnd_Size = '105%';

//     gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
//     gsap.to('.active',{duration:2,backgroundSize:'100%',ease:'none'})

//     // Animate Other Slides....
//     WL_Carousel_Selector.addEventListener('slid.bs.carousel', function(event) {
//         // console.log("carousel do something");
//         gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
//         gsap.to('.active',{duration:2,backgroundSize:'100%',ease:'none'})
//     });
// }else{
//     console.log('Mobile!')
//     let WL_Bkgrnd_Size = '300%';
//     gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
//     gsap.to('.active',{duration:2,backgroundSize:'260%',ease:'none'})

//     // Animate Other Slides....
//     WL_Carousel_Selector.addEventListener('slid.bs.carousel', function(event) {
//         // console.log("carousel do something");
//         gsap.set('.carousel-item',{backgroundSize:WL_Bkgrnd_Size})
//         gsap.to('.active',{duration:2,backgroundSize:'260%',ease:'none'})
//     });
// }

