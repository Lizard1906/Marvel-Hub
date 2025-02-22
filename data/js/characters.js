data = JSON.parse(localStorage.getItem('marvel-hub'))

console.log(data)
const charactersStack = data.characters

function createCharacterElements() {

    const charactersContainer = document.getElementById("characters-container");
    charactersContainer.innerHTML = '';

    charactersStack.forEach(character => {

        const characterDiv = document.createElement("div");
        characterDiv.classList.add("col-lg-2", "col-md-4", "col-6");
        const characterElement = document.createElement("div");
        characterElement.classList.add("img-card");

        const characterLink = document.createElement("a");
        characterLink.href = "characterDetails.html?" + character.id;

        const characterImage = document.createElement("div");
        characterImage.style.backgroundImage = "url(data/Images/Characters/GIF/" + character.id + ".png)";
        characterImage.classList.add("img-thumbnail");

        characterLink.appendChild(characterImage);
        characterElement.appendChild(characterLink);
        characterDiv.appendChild(characterElement);
        charactersContainer.appendChild(characterDiv);

    });
}

createCharacterElements();




document.addEventListener("DOMContentLoaded", function () {
    function showFooter() {
        var footer = document.querySelector(".footer");
        if (footer) {
            footer.classList.remove("d-none");
        }
    }
    showFooter();
});
