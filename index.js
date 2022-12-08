fetch("http://localhost:3000/dogs") 
    .then(resp => resp.json())
    .then(dogsArray => renderDogThumbnails(dogsArray))

const dogThumbnailsContainer = document.querySelector("#dog-thumbnail-list")
const dogName = document.querySelector("#dog-name")
const dogAge = document.querySelector("#dog-age")
const dogBreed = document.querySelector("#dog-breed")
const dogImage = document.querySelector("#dog-image")
const dogLikes = document.querySelector("#dog-likes")
const likeButton = document.querySelector("#like-button")

let currentDog = {}


function renderDogThumbnails(dogsArray) {
    dogsArray.forEach((dog) => {
        addDogThumnail(dog)
    })
    displayDog(dogsArray[0])
}

function addDogThumnail(dog) {
    let dogThumbnail = document.createElement("img")
    dogThumbnail.src = dog.image
    dogThumbnailsContainer.append(dogThumbnail)
    dogThumbnail.addEventListener("click", () => displayDog(dog))
}

function displayDog(dog) {
    dogName.innerText = dog.name
    dogAge.innerText = dog.age
    dogBreed.innerText = dog.breed
    dogImage.src = dog.image
    dogLikes.innerText = dog.likes

    currentDog = dog
}

likeButton.addEventListener("click", (e) => {
    currentDog.likes = parseInt(dogLikes.innerText) + 1
    displayDog(currentDog)
})

document.querySelector("#new-dog-form").addEventListener("submit", newDogHandler)

function newDogHandler(e){
    e.preventDefault()
    let newDog = {
        name:e.target.name.value,
        breed:e.target.breed.value,
        age:e.target.age.value,
        image:e.target.image.value,
        likes:0
    }
    addDog(newDog)
}

function addDog(newDog){
    fetch("http://localhost:3000/dogs",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newDog)
    })
    .then(res => res.json())
    .then(dog => addDogThumnail(dog))
}

    