const login_button = document.querySelectorAll('.open_login')
const wrapper = document.querySelector(".popup_wrapper")
const popUp = document.querySelector(".pop_up")
const register_button = document.querySelectorAll(".register")
const my_account = document.querySelectorAll(".my_account")
const new_account = document.querySelectorAll(".new_account")
const log_button = document.getElementById('LogIn')
const form = document.forms[0]



login_button.forEach(function (item) {
    item.addEventListener("click", showPopUp)
})



wrapper.addEventListener("click", function (){
    wrapper.classList.remove("active")
    popUp.classList.remove("active")
    popUp.classList.remove("create_account")
    my_account.forEach(function (item) {
        item.classList.remove("create_account")
    })
    
    new_account.forEach(function(item) {
        item.classList.remove("create_account")
    })

    document.body.style.overflow = "visible"
})

function showPopUp () {
    wrapper.classList.add("active")
    popUp.classList.add("active")
    popUp.classList.remove("create_account")
    my_account.forEach(function (item) {
        item.classList.remove("create_account")
    })
    
    new_account.forEach(function(item) {
        item.classList.remove("create_account")
    })
    document.body.style.overflow = "hidden"
}

function register () {
    popUp.classList.add("create_account")
    my_account.forEach(function (item) {
        item.classList.add("create_account")
    })
    
    new_account.forEach(function(item) {
        item.classList.add("create_account")
    })
    document.body.style.overflow = "hidden"
}

function showData (e) {
    e.preventDefault()
    const mail = form.elements.mail.value;
    const password = form.elements.password.value;
    alert("e-mail: " + mail);
    alert("password " + password)
}


register_button.forEach(function (item) {
    item.addEventListener("click", register)
})

log_button.addEventListener("click", showPopUp)

form.addEventListener("submit", showData)
