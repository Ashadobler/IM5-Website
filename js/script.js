// console.log("hello Asha");

const weightButtons = document.querySelector("#weightButtons");
//Hier wird der Ort definiert, an dem der style der schrift verändert wird
const changeFont = document.querySelector("#changeFont");


////////////////////////////////////////////////////////////
////////////weight buttons /////////////////////////////////
////////////////////////////////////////////////////////////
const buttonWeightValues = [10, 20, 30];

buttonWeightValues.forEach(value => {
    const button = document.createElement('button');
    button.innerText = value.toString();
    button.value = value.toString();
    button.id = "weight" + value;

    button.addEventListener('click', () => {
        changeWeight(value);
    });

    weightButtons.appendChild(button);


});


function changeWeight(value) {
    //wenn diese funktion aufgerufen wird, soll der style von changeFont auf den entsprechenden value gesetzt werden

    console.log("Selected Weight:", value);
    changeFont.style.fontSize = value + 'px';
}

////////////////////////////////////////////////////////////
////////////End weight buttons /////////////////////////////
////////////////////////////////////////////////////////////