// console.log("hello Asha");

//Hier wird der Ort definiert, an dem der style der schrift verändert wird
const changeFont = document.querySelector("#changeFont");
const styleButtons = document.querySelector("#styleButtons");
const widthButtons = document.querySelector("#widthButtons");
const colorButtons = document.querySelector("#colorButtons");

////////////Width buttons /////////////////////////////////
////////////////////////////////////////////////////////////
const buttonWidthValues = [50, 80, 100];

buttonWidthValues.forEach((value, index) => {
    const button = document.createElement('button');
    button.innerText = value.toString();
    button.value = value.toString();
    button.id = "width" + value;

    // If the current button is the last one, add the 'active' class
    if (index === buttonWidthValues.length - 1) {
        button.classList.add('active');
    }

    button.addEventListener('click', () => {
        changeWidth(value, button);
    });

    widthButtons.appendChild(button);
});

function changeWidth(value, clickedButton) {
    // Set the font width
    changeFont.style.fontVariationSettings = `'wdth' ${value}`;

    // Remove 'active' class from all width buttons
    const allWidthButtons = widthButtons.querySelectorAll('button');
    allWidthButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    clickedButton.classList.add('active');
}

////////////////////////////////////////////////////////////
////////////End width buttons /////////////////////////////




////////////style buttons /////////////////////////////////
////////////////////////////////////////////////////////////
const regularButton = document.createElement('button');
regularButton.innerText = 'Regular';
regularButton.classList.add('active'); // This will make the button appear as "clicked" by default
regularButton.addEventListener('click', () => {
    changeFontStyle('normal', regularButton);
});
styleButtons.appendChild(regularButton);

// Create and append Italic button
const italicButton = document.createElement('button');
italicButton.innerText = 'Italic';
italicButton.addEventListener('click', () => {
    changeFontStyle('italic', italicButton);
});
styleButtons.appendChild(italicButton);

function changeFontStyle(style, clickedButton) {
    // Clear active class from all buttons
    const allStyleButtons = styleButtons.querySelectorAll('button');
    allStyleButtons.forEach(button => button.classList.remove('active'));

    // Apply style to the changeFont
    changeFont.style.fontStyle = style;

    // Set the clicked button as active
    clickedButton.classList.add('active');
}

////////////////////////////////////////////////////////////
////////////End style buttons /////////////////////////////



////////////color buttons /////////////////////////////////
////////////////////////////////////////////////////////////

const colorValues = [
    { name: "White", color: "white" },
    { name: "Peach", color: "#F0866D" },
    { name: "Purple", color: "#a0049e" }
];

colorValues.forEach(({ name, color }) => {
    const button = document.createElement('button');
    button.innerText = name;
    button.value = color;

    // Making the White button active by default
    if (name === "White") {
        button.classList.add('active');
    }

    button.addEventListener('click', () => {
        changeFontColor(color, button);
    });

    colorButtons.appendChild(button);
});

function changeFontColor(color, clickedButton) {
    // Set font color
    changeFont.style.color = color;
    
    // Remove active class from all buttons
    const allColorButtons = colorButtons.querySelectorAll('button');
    allColorButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    clickedButton.classList.add('active');
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

   // mouseDiv.innerHTML = `rel X Position: ${propMouseX}, rel Y Position: ${propMouseY}`;

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