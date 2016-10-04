var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function homepage (req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', function homepage (req, res){
 var endPoints = {
     message: "Welcome to Wanderly!",
     documentationURL : "https://github.com/Sherri010/wanderly/blob/master/readme.md",
     baseUrl : "https://wanderly.herokuapp.com/",
     endpoints:[
      {
        method:"GET",
        path:"/api",
        desc: "Describes the available end points"
      },
      {
        method: "GET",
        path: "/api/users",
        desc: "returns all users in the group"
      },
      {
        method: "GET",
        path : "/api/experiences",
        desc: "returns all the experiences"
      },
      {
        method: "GET",
        path: "/api/experiences/:id",
        desc: "returns a specfic experience"
      },
      {
        method: "POST",
        path: "/api/experiences/",
        desc: "adds a new experience"
      },
      {
        method: "PUT",
        path: "/api/experiences/:id",
        desc: "updates an existing experience"
      },
      {
        method : "DELETE",
        path: "/api/experiences/:id",
        desc: "removes an existing experience"
      }
     ]
 }
 res.json(endPoints);
});
///user

app.get('/api/users/',function (req,res){
  db.User.find({},function(err,list){
   console.log(list);
   res.json(list);
  });
});


///// experience
app.get('/api/experiences', function index (req, res){
  db.Experience.find({}, function(err, list) {
    //console.log(list);
    res.json(list);
  });
});


app.get('/api/experiences/:id', function (req, res){
  db.Experience.findOne({_id: req.params.id}, function(err, item) {
    res.json(item);
  });
});


app.post('/api/experiences', function index (req, res){
  var item = new db.Experience({
    title:req.body.title,
    date: req.body.date,
    coordinates: {lat: +req.body.lat, lng: +req.body.lng},
    image:req.body.image,
    author: req.body.author,
    note:req.body.note,
    bucketList: req.body.bucketList
  });
    console.log(item)
  item.save(function(err, newItem) {
    res.json(newItem);
  });
});


app.put('/api/experiences/:id', function (req, res){
  db.Experience.findOne({_id: req.params.id}, function(err, found){
    if(err) throw err;
    found.title = req.body.title,
    found.date = req.body.date,
    found.coordinates = {lat: +req.body.lat, lng: +req.body.lng},
    found.image = req.body.image,
    found.author = req.body.author,
    found.note = req.body.note,
    found.bucketList = req.body.bucketList;
    found.save();
    db.Experience.find({},function(err,list){
      console.log(list);
      res.json(list);
    });
  });
})


app.delete('/api/experiences/:id', function (req, res){
  db.Experience.findOneAndRemove({_id: req.params.id}, function(err, item) {
    console.log('deleted item',item);
    res.json(item);
  });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('server is running');
});
