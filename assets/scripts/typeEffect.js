// barra de digitação
function typeWrite(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * (i*2))
    });
}

typeWrite(document.querySelector("#my-name"));
