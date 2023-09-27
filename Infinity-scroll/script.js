//  Unsplash API
const count = 10
const apiKey = 'Lph_G9PD1rygfByOkPJtXtFJfobh2V07D4G3RDYFFzU'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// get photos from Unsplash Api
async function getPhotos() {
    try {
const response = await fetch(apiUrl)
const data = await response.json()
console.log(data);
    } catch (error) {
        // catch error here
    }
}

// on load
getPhotos()