const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []

//  Unsplash API
const count = 30
const apiKey = 'Lph_G9PD1rygfByOkPJtXtFJfobh2V07D4G3RDYFFzU'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++
    console.log(imagesLoaded)
    if(imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
        console.log('ready =', ready)
    }

}

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//  Create elements for links and photos, add to the DOM
function displayPhotos(){
    imagesLoaded = 0
// run function for each object in photosArray
totalImages = photosArray.length
console.log('total images', totalImages)
photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a') 
    // item.setAttribute('href', photo.links.html)
    // item.setAttribute('target', '_blank')
    setAttributes(item,  {
        href: photo.links.html,
        target: '_blank',
    })
    // creat <img> for photo
    const img = document.createElement('img')
    // img.setAttribute('src', photo.urls.regular)
    // img.setAttribute('alt', photo.alt_description)
    // img.setAttribute('title', photo.alt_description)
    // put <img> inside <a>, then put both inside imageContainer element
    setAttributes(img, {
src: photo.urls.regular,
alt: photo.alt_description,
title: photo.alt_description,
    })
    // event listener, check when each is finished loading
    img.addEventListener('load', imageLoaded)
    item.appendChild(img)
    imageContainer.appendChild(item)


})
}



// get photos from Unsplash Api
async function getPhotos() {
    try {
const response = await fetch(apiUrl)
photosArray = await response.json()
displayPhotos()
    } catch (error) {
        // catch error here
    }
}

// check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready ) {
        ready = false
    getPhotos()
    }
})

// on load
getPhotos()