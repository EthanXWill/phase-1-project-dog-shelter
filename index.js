fetch("http://localhost:3000/dogs") 
    .then(resp => resp.json())
    .then(dogsArray => renderDogThumbnails(dogsArray))

const dogThumbnailsContainer = document.querySelector("#dog-thumbnail-list")
const dogName = document.querySelector("#dog-name")
const dogAge = document.querySelector("#dog-age")
const dogBreed = document.querySelector("#dog-breed")
const dogImage = document.querySelector("#dog-image")
const dogLikes = document.querySelector("#dog-likes")


function renderDogThumbnails(dogsArray) {
    dogsArray.forEach((dog) => {
        let dogThumbnail = document.createElement("img")
        dogThumbnail.src = dog.image
        dogThumbnailsContainer.append(dogThumbnail)
        dogThumbnail.addEventListener("click", () => displayDog(dog))
    })
}

function displayDog(dog) {
    dogName.innerText = dog.name
    dogAge.innerText = dog.age
    dogBreed.innerText = dog.breed
    dogImage.src = dog.image
    dogLikes.innerText = dog.likes
}

dogLikes.addEventListener("click", (e) => {
    dogLikes.innerText = parseInt(dogLikes.innerText) + 1
})

 