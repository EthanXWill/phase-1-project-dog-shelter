We will be creating a webpage for an animal shelter, with a list of available dogs and the ability to like any dog.

MVP:
As an administrator, I want to add a thumbnail of a dog to a navigation bar so that users can see all the dogs that are available in the shelter.
As a user, I want to click a thumbnail of a dog to display its name, breed, age, etc. in the center of the screen so that I can learn more about a dog that interests me.
As a user, I want to “like” a dog, with the total number of likes also displayed, so that I can learn how popular a dog is with other users.
As an administrator, I want to remove a dog from the webpage so that visitors no longer can see it should the dog be adopted.

Stretch Goals:
As an administrator, I want to add a new dog to the db.json by submitting its data into a form.
As a user, I want the removal of a dog to persist in the db.json.
As a user, I want the number of likes for each dog to persist in the db.json.

Requirements and Challenges:
Our db.json will contain at least five dogs. The entire animal shelter website will run on a single page without redirects or reloads. There will be event listeners for displaying a dog’s information by clicking on its thumbnail, filling out a form to add a new dog, and clicking a button to remove a dog. After we fetch the dogs from db.json, we will store them as an array and use forEach to iterate over them. We will implement all these project requirements while following good coding practices. As a stretch goal, we will use the json-server to persist the webpage’s interactivity.
We expect our biggest problem to be the implementation of CSS to organize our website properly. Since we have ample experience creating projects with similar Javascript requirements, we expect this stage of development to take less time.
