//Pobranie elementu
// const divFirst = document.querySelector(".orange");
// const divSecond = document.querySelector(".green");
// const divThird = document.querySelector(".blue");
// const divFourth = document.querySelector(".yellow");
// const divFifth = document.querySelector(".red");

const colors = document.querySelectorAll('div');
colors.forEach(function (color) {
    color.addEventListener('click', changeColor)
})

//Funkcja wykonująca

function changeColor() {

    // console.log("działa");
    const selectedColor = this.className;
    document.body.className = selectedColor;



}


//Nasłuchiwanie

// divFirst.addEventListener("click", changeColor);
// divSecond.addEventListener("click", changeColor);
// divThird.addEventListener("click", changeColor);
// divFourth.addEventListener("click", changeColor);
// divFifth.addEventListener("click", changeColor);