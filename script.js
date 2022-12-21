const toggle = document.querySelector(".eye")
const input = document.getElementById('password')
const btn = document.querySelector('.btn')

toggle.addEventListener("click", ()=>{
    if (input.type == "password") {
        input.type = "text"
        toggle.classList.replace("uil-eye-slash", "uil-eye")
    } else {
        input.type = "password"
        toggle.classList.replace("uil-eye", "uil-eye-slash")
    }
})
//Lets male the verify function
btn.addEventListener("click", ()=>{
    const status = document.querySelector('.status')
    let value1 = input.value 
    let value2 = document.getElementById('verifyInp').value
    if (value1 == value2) {
        status.innerHTML = "✅Congrats Password matched"
        status.style.color = "green"
    } else {
        status.innerHTML = "**Password didn't match"
        status.style.color = "red"
    }
    
})