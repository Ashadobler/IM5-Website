// console.log("hello Asha");

//const weightButtons = document.querySelector("#weightButtons");
//Hier wird der Ort definiert, an dem der style der schrift verändert wird
const changeFont = document.querySelector("#changeFont");
const styleButtons = document.querySelector("#styleButtons");
const widthButtons = document.querySelector("#widthButtons");
const colorButtons = document.querySelector("#colorButtons");

////////////weight buttons /////////////////////////////////
////////////////////////////////////////////////////////////
const buttonWidthValues = [50, 80, 100];

buttonWidthValues.forEach(value => {
    const button = document.createElement('button');
    button.innerText = value.toString();
    button.value = value.toString();
    button.id = "width" + value;

    button.addEventListener('click', () => {
        changeWidth(value);
    });

    widthButtons.appendChild(button);
});

function changeWidth(value) {
    changeFont.style.fontVariationSettings = `'wdth' ${value}`;
    // Adjust the width of the changeFont element based on the clicked button
    // changeFont.style.width = value + 'px';
    // changeFont.style.display = 'inline-block';  // this ensures the width property applies to the span element
}

////////////////////////////////////////////////////////////
////////////End weight buttons /////////////////////////////




////////////style buttons /////////////////////////////////
////////////////////////////////////////////////////////////

const styleToggleButton = document.createElement('button');
styleToggleButton.innerText = 'Italic'; // Starts off with the text 'Italic' because the default font style is 'normal'
styleToggleButton.id = 'toggleFontStyle';
styleToggleButton.addEventListener('click', toggleFontStyle);

styleButtons.appendChild(styleToggleButton);

function toggleFontStyle() {
    if (changeFont.style.fontStyle === 'italic') {
        styleToggleButton.innerText = 'Italic';
        styleToggleButton.style.fontStyle = 'italic'; // Reset button text style to normal
        changeFont.style.fontStyle = 'normal';
    } else {
        styleToggleButton.innerText = 'Regular';
        styleToggleButton.style.fontStyle = 'normal'; // Set button text style to italic
        changeFont.style.fontStyle = 'italic';
    }
}

////////////////////////////////////////////////////////////
////////////End style buttons /////////////////////////////



////////////color buttons /////////////////////////////////
////////////////////////////////////////////////////////////
const colorValues = [
    { name: "Peach", color: "#F0866D" },
    { name: "Blue", color: "#6da8f0" },
    { name: "Purple", color: "#a0049e" }
];

colorValues.forEach(({ name, color }) => {
    const button = document.createElement('button');
    button.innerText = name;
    button.value = color;

    button.addEventListener('click', () => {
        changeFontColor(color);
    });

    colorButtons.appendChild(button);
});

function changeFontColor(color) {
    changeFont.style.color = color;
}

////////////////////////////////////////////////////////////
////////////End color buttons /////////////////////////////


////////////////////////////////////////////////////////////
////////////Dynamischer hover Text /////////////////////////

let mouseX = "";
let mouseY = "";
let screen_Width = "";
let screen_Height = "";
let propMouseX = "";
let propMouseY = "";

const mouseDiv = document.querySelector("#mousePosition");

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    propMouseX = ((mouseX/screen_Width)*50)+50;
    propMouseY = (mouseY/screen_Height)*100;

    mouseDiv.innerHTML = `rel X Position: ${propMouseX}, rel Y Position: ${propMouseY}`;

    // Das <span>-Element auswählen
    let resizeableText = document.querySelector("#resizeText");

    // Die Schriftgröße des <span>-Elements auf 20px setzen
    resizeableText.style.fontVariationSettings = `'wdth' ${propMouseX}`;
    resizeableText.style.fontSize = propMouseY + "px";;

});


// Eventlistener für das resize-Event hinzufügen
window.addEventListener('resize', function() {
    screen_Width = window.innerWidth;
    screen_Height = window.innerHeight;
    //mouseDiv.innerHTML = screenWidth + " " + screenHeight;

});

// Optional: Um die Werte sofort beim Laden der Seite anzuzeigen
screen_Width = window.innerWidth;
screen_Height = window.innerHeight;


////////////////////////////////////////////////////////////
////////////End Dynamischer hover Text /////////////////////////