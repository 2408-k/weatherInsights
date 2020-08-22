const express = require('express');
const app=express();
const ejs = require("ejs");
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',function(req,res)
{
	res.render("index");
})
var poRt=process.env.PORT || 3000; 
app.listen(poRt,function()
{
	console.log(" server started");
});