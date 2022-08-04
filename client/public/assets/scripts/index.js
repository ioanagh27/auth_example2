const createPostElement = (data) => {

    const elem = document.createElement("div");
    const heading = document.createElement("h2");
    const paragraph = document.createElement("p");

    heading.textContent = data["title"];
    paragraph.textContent = data["text"];

    elem.append(heading, paragraph);

    return elem;
}

const loadPosts = () => {

    const container = document.querySelector("container");

    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(data => {
            data["posts"].forEach(p => {
                const elem = createPostElement(p);
                container.appendChild(elem);
            })
        })
}

function createPost(data) {

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    fetch("http://localhost:3000/posts", options)
        .then(res => res.json())
        .then(data => {
            document.querySelector("container").appendChild(createPostElement(data["post"]));
        })
        .catch(err => alert(err))
}

// Connect everything to the page

document.querySelector('#post-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    createPost({
        title: form.get("title"),
        text: form.get("text")
    })

    e.target.reset();

})

loadPosts();
