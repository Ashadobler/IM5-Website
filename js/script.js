// console.log("hello Asha");

//const weightButtons = document.querySelector("#weightButtons");
//Hier wird der Ort definiert, an dem der style der schrift verändert wird
const changeFont = document.querySelector("#changeFont");
const styleButtons = document.querySelector("#styleButtons");
const widthButtons = document.querySelector("#widthButtons");


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

