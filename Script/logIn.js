var email = document.getElementById('email')
var password = document.getElementById('password')
var inputs = document.querySelectorAll('input:not([type="submit"])')
var logInBtn = document.getElementById('logInBtn')

logInBtn.addEventListener('click', function (e) {
    e.preventDefault()
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value == 0) {
            inputs[i].nextElementSibling.innerHTML= `${inputs[i].name} required`
        }
    }

    var usersData = JSON.parse(localStorage.getItem('Users'))
    if (email.value != 0) {
        for (var i = 0; i < usersData.length; i++){
            if (email.value == usersData[i].email) {
                if (password.value == usersData[i].password) {
            
                    var loggedUsers = {
                        name: usersData[i].name,
                        email: usersData[i].email,
                        password: usersData[i].password
                    }
                }
                localStorage.setItem('loggedIn', JSON.stringify(loggedUsers))
                window.open('http://127.0.0.1:5500/dashBoard.html' , "_self")
            }
        }
    }
})