function login() {
    const usernameEl = document.getElementById("username-input");
    localStorage.setItem("username", usernameEl.value);
}

function register(username) {
    // TODO
    let usernames = [];
    usernames.push(username);
}