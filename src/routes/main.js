const express = require('express');
// const {route} = require('express/lib/application');
const Detail = require("../models/details");
const Slider = require("../models/slider");
const Service = require("../models/service");
const Contact = require("../models/contact");
const bodyParser = require("body-parser")

const routes = express.Router();
routes.get( '/' , async (req,res) => {
    const detail =await Detail.findOne({"_id":"63d5075a99eff58ddb773965"});
    const slides = await Slider.find();
    const service = await Service.find();
    res.render('index.hbs',{
        details:detail,
        slides:slides,
        service:service
    });
});
routes.get('/gallery',async (req,res)=>{
    const detail =await Detail.findOne({"_id":"63d5075a99eff58ddb773965"});
    res.render('gallery.hbs',{
        details:detail,
    });
}) ;
routes.post('/process-contact-form',async (req,res) => {
    console.log('form is submitted');
    try{

        const data = await Contact.create(req.body);
        res.redirect('/');
        console.log(data);
    }
    catch(e)
    {
        console.log(e);
    }
});
module.exports = routes;
