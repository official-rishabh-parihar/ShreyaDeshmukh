let tl = gsap.timeline();

tl.from('.menu', {
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .3
})
.from('.profile_pic', {
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .1
})
.from('.name', {
    y: -20,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .1
})
.from('.detail', {
    y: -20,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .1
})
.from('.social_links', {
    y: -10,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .1
})
// .from('.social_links i', {
//     stagger: .2,
//     y: -40,
//     opacity: 0,
//     ease: 'expo.easeInOut',
// })