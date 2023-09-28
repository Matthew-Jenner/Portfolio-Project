const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

//  Unsplash API
const count = 10
const apiKey = 'Lph_G9PD1rygfByOkPJtXtFJfobh2V07D4G3RDYFFzU'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

//  Create elements for links and photos, add to the DOM
function displayPhotos(){
// run function for each object in photosArray
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

// on load
getPhotos()