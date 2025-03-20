console.log('%c HI', 'color: firebrick')
// my code
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = []; 

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.getElementById("dog-image-container");
            data.message.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.style.width = "200px";
                img.style.margin = "10px";
                imgContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message); 
            displayBreeds(allBreeds); 
        });
    function displayBreeds(breeds) {
        const breedList = document.getElementById("dog-breeds");
        breedList.innerHTML = ""; 
        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            li.addEventListener("click", () => {
                li.style.color = "blue"; 
            });
            breedList.appendChild(li);
        });
    }
    document.getElementById("breed-dropdown").addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        displayBreeds(filteredBreeds.length ? filteredBreeds : allBreeds);
    });
});


