export function d(){
    location.reload();
   return document.querySelector(".result").innerHTML=0;
   }

export  function numri() {
    const numbers = document.querySelectorAll(".number");
    const result = document.querySelector(".result");
    let accumulatedNumber = "";

    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            accumulatedNumber += number.innerHTML;
            result.innerHTML = accumulatedNumber;
        });
    });
}



export function perfundimi() {
    const resultElement = document.querySelector(".result");
    const resultContent = resultElement.innerHTML;

    
       
    const prodhimi = resultContent.indexOf("x");

    if (prodhimi !== -1) {
         
        const numer1 = parseFloat(resultContent.slice(0, prodhimi).trim());
        const numeri2 = parseFloat(resultContent.slice(prodhimi + 1).trim());

        
        const product = numer1 * numeri2;

    
        resultElement.innerHTML = product;
    }
    
    
    const pjestimi = resultContent.indexOf("/");
    const shuma = resultContent.indexOf("+");
    const diferenca = resultContent.indexOf("-");

    if (pjestimi !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, pjestimi).trim());
        const numeri2 = parseFloat(resultContent.slice(pjestimi + 1).trim());
        const division = numer1 / numeri2;
        resultElement.innerHTML = division;
    } else if (shuma !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, shuma).trim());
        const numeri2 = parseFloat(resultContent.slice(shuma + 1).trim());
        const sum = numer1 + numeri2;
        resultElement.innerHTML = sum;
    } else if (diferenca !== -1) {
        const numer1 = parseFloat(resultContent.slice(0, diferenca).trim());
        const numeri2 = parseFloat(resultContent.slice(diferenca + 1).trim());
        const difference = numer1 - numeri2;
        resultElement.innerHTML = difference;
    }
    
}