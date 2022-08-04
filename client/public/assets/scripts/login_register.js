function login (data) {
    console.log("login", data)
}

function register (data) {
    console.log("register", data)
}

// Connect everything to the page

document.querySelector('#login-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    login({
        username: form.get("username"),
        password: form.get("password")
    })

    e.target.reset();
})

document.querySelector('#register-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    register({
        username: form.get("username"),
        password: form.get("password")
    })

    e.target.reset();
})