# Wanderly: Project Description
An application for sharing your adventures with your friends.

# Project URL
http://wanderly.herokuapp.com/

## Project API End Points
<br>
http://wanderly.herokuapp.com/api
<br>
<img src="http://i.imgur.com/EA9spQv.png" width="350">

# Technologies
### Front End
- JavaScript
- jQuery
- HTML5/CSS3
- Bootstrap
- Handlebars

### Back End
- Node
- Express
- Mongo
- Mongoose

# Development Setup
### Node Setup
``` 
npm init -y
npm install --save express
npm install --save mongoose
npm install --save body-parser
touch .gitignore // to avoid tracking node modules
```
### MongoDB Setup
```
brew install mongodb //if necessary 
mongod
```
# Project Roadmap
## Planning
- idea development
- user stories
    - user can see all previously created experiences
    - user can create a new experience
    - user can drops pin as part of creating experience
    - user can update an existing experience
    - user can delete an existing experience
- wireframe 
<br>
<img src="http://i.imgur.com/vtlIUsi.jpg" width="350">

- model design

```
experiences
    {
        title: string,
        date: date,
        coordinates: [lat, long],
        image: string,
        author: string,
        note: text,
        bucketList: boolean
    }
```

# Phase 1 MVP
### Back End
- create and seed database
- set up server with routes

### Front End
- create ajax calls for CRUDing
- create view for showing data, utilizing google.map API

# Phase 2
- style to support responsive mobile and appearance

# Phase 3
#### Adds User Model
```
users
    {
        name: String,
        image: String,
        marker: String
    }
```
#### Adds Validation

# Future Features
- sort entries by update date
- add login and privacy functionality
- add a bucket list feature that shows planned adventures
- customize map markers for each user
- filter map and experiences by user and location
