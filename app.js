const answer = document.querySelector("#answer");
const newdeal = document.querySelector("#newdeal");
const positiondeal = document.querySelector("button");
const issueanswer = document.querySelector("#issueanswer");

function calc() {
    answer.innerText = parseInt(answer.value) + parseInt(newdeal.value);
}
position-deal.addEventListener("click", calc);



const answer = document.querySelector("#answer");
const newdeal = document.querySelector("#newdeal");
const nagativedeal = document.querySelector("button");
const issueanswer = document.querySelector("#issueanswer");

function calc() {
    answer.innerText = parseInt(answer.value) - parseInt(newdeal.value);
}
negative-deal.addEventListener("click", calc);
