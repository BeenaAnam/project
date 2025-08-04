const form = document.getElementById("signup");
const nameInp = document.getElementById("name");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})
let isValid = true;
function validation (input, condition, message){
    const error = input.nextElementSibling;
    if (condition) {
        error.textcontent =message;
        error.style.visibity ="visible";
        input.style.borderColor="red";
        isValid = false;
    }
    else{
        error.style.visibity= "hidden";
        input.style.borderColor ="purple"
    }
}
