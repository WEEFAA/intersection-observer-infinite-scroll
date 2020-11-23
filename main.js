"use strict";

console.log('Intersection API Demo')
let postsContainer = document.getElementById("#posts")

const options = {
    root: postsContainer,
    rootMargin: '0px',
    threshold: 1.0
}

const observer = new IntersectionObserver(callback, options)

let calls = 0
function callback(entries, obs){
    const entry = entries[0]
    // ignore if it doesn't intersect
    if(!entry.isIntersecting) return null;
    // track calls
    calls++ 
    const counter = document.querySelector("#request-counter")
    const cont = document.querySelector(".posts")
    // un-observe the previous target
    observer.unobserve(cont.lastChild)
    // populate new items to posts container
    const randoms = getRandoms(5)
    populate(cont, randoms)
    // track last updated item
    const newTarget = cont.lastChild
    observer.observe(newTarget)

    // update counter
    counter.textContent = `Request Counter: ${calls}`
}

// set the initial observed Item
observer.observe(document.querySelector(".posts").lastChild)