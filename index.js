const btnEl = document.getElementById("btn");
const imgEl = document.querySelector(".anime-img");
const nameEl = document.querySelector(".anime-name");
const containerEl = document.querySelector(".anime-container");

btnEl.addEventListener("click",async function(){
    try{
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        nameEl.innerText = "Updating...";
        imgEl.src = "spinner.svg";
        const response = await fetch("https://api.nekosapi.com/v3/images");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get That Anime";
        containerEl.style.display = "block";
        imgEl.src = data.id;
        nameEl.innerText = data.artist;
    } catch (error){
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get That Anime";
        nameEl.innerText = "An error has happened, Please Try again!";
    }
});