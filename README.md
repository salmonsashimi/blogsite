# blogsite

This is a simple blogsite application, made with MongoDB, Express and Node.

## Description

The blogsite is a webapp that relies on MongoDB, Express and Node. Hence, it is required that these are installed in your server. Once the app is running, a new database called blogDB will be created in MongoDB. All new blogposts will be saved onto the blogDB database, inside the collection "posts".

### Creating a blogpost

To create a blogpost on the webapp, go to '/compose'. 

### To find a specific blogpost 

To go to a specific blogpost, go to '/posts/:postid'.

### Configuring ABOUT and CONTACT pages

Content on the ABOUT and CONTACT pages can be adjusted directly in the app.js file: 
* The ABOUT page content can be editted through the variable aboutContent.
* The CONTACT page content can be editted through the variable contactContent.
