let add = document.getElementById("add");
add.addEventListener("click", addFunction);
let arr = [];
function addFunction() {
    let number = document.getElementById("number").value;
    arr.push(number);
    showReult(arr);


}

let disPlay = document.getElementById("disPlay");
disPlay.addEventListener("click", disPlayFunction);

function disPlayFunction() {
    arr.pop(arr.length - 1);
    showReult(arr);

}

function showReult(arr) {
    let arrText = "";
    for (let i = 0; i < arr.length; i++) {
        arrText = arrText + arr[i] + ",";
    }
    document.getElementById("result").innerHTML = arrText;
}