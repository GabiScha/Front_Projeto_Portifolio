/*const texto = "Uma Programadora Full-Stack";
let index = 0;

function digitar() {
    if (index < texto.length) {
        let char = texto.charAt(index);
        
        // Muda a cor do texto dependendo da posição
        if (index < 4) {
            char = `<span style="color: white;">${char}</span>`;
        } 
        else if (index < 17) {
            char = `<span style="color: #99AAFF;">${char}</span>`;
        } 
        else {
            char = `<span style="color: #C2E0FF;">${char}</span>`;
        }
        
        document.getElementById("divtextoef").innerHTML += char;
        index++;
        setTimeout(digitar, 100);
    }
}

digitar();
*/
const texto = "Uma Programadora Full-Stack";
let index = 0;

// Verifica o tema do sistema (claro ou escuro)
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: Light)').matches;
const whiteColor = isDarkMode ? "#090C11" : "white"; 

function digitar() {
    if (index < texto.length) {
        let char = texto.charAt(index);
        
        // Muda a cor do texto dependendo da posição
        if (index < 4) {
            char = `<span style="color: ${whiteColor};">${char}</span>`;
        } 
        else if (index < 17) {
            char = `<span style="color: #99AAFF;">${char}</span>`;
        } 
        else {
            char = `<span style="color: #C2E0FF;">${char}</span>`;
        }
        
        document.getElementById("divtextoef").innerHTML += char;
        index++;
        setTimeout(digitar, 100);
    }
}

digitar();




/*const texto = "Uma Programadora Full-Stack";
let index = 0;

function digitar() 
{
    if ( index >= 5)
    {
        let index = text.fontcolor("red");
        document.getElementById("divtextoef").innerHTML += texto.charAt(index);
        
        index++;
        setTimeout(digitar, 100);
        

    }

    else (index < texto.length) 
    {
        document.getElementById("divtextoef").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 100);
    }
}

digitar();

*/
//const texto = "Uma Programadora Full-Stack";
//let index = 0;

//function digitar() 
//{
//    if (index < texto.length) {
//        document.getElementById("divtextoef").innerHTML += texto.charAt(index);
//        index++;
//        setTimeout(digitar, 100);
//    }
//}

//digitar();

/*
document.addEventListener("DOMContentLoaded", function () {
    const icnbrn = document.getElementById('divlogo');


    icnbrn.style.borderBottom = '0.1vh solid #E1E6EF';
    icnbrn.style.paddingBottom = '4px';
    icnbrn.style.marginBottom = '40px';
    icnbrn.style.marginTop = '-1px';
});

*/













const btn2 = document.getElementById("btnbranco2");

btn2.addEventListener("mouseenter", () => {
    const btnBranco2 = document.getElementById('btnbranco2');

    btnBranco2.style.borderBottom = '0.1vh solid #E1E6EF'; // Exibe a linha
    btnBranco2.style.paddingBottom = '4px';
});

btn2.addEventListener("mouseleave", () => {
    const btnBranco2 = document.getElementById('btnbranco2');

    btnBranco2.style.borderBottom = 'none'; // Remove a linha
    btnBranco2.style.paddingBottom = '0px';
});





const btn1 = document.getElementById("btnbranco1");

btn1.addEventListener("mouseenter", () => {
    const btnBranco1 = document.getElementById('btnbranco1');

    btnBranco1.style.borderBottom = '0.1vh solid #E1E6EF'; // Exibe a linha
    btnBranco1.style.paddingBottom = '4px';
});

btn1.addEventListener("mouseleave", () => {
    const btnBranco1 = document.getElementById('btnbranco1');

    btnBranco1.style.borderBottom = 'none'; // Remove a linha
    btnBranco1.style.paddingBottom = '0px';
});





const btn3 = document.getElementById("btnbranco3");

btn3.addEventListener("mouseenter", () => {
    const btnBranco3 = document.getElementById('btnbranco3');

    btnBranco3.style.borderBottom = '0.1vh solid #E1E6EF'; // Exibe a linha
    btnBranco3.style.paddingBottom = '4px';
});

btn3.addEventListener("mouseleave", () => {
    const btnBranco3 = document.getElementById('btnbranco3');

    btnBranco3.style.borderBottom = 'none'; // Remove a linha
    btnBranco3.style.paddingBottom = '0px';
});










