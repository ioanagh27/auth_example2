const db = require("../database/connect");

class Post {

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query('SELECT * FROM post');
                let posts = postData.rows.map(p => new Post(p));
                resolve (posts);
            } catch (err) {
                console.log(err);
                reject('Unable to connect to the database.');
            }
        });
    }

    static getOneById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM post WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                console.log(err);
                reject('Unable to locate post.');
            }
        });
    }

    static create(data) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO post (title, text) VALUES ($1, $2) RETURNING *;`,
                [ data.title, data.text]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                console.log(err);
                reject('Unable to create post.');
            }
        });
    }

    static delete(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`DELETE FROM post WHERE id = $1 RETURNING id;`, [ id ]);
                resolve (postData.rows[0]);
            } catch (err) {
                console.log(err);
                reject('Unable to delete post.');
            }
        });
    }

}

module.exports = Post;