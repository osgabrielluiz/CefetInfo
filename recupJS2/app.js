// Questão 3
let button = document.querySelector('#bt3');
button.addEventListener('click', () =>{
    let valorA = document.querySelector('#valorA').value;
    let valorB = document.querySelector('#valorB').value;
    let valorC = document.querySelector('#valorC').value;
    let valoresArray = [valorA, valorB, valorC];
    valoresArray.reverse();
    let result = document.querySelector('.resultP');
    result.innerHTML = valoresArray;
});
// Fim da Questão 3

