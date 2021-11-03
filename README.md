# blogsite

This is a simple blogsite application, made with NodeJS, ExpressJS, and MongoDB.

## Description

The blogsite is a webapp that relies on MongoDB, Express and NodeJS. Hence, it is required that NodeJS and MongoDB come preinstalled in your server.

On the first run, a new database called blogDB will be created in your MongoDB database. All future blogposts created will be saved onto the blogDB database, inside the collection named "posts".

### Creating a blogpost

To create a blogpost, go to "/compose". 

### To find a specific blogpost 

To go to a specific blogpost, go to "/posts/:postid".

### Configuring ABOUT and CONTACT pages

ABOUT and CONTACT pages can be edited directly in the app.js file: 
* The ABOUT page text can be edited through the variable aboutContent.
* The CONTACT page text can be edited through the variable contactContent.
