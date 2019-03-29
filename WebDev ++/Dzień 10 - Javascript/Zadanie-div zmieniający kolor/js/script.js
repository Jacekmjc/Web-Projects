//Pobranie elementów
var firstDiv = document.querySelector(".s1");
var secondDiv = document.querySelector(".s2");

//Funkcja wykonywalna

function changeColor() {
    // firstDiv.classList.toggle('red');
    // secondDiv.classList.toggle('red');
    this.classList.toggle('red');
}


// Nasłuchiwanie

firstDiv.addEventListener('click', changeColor);
secondDiv.addEventListener('click', changeColor);