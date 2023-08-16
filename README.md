<h1 align="center">Focuz</h1>

<br>

## The problem

* The presence of YouTube recommendations comments and advertisements hinders users from efficiently engaging in online learning, impeding their ability to access and complete free educational content effectively.

## Solution

* The Focuz app, built on the React Express Node platform and integrated with Rapid API, enhances user learning focus by eliminating distractions such as recommendations, comments, and ads on YouTube. This empowers users to concentrate on their educational content without interruptions.

## Demo

<img src="/src/components/assets/home.png" />
<img src="/src/components/assets/play.png" />




## Setup

This project requires ReactJS (version 16 or later) , NPM(6 or later) whch are really easy to install and MongoDB Atlas cloud database. To make sure you have them available on your machine, try running the following command.

```bash
  npm -v
```

clone the project locally

```bash
  git clone https://github.com/ruds18/dynamic-events.git
```

To install and set up the library, run:

```bash
   npm i 
```

Make an environment file - just type

```bash
   .env
```

Finding DB Key in MongoDB Compass Cloud

Prerequisites
Before you proceed, ensure you have:

MongoDB Compass Cloud account
Access privileges to the desired database

```bash
* Login to MongoDB Compass Cloud:
* Log in to your MongoDB Compass Cloud account using your credentials.
* Select Your Project:
* Choose the project that contains the database you want to access.
* Navigate to Database Access:
* Go to the "Database Access" section in the left-hand navigation menu.
* Choose the Database User:
* If you've already created a user, select the user associated with the database. If not, create a new user by clicking on "ADD NEW DATABASE USER."
* View the DB Key:
* Once you have selected or created the database user, the DB Key will be displayed in the user details section. It is usually labeled as "Database Password" or "Password."
* Copy the DB Key:
* Click the "Copy" button next to the DB Key to copy it to your clipboard.
* Integrate with Your Application:
* Paste the copied DB Key into your application's configuration file or environment variables, where it is required to establish a connection to the MongoDB Compass Cloud database.
```

Remember to replace <username>, <password>, and <dbname> with your actual MongoDB Compass Cloud credentials and database name.


Make environment variables


```bash
   PORT = {"ADD Port"}
   DBKEY= {"ADD MongoDB key"}
```



Starting the app

```bash
   npm start - frontend
   npm start  - backend
```



Yay! now you are all set ! 👍 . Happy learning!

