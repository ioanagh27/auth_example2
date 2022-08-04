CREATE TABLE post (
    id serial PRIMARY KEY,
    title varchar(100),
    text varchar(500)
);

CREATE TABLE user_account (
    id serial PRIMARY KEY,
    username varchar(30) NOT NULL,
    password char(60) NOT NULL
);

