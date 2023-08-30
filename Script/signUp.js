var inputs = document.querySelectorAll('input:not([type="submit"])')
var signUpBtn = document.getElementById('signUpBtn')

signUpBtn.addEventListener('click', function (e) {
    e.preventDefault()
    var error = false

    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value == 0) {
            inputs[i].nextElementSibling.innerHTML= `${inputs[i].name} is empty`
        }
    }

    var name = document.getElementById('name')
    var namePattern = /^[a-zA-Z]{3,9} [a-zA-Z]{3,9}$/

    if (name.value != 0) {
        
        if (namePattern.test(name.value) == false) {
            name.nextElementSibling.innerHTML = `Invalid`
            error = true

        }
    }
    
    var email = document.getElementById('email')
    var emailPattern = /^[a-zA-Z]{3,15}[0-9]{0,5}@(gmail|hotmail|yahoo|icloud)\.com$/

    if (email.value != 0) {
        
        if (emailPattern.test(email.value) == false) {
            email.nextElementSibling.innerHTML = `Invalid`
            error = true

        }
    }

    var phone = document.getElementById('phone')
    var phonePattern = /^(01){1}(0|5|2|1){1}[0-9]{8}$/

    if (phone.value != 0) {
        
        if (phonePattern.test(phone.value) == false) {
            phone.nextElementSibling.innerHTML = `Invalid`
            error = true

        }

    }

    var password = document.getElementById('password')
    var passwordPattern = /^[a-zA-Z]{5,15}(!|@|#|$|%|^|&|\*){1}$/

    if (password.value != 0) {
        
        if (passwordPattern.test(password.value) == false) {
            password.nextElementSibling.innerHTML = `Invalid`
            error = true
        }
    }

    if (!error) {
        var userData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            password: password.value
        }

        var userContainer = JSON.parse(localStorage.getItem('Users')) || []
        userContainer.push(userData)
        localStorage.setItem('Users', JSON.stringify(userContainer))
        window.open(`http://127.0.0.1:5500/LogIn.html`, "_self")
}
}) 