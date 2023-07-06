document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelectorAll(
    ".accordion_container .contentBx"
  );

  function myFunction() {
    this.classList.toggle("active");
  }

  accordion.forEach(function (item) {
    item.addEventListener("click", myFunction);
  });
});
