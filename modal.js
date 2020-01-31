var modal = document.querySelector("#calculator-wrapper-mobile");
var openModal = document.querySelector("#activate-modal");
var closeModal = document.querySelector("#close-btn");

openModal.addEventListener("click", function() {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});
