//* Creating the Variables

//Preloader
const preloaderSection = document.querySelector(".preloader");

//Profiles
const profilesSection = document.querySelector(".profiles");
const profilesUsers = document.querySelectorAll(".profiles__item");

//Interface
const interfaceSection = document.querySelector(".interface");

//Function to load the event listeners
function loadEventListeners() {
    //Function to put display none after the smoothDisappear
    document.addEventListener("DOMContentLoaded", () => setTimeout(() => {
        preloaderSection.classList.add("hidden");
        profilesSection.classList.remove("hidden");
    }, 2200));

    //Profile selection functions
    profilesUsers.forEach(user => {
        user.addEventListener("click", function(e){
            visualizeAnimation(profilesSection, interfaceSection, 300);
            customizeInterface(e);
        })
    })
}

loadEventListeners()

//Function to put an animation
function visualizeAnimation(previousElement, currentElement, timeout) {
    previousElement.classList.add("fading");
    setTimeout(() => {
        previousElement.classList.add("hidden");
        currentElement.classList.remove("hidden");
    }, timeout);
}

//Function to customize the OS interface depending on the user
function customizeInterface(user) {
    let profileItem = user.target;

    //We make sure to get the correct element in case the image or h3 is clicked.
    if (user.target.nodeName === "IMG") {
        profileItem = user.target.parentElement.parentElement;     
    }else if(user.target.nodeName === "H3"){
        profileItem = user.target.parentElement;
    }
    
    const userSelected = profileItem.dataset.user;
    const backgroundPath = `../assets/profiles/${userSelected}/background.webp`;
    console.log(backgroundPath)
    interfaceSection.style.backgroundImage = `url(${backgroundPath})`;
}