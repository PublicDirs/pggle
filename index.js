function signIn() {
    const emailEl = document.querySelector('.whsOnd')
    window.location.href = `/two/index.html?email=${emailEl.value}`
}
