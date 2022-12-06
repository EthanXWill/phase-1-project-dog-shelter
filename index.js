fetch("http://localhost:3000/dogs") 
    .then(resp => resp.json())
    .then(dogsArray => renderDogThumbnails(dogsArray))

const dogThumbnailsContainer = document.querySelector("#dog-thumbnail-list")

function renderDogThumbnails(dogsArray) {
    dogsArray.forEach((dog) => {
        let dogThumbnail = document.createElement("img")
        dogThumbnail.src = dog.image
        dogThumbnailsContainer.append(dogThumbnail)
    })
}

 