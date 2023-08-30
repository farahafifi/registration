var USER = JSON.parse(localStorage.getItem('loggedIn'))
document.getElementById('main').innerHTML = ` Welcome ${USER.name}`