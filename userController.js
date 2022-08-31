let Articles = require('../models/userModel');
var mysql = require ("mysql");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'sousou123',
    database : 'users'
});
   connection.connect(function(error){if (error) console.log(error);});
//Initialize the app
let express = require ('express');


let app = express();
app.use(express.urlencoded({extended : true}));


exports.userList = function(req,res)  {
    console.log("sou");
    connection.query("select * from shopping;",function(error, result){
        if (error) console.log(error);
        console.log(result);
        res.render('userlist.ejs',{users: result});//result:json: liste qui contient l'identifiant et nom de tache
    });
}

exports.ajouterunarticle = function(req,res)  {
    
        res.render('ajouter.ejs');//result:json: liste qui contient l'identifiant et nom de tache
    
}
exports.userenregister = function(req,res) {
    console.log("souh");
    console.log("name");
    console.log(req.body.Nom);
    //let rooms= new Room(req.body.name,req.body.length,req.body.width);
    let shopping = {"name":req.body.Nom,"quantity":req.body.Quantite};
    
    connection.query("INSERT INTO shopping SET ? ",shopping,function(error, result){
        
        if (error) console.log(error);
        res.render('ajouter.ejs');//result:json: liste qui contient l'identifiant et nom de tache
    });
}

exports.suppression = function(req,res){
    console.log("souh");
    let id_item = req.query.id_item;
    connection.query("select * from shopping;",function(error, result){
        if (error) console.log(error);
        result.splice(id_item,1);
        console.log(result);
        res.render('userlist.ejs',{users: result});//result:json: liste qui contient l'identifiant et nom de tache
    });
    
    
    
    
}

exports.achete = function(req,res){
        
        res.render('userlist.ejs',{users: result});//result:json: liste qui contient l'identifiant et nom de tache
      
    
}