const close_bottom = document.querySelector("#close_bottom");
const open_bottom = document.querySelector("#open_bottom")
const header = document.querySelector('header')
open_bottom.addEventListener("click", function (event) {
    header.classList.toggle("active")
})

close_bottom.addEventListener("click", function (event) {
    header.classList.toggle("active")
})