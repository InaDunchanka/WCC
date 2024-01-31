document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burgerId").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})