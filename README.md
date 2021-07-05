
# Basic Twitter clone

This is a basic Twitter clone, built using Ruby (v3.0.0), Ruby on Rails (v6.1.4), Postgres11, and React.js (v17.0.2)

## Installation

Make sure Ruby, and Ruby on Rails are installed on your system:

[Ruby](https://rvm.io/rvm/install)

Make sure Node.js is installed on your system:

[Node.js](https://nodejs.org/en/download/)

Make sure Postgres is installed on your system:

[PostgresApp](https://postgresapp.com/) for macOS, easiest

or

[Postgres](https://www.postgresql.org/download/) for Windows, Linux, macOS, however some configuration may be required.

Note: other database (examples: sqlite and MySQL) are possible but will require some modification of code  (this has not been tested)

To install all Ruby gems and dependencies, go into the project folder and run 

```bash
bundle install
```

then, to install NPM packages, run

```bash
npm install
```
then, to establish the database, make sure Postgres (or your SQL database of choice) is running, and run

```bash
rails db:create
```
then
```bash
rails db:migrate
```
then
```bash
rails db:seed
```
This will create the database, establish the schema, and create the initial seed data for the app.

User credentials established from seed data:
```bash
User 1 { username: demoUser, password: pa5Sword! }
User 2 { username: testUser, password: pa5Sword! }
```

Three tweets are created from seed data.

Alternatively, this command can be used instead:
```bash
rails db:setup
```

to start the rails server, run

```bash
rails s
```

If you wish to enter the console, run

```bash
rails c
```

to start the frontend, run

```bash
bin/webpack
```

Now you can navigate to localhost:3000 and view the app, and start using it.

A demo login button is created for easy logging in. It will automatically login a user with the demoUser account.

If you wish to edit the JavaScript on the app, you can instead use the following for live reloads on any Javascript change during the development process:
```bash
bin/webpack-dev-server
```

## Usage

In this basic Twitter clone, users can create accounts with the following criteria:

- Username can't be blank
- Username minimum is 4 characters
- Username maximum is 30 characters
- Username cannot start with an underscore
- Username cannot end with an underscore
- Username must contain only underscores and alphanumeric characters

- Password minimum is 8 characters
- Password must contain at least 1 number
- Password must contain at least 1 capital letter
- Password must contain at least 1 lowercase letter
- Password must contain at least one of the following special characters: @ % + . ! # $ ^ ? : ( ) [ ] ~ - _ and cannot contain other special characters

Users can create/post tweets (requirement is that the body of the tweet is not blank), like/unlike tweets, and retweet.

Upon logging in, users are greeted with a "Successful login" page, where they can navigate to the "Feed" page, to view all tweets.

Users can also navigate to the "New Tweet" page where they can compose their tweet (with a maximum character length of 140 characters).

Users can also logout.