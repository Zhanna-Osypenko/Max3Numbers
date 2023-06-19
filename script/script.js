
function getMaxThree() {

    let num1 = +document.querySelector(".input-1").value;
    let num2 = +document.querySelector(".input-2").value;
    let num3 = +document.querySelector(".input-3").value;

    let arr = [num1,num2,num3];
    console.log(arr);

    let resultMax = arr.reduce((max,elem) => (elem > max ? elem : max));
    console.log(resultMax);

    document.querySelector(".result").innerText = resultMax;
}


